'use client';

import { useState, useRef, useEffect } from 'react';
import Timer from './Timer';
import { API_BASE_URL } from '../config';
import { useAuth } from '../contexts/AuthContext';

interface FloatingBarProps {
  initialPosition?: { x: number; y: number };
  onPlusClick?: () => void;
  deadline?: string | null; // Timer 컴포넌트에서 사용할 deadline
}

interface RouletteBet {
  bet_type: 'LOW' | 'HIGH';
  bet_amount: string;
  created_at: string;
  nickname?: string;
}

interface RouletteCurrentBets {
  round_number: number;
  round_id: number;
  low_bets: RouletteBet[];
  high_bets: RouletteBet[];
  total_low: number;
  total_high: number;
}

const FloatingBar: React.FC<FloatingBarProps> = ({ 
  initialPosition = { x: 20, y: 100 },
  onPlusClick,
  deadline
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);
  const floatingBarRef = useRef<HTMLDivElement>(null);

  // 룰렛 베팅 데이터
  const [rouletteBets, setRouletteBets] = useState<RouletteCurrentBets | null>(null);
  const [loading, setLoading] = useState(false);

  // 사용자 balance 데이터
  const { user } = useAuth();
  const [balance, setBalance] = useState<number>(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // 사용자 balance 가져오기
  const fetchBalance = async () => {
    if (!user?.walletAddress) return;
    try {
      const response = await fetch(`${API_BASE_URL}/balance/${user.walletAddress}`);
      if (response.ok) {
        const data = await response.json();
        // 값이 변경된 경우에만 상태 업데이트 (깜빡임 방지)
        if (data.balance !== balance) {
          setBalance(data.balance);
        }
        if (isInitialLoad) {
          setIsInitialLoad(false);
        }
      }
    } catch (error) {
      console.error('Failed to fetch balance:', error);
    }
  };

  // 룰렛 베팅 데이터 가져오기
  const fetchRouletteBets = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/roulette/current-bets`);
      if (response.ok) {
        const data = await response.json();
        setRouletteBets(data);
      }
    } catch (error) {
      console.error('Failed to fetch roulette bets:', error);
    } finally {
      setLoading(false);
    }
  };

  // 사용자 로그인 시 balance 가져오기
  useEffect(() => {
    if (user?.walletAddress) {
      fetchBalance();
      // 10초마다 balance 업데이트 (베팅 시 즉시 반영되므로 주기 연장)
      const interval = setInterval(fetchBalance, 10000);
      // 실시간 즉시 반영: 전역 balance:update 이벤트 구독
      const handleBalanceUpdate = (e: Event) => {
        const custom = e as CustomEvent<number>;
        if (typeof custom.detail === 'number') {
          setBalance(custom.detail);
        }
      };
      if (typeof window !== 'undefined') {
        window.addEventListener('balance:update', handleBalanceUpdate as EventListener);
      }
      return () => clearInterval(interval);
    } else {
      // 로그아웃 시 balance 초기화
      setBalance(0);
      setIsInitialLoad(true);
    }
  }, [user?.walletAddress]);

  // 컴포넌트 마운트 시와 확장 시 데이터 가져오기
  useEffect(() => {
    if (isExpanded) {
      fetchRouletteBets();
      // 5초마다 데이터 업데이트
      const interval = setInterval(fetchRouletteBets, 5000);
      return () => clearInterval(interval);
    }
  }, [isExpanded]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    // 드래그 시작 시 스크롤 막기
    document.body.style.overflow = 'hidden';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // 드래그 종료 시 스크롤 다시 허용
    document.body.style.overflow = 'auto';
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });
    // 터치 드래그 시작 시 스크롤 막기
    document.body.style.overflow = 'hidden';
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // 터치 드래그 종료 시 스크롤 다시 허용
    document.body.style.overflow = 'auto';
  };

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (onPlusClick) onPlusClick();
  };

  return (
          <div
        ref={floatingBarRef}
        className="fixed z-[60] bg-black px-2 rounded-lg select-none overflow-hidden"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '200px',
          height: isExpanded ? '150px' : '10vw',
          transition: isDragging ? 'none' : 'height 0.3s ease'
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
      {/* Header bar */}
      <div 
        className="flex items-center justify-between h-[10vw] cursor-move"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Close/Plus button */}
        <button 
          className="text-white text-[6.5vw] font-bold hover:text-blue-400"
          onClick={handleToggleExpanded}
        >
          {isExpanded ? '–' : '+'}
        </button>
        
        {/* Balance display with Tether icon */}
        <div className="flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z" fill="#298D75"/>
            <path d="M8.55271 5.10432C8.55271 4.55541 6.90655 4.34664 5.65347 4.29429V3.43637H7.67966V2.13525H2.32617V3.43637H4.35236V4.29429C3.09928 4.34664 1.45312 4.55541 1.45312 5.10432C1.45312 5.65324 3.09928 5.86201 4.35236 5.91435V8.69897H5.65347V5.91435C6.90655 5.86201 8.55271 5.65324 8.55271 5.10432ZM7.40446 5.48539C6.76421 5.61691 5.91147 5.68927 5.00299 5.68927C4.09451 5.68927 3.24177 5.61691 2.60152 5.48539C1.85569 5.33222 1.69244 5.15844 1.69244 5.10432C1.69244 5.0502 1.85584 4.87657 2.60152 4.72326C3.08608 4.62376 3.69238 4.55808 4.35236 4.53213V5.39746H5.65347V4.53213C6.31345 4.55822 6.9199 4.62376 7.40431 4.72326C8.15014 4.87642 8.31339 5.0502 8.31339 5.10432C8.31339 5.15844 8.14999 5.33222 7.40431 5.48539H7.40446Z" fill="white"/>
          </svg>
          <span className="text-[#EEFF00] text-xs">
            {isInitialLoad ? '...' : balance.toLocaleString()}
          </span>
        </div>
        
        {/* Timer display */}
        <div>
          <Timer 
            deadline={deadline || null}
            digitClassName="font-['LABDigital'] text-cyan-400 text-xs"
            colonClassName="font-['LABDigital'] text-cyan-400 text-xs"
            containerClassName="flex items-center gap-2"
            showDate={false}
          />
        </div>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div 
          className="px-1/2 pb-3 overflow-y-auto cursor-default" 
          style={{ height: '118px' }}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-white text-xs">로딩 중...</div>
            </div>
          ) : rouletteBets ? (
            <div className="space-y-2">
              {/* 라운드 정보 */}
              <div className="text-center text-white text-xs mb-2">
                Round #{rouletteBets.round_number}
              </div>
              
              {/* 모든 베팅을 최신순으로 합쳐서 표시 */}
              {[...rouletteBets.low_bets, ...rouletteBets.high_bets]
                .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                .map((bet, index) => (
                  <div 
                    key={`bet-${index}`}
                    className="flex items-center justify-between bg-black border border-yellow-400 rounded-lg px-3 py-2 flex-shrink-0"
                  >
                    <span className="text-yellow-400 text-center font-['Pretendard'] text-[3.89vw] font-normal leading-normal">
                      USDT {bet.bet_amount}
                    </span>
                    <span className={`${bet.bet_type === 'LOW' ? 'text-red-500' : 'text-blue-400'} text-center font-['Pretendard'] text-[3.89vw] font-normal leading-normal`}>
                      {bet.bet_type}
                    </span>
                  </div>
                ))}
              
              {/* 베팅이 없을 때 */}
              {rouletteBets.low_bets.length === 0 && rouletteBets.high_bets.length === 0 && (
                <div className="text-center text-gray-400 text-xs">
                  아직 베팅이 없습니다
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-400 text-xs">데이터를 불러올 수 없습니다</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingBar;
