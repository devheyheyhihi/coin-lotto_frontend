'use client';

import { useState, useRef, useEffect } from 'react';
import Timer from './Timer';
import { API_BASE_URL } from '../config';

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
          width: '151px',
          height: isExpanded ? '150px' : '21px',
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
        className="flex items-center justify-between h-[21px] cursor-move"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Close/Plus button */}
        <button 
          className="text-white text-sm font-bold hover:text-blue-400"
          onClick={handleToggleExpanded}
        >
          {isExpanded ? 'ㅡ' : '+'}
        </button>
        
        {/* Timer display */}
        <div>
          <Timer 
            deadline={deadline || null}
            digitClassName="font-['LABDigital'] text-cyan-400 text-xs"
            colonClassName="font-['LABDigital'] text-cyan-400 text-xs"
            containerClassName="flex items-center gap-1"
            showDate={false}
          />
        </div>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div 
          className="px-1/2 pb-3 overflow-y-auto cursor-default" 
          style={{ height: '129px' }}
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
