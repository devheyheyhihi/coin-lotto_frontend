'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import RouletteSection from './RouletteSection';
import Timer from './Timer';
import BettingConfirmModal from './BettingConfirmModal';
import BettingCompleteMessage from './BettingCompleteMessage';

interface RouletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  deadline?: string | null; // 룰렛 게임의 deadline
}

export default function RouletteModal({ isOpen, onClose, deadline }: RouletteModalProps) {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [selectedUsdtAmount, setSelectedUsdtAmount] = useState<number | null>(null);
  const [selectedBetType, setSelectedBetType] = useState<'low' | 'high' | null>(null);
  const [showBettingConfirm, setShowBettingConfirm] = useState(false);
  const [showBettingComplete, setShowBettingComplete] = useState(false);
  
  const handleNumberSelect = (num: number) => {
    setSelectedNumbers(prev => 
      prev.includes(num) ? prev.filter(n => n !== num) : [...prev, num]
    );
  };

  const handleUsdtSelect = (amount: number) => {
    setSelectedUsdtAmount(prev => prev === amount ? null : amount);
    console.log('Selected USDT amount:', amount);
    // TODO: 서버에 선택된 금액 전송
  };

  const handleBetTypeSelect = (type: 'low' | 'high') => {
    // 같은 타입 클릭 시 해제, 다른 타입 클릭 시 변경
    setSelectedBetType(prev => prev === type ? null : type);
    console.log('Selected bet type:', type);
  };

  // USDT 금액과 베팅 타입이 모두 선택되면 확인 모달 표시
  useEffect(() => {
    if (selectedUsdtAmount && selectedBetType) {
      setShowBettingConfirm(true);
    }
  }, [selectedUsdtAmount, selectedBetType]);

  const handleBettingConfirm = () => {
    console.log('Betting confirmed:', {
      amount: selectedUsdtAmount,
      type: selectedBetType,
      selectedNumbers: selectedNumbers
    });
    
    // TODO: 서버에 베팅 정보 전송
    
    // 베팅 확인 모달 닫고 완료 메시지 표시
    setShowBettingConfirm(false);
    setShowBettingComplete(true);
    
    // 선택 상태 초기화
    setSelectedUsdtAmount(null);
    setSelectedBetType(null);
    setSelectedNumbers([]);
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
      <div className="relative bg-[#1a1a2e] w-full mx-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-[url('/bg_page_roullette.png')] bg-[length:100%_100%]">
        {/* Header with Close Button - Fixed */}
        <div className="fixed top-7 right-4 z-10 flex justify-end items-center pr-[3vw] py-2">
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-300 text-[6vw] font-bold"
          >
            ×
          </button>
        </div>

        <div className="text-white font-sans py-[8vw]">
          {/* Top Timer Bar */}
          <div className="mx-auto w-[70vw] bg-black py-[1.5vw] border-1 border-yellow-400 text-center rounded-xl">
            <Timer 
              deadline={deadline}
              digitClassName="font-['LABDigital'] text-[#2BF7FF] text-[10vw]"
              colonClassName="font-['LABDigital'] text-[#2BF7FF] text-[10vw]"
              containerClassName="flex items-center justify-center gap-1"
              showDate={false}
              enableMobileWarning={true}
            />
          </div>

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
                className={`text-[3.89vw] font-bold rounded-xl w-[24.17vw] h-[9.72vw] transition-all duration-200 ${
                  selectedUsdtAmount === amount
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
              onClick={() => handleBetTypeSelect('low')}
              className={`w-1/2 rounded-xl border-2 border-white text-center py-[3vw] px-[3.98vw] cursor-pointer transition-all duration-200 ${
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
              <p className="text-[3.3vw] font-semibold">6,080,900</p>
            </div>

            {/* High */}
            <div 
              onClick={() => handleBetTypeSelect('high')}
              className={`w-1/2 rounded-xl border-2 border-white text-center py-[3vw] px-[3.98vw] cursor-pointer transition-all duration-200 ${
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
              <p className="text-[3.3vw] font-semibold">16,080,900</p>
            </div>
          </div>
        </div>
      </div>

      {/* Betting Confirm Modal */}
      {selectedUsdtAmount && selectedBetType && (
        <BettingConfirmModal
          isOpen={showBettingConfirm}
          onClose={handleBettingCancel}
          onConfirm={handleBettingConfirm}
          usdtAmount={selectedUsdtAmount}
          betType={selectedBetType}
        />
      )}

      {/* Betting Complete Message */}
      <BettingCompleteMessage
        isVisible={showBettingComplete}
        onHide={() => setShowBettingComplete(false)}
      />
    </div>
  );
}
