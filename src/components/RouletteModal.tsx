'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import RouletteSection from './RouletteSection';
import Timer from './Timer';
import BettingConfirmModal from './BettingConfirmModal';
import BettingCompleteMessage from './BettingCompleteMessage';
import LoginModal from './LoginModal';
import { useAuth } from '../contexts/AuthContext';
import { API_BASE_URL } from '../config';

interface RouletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  deadline?: string | null; // 룰렛 게임의 deadline
}

export default function RouletteModal({ isOpen, onClose, deadline }: RouletteModalProps) {
  const { token, isLoggedIn } = useAuth();
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [selectedUsdtAmount, setSelectedUsdtAmount] = useState<number | null>(null);
  const [selectedBetType, setSelectedBetType] = useState<'low' | 'high' | null>(null);
  const [showBettingConfirm, setShowBettingConfirm] = useState(false);
  const [showBettingComplete, setShowBettingComplete] = useState(false);
  
  // 룰렛 게임 상태
  const [poolStatus, setPoolStatus] = useState({ low_pool: 0, high_pool: 0, total_pool: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // 로그인 모달 상태
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  // 로그인이 필요한 상황 처리
  const handleLoginRequired = () => {
    setError('로그인이 필요합니다.');
    setShowLoginModal(true);
  };
  
  // 로그인 성공 후 처리
  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    setError(null);
    // 로그인 후 풀 상태 새로고침
    fetchPoolStatus();
  };
  
  // 베팅 풀 상태 가져오기
  const fetchPoolStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/roulette/pool-status`);
      if (response.ok) {
        const data = await response.json();
        setPoolStatus(data);
      }
    } catch (error) {
      console.error('Failed to fetch pool status:', error);
    }
  };
  
  // 실제 베팅 API 호출
  const placeBet = async (betType: 'LOW' | 'HIGH', amount: number) => {
    if (!token || !isLoggedIn) {
      setError('로그인이 필요합니다.');
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/roulette/bet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          bet_type: betType,
          amount: amount
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        console.log('✅ Bet placed successfully:', data);
        await fetchPoolStatus(); // 베팅 후 풀 상태 업데이트
        return true;
      } else {
        setError(data.message || '베팅에 실패했습니다.');
        return false;
      }
    } catch (error) {
      console.error('❌ Betting error:', error);
      setError('네트워크 오류가 발생했습니다.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  
  // 모달이 열릴 때마다 풀 상태 가져오기
  useEffect(() => {
    if (isOpen) {
      fetchPoolStatus();
      // 5초마다 풀 상태 업데이트
      const interval = setInterval(fetchPoolStatus, 5000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);
  
  const handleNumberSelect = (num: number) => {
    setSelectedNumbers(prev => 
      prev.includes(num) ? prev.filter(n => n !== num) : [...prev, num]
    );
  };

  const handleUsdtSelect = (amount: number) => {
    if (!isLoggedIn) {
      handleLoginRequired();
      return;
    }
    setSelectedUsdtAmount(prev => prev === amount ? null : amount);
    console.log('Selected USDT amount:', amount);
  };

  const handleBetTypeSelect = (type: 'low' | 'high') => {
    if (!isLoggedIn) {
      handleLoginRequired();
      return;
    }
    // 같은 타입 클릭 시 해제, 다른 타입 클릭 시 변경
    setSelectedBetType(prev => prev === type ? null : type);
    console.log('Selected bet type:', type);
  };

  // USDT 금액과 베팅 타입이 모두 선택되면 확인 모달 표시 (로그인된 사용자만)
  useEffect(() => {
    if (selectedUsdtAmount && selectedBetType && isLoggedIn) {
      setShowBettingConfirm(true);
    }
  }, [selectedUsdtAmount, selectedBetType, isLoggedIn]);

  const handleBettingConfirm = async () => {
    if (!selectedUsdtAmount || !selectedBetType) {
      setError('베팅 정보가 완전하지 않습니다.');
      return;
    }
    
    console.log('🎰 Betting confirmed:', {
      amount: selectedUsdtAmount,
      type: selectedBetType,
      selectedNumbers: selectedNumbers
    });
    
    // 실제 베팅 API 호출
    const success = await placeBet(selectedBetType.toUpperCase() as 'LOW' | 'HIGH', selectedUsdtAmount);
    
    if (success) {
      // 베팅 성공 시
      setShowBettingConfirm(false);
      setShowBettingComplete(true);
      
      // 선택 상태 초기화
      setSelectedUsdtAmount(null);
      setSelectedBetType(null);
      setSelectedNumbers([]);
    } else {
      // 베팅 실패 시 - 확인 모달은 닫지만 선택 상태는 유지
      setShowBettingConfirm(false);
    }
  };

  const handleBettingCancel = () => {
    setShowBettingConfirm(false);
    // 베팅 취소 시 모든 선택 상태 초기화
    setSelectedUsdtAmount(null);
    setSelectedBetType(null);
    setSelectedNumbers([]);
  };

  const handleBet = (type: 'low' | 'high') => {
    if (!selectedUsdtAmount) {
      alert('USDT 금액을 먼저 선택해주세요.');
      return;
    }
    
    console.log(`Betting ${selectedUsdtAmount} USDT on ${type}`, {
      amount: selectedUsdtAmount,
      type: type,
      selectedNumbers: selectedNumbers
    });
    
    // TODO: 서버에 베팅 정보 전송
    // API 호출 예시:
    // await fetch('/api/roulette/bet', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     amount: selectedUsdtAmount,
    //     type: type,
    //     numbers: selectedNumbers
    //   })
    // });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // 클릭된 요소가 backdrop(바깥 영역)인 경우에만 onClose 실행
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#1a1a2e] w-full mx-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-[url('/bg_page_roullette.png')] bg-[length:100%_100%]">
        

        <div className="relative text-white font-sans py-[8vw]">
          {/* Header with Close Button - Fixed */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-[6vw] font-bold"
          >
            ×
          </button>
          
          {/* Top Timer Bar */}
          <div className="mx-auto w-[70vw] bg-black py-[1.5vw] border-1 border-yellow-400 text-center rounded-xl">
            <Timer 
              deadline={deadline || null}
              digitClassName="font-['LABDigital'] text-[#2BF7FF] text-[10vw]"
              colonClassName="font-['LABDigital'] text-[#2BF7FF] text-[10vw]"
              containerClassName="flex items-center justify-center gap-1"
              showDate={false}
              enableMobileWarning={true}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mx-4 mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg">
              <p className="text-red-300 text-center text-[3.5vw]">{error}</p>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="mx-4 mt-4 p-3 bg-blue-500/20 border border-blue-500 rounded-lg">
              <p className="text-blue-300 text-center text-[3.5vw]">베팅 처리 중...</p>
            </div>
          )}

          {/* Roulette Wheel */}
          <div className="flex justify-center relative mt-[7vw] mb-[10vw]">
            <RouletteSection />
            
            {/* Vector pointer */}
            <div className="absolute top-[1vw] left-1/2 transform -translate-x-1/2 z-10">
              <Image 
                src="/img_vector.png" 
                alt="Vector Pointer" 
                width={40} 
                height={40} 
                className="mx-auto w-[6vw] h-auto"
              />
            </div>
          </div>

          {/* USDT Buttons */}
          <div className="flex justify-center gap-4 mb-8 px-4">
            {[1, 10, 100].map((amount) => (
              <button 
                key={amount}
                onClick={() => handleUsdtSelect(amount)}
                disabled={isLoading}
                className={`text-[3.89vw] font-bold rounded-xl w-[24.17vw] h-[9.72vw] transition-all duration-200 ${
                  isLoading
                    ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                    : selectedUsdtAmount === amount
                      ? 'border border-[#EF0] bg-black text-[#EF0]'
                      : 'bg-gradient-to-b from-[#FFFF1B] via-[#FFEB12] to-[#B78600] text-[#2D2929] border-2 border-white'
                }`}
              >
                USDT {amount}
              </button>
            ))}
          </div>

          {/* Low/High Betting Areas */}
          <div className="flex flex-row gap-4 px-4 pb-4">
            {/* Low */}
            <div 
              onClick={() => !isLoading && handleBetTypeSelect('low')}
              className={`w-1/2 rounded-xl border-2 border-white text-center py-[3vw] px-[3.98vw] transition-all duration-200 ${
                isLoading
                  ? 'cursor-not-allowed opacity-50'
                  : 'cursor-pointer'
              } ${
                selectedBetType === 'low' 
                  ? 'bg-[#8A0C0E]' 
                  : 'bg-gradient-to-b from-[#3B16BF] via-[#D01818] to-[#DA5B5B]'
              }`}
            >
              <h3 className="text-[3.89vw] font-bold">low</h3>
              <div className="grid grid-cols-5 gap-2 my-[2vw]">
                {[1, 2, 3, 4, 5].map(num => (
                                      <button 
                      key={num}
                      onClick={() => handleNumberSelect(num)}
                      className={`text-[3vw] rounded-full font-bold w-[5.5vw] h-[5.5vw] flex items-center justify-center bg-[#FF5356] text-white`}
                    >
                    {num}
                  </button>
                ))}
              </div>
              <p className="text-[3.3vw] font-semibold">{poolStatus.low_pool.toLocaleString()}</p>
            </div>

            {/* High */}
            <div 
              onClick={() => !isLoading && handleBetTypeSelect('high')}
              className={`w-1/2 rounded-xl border-2 border-white text-center py-[3vw] px-[3.98vw] transition-all duration-200 ${
                isLoading
                  ? 'cursor-not-allowed opacity-50'
                  : 'cursor-pointer'
              } ${
                selectedBetType === 'high' 
                  ? 'bg-[#053065]' 
                  : 'bg-gradient-to-b from-[#38679D] via-63% via-[#3B16BF] to-[#1E1780]'
              }`}
            >
              <h3 className="text-[3.89vw] font-bold">high</h3>
              <div className="grid grid-cols-5 gap-2 my-[2vw]">
                {[6, 7, 8, 9, 10].map(num => (
                                    <button 
                      key={num}
                      onClick={() => handleNumberSelect(num)}
                      className={`text-[3vw] rounded-full font-bold w-[5.5vw] h-[5.5vw] flex items-center justify-center bg-[#5A7FFA] text-white`}
                    >
                    {num}
                  </button>
                ))}
              </div>
              <p className="text-[3.3vw] font-semibold">{poolStatus.high_pool.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Betting Confirm Modal - 로그인된 사용자만 */}
      {selectedUsdtAmount && selectedBetType && isLoggedIn && (
        <BettingConfirmModal
          isOpen={showBettingConfirm}
          onClose={handleBettingCancel}
          onConfirm={handleBettingConfirm}
          usdtAmount={selectedUsdtAmount}
          betType={selectedBetType}
        />
      )}

      {/* Login Modal - 비로그인 사용자용 */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Betting Complete Message */}
      <BettingCompleteMessage
        isVisible={showBettingComplete}
        onHide={() => setShowBettingComplete(false)}
      />
    </div>
  );
}
