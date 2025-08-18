'use client';

interface BettingConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  usdtAmount: number;
  betType: 'low' | 'high';
}

export default function BettingConfirmModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  usdtAmount, 
  betType 
}: BettingConfirmModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-[70]"
      onClick={handleBackdropClick}
    >
      <div className="fixed bottom-0 bg-[#00000080] w-full text-center px-4 pt-[16vw] pb-[20vw]">
        {/* Selected Cards - Side by Side */}
        <div className="flex justify-center gap-4 mb-6">
          {/* USDT Amount Card */}
          <div className="bg-black rounded-xl border-2 border-white w-[24.17vw] h-[9.72vw] flex items-center justify-center">
            <span className="text-[#FFD700] font-bold text-[3.89vw]">
              USDT {usdtAmount}
            </span>
          </div>

          {/* Bet Type Card */}
          <div className={`rounded-xl border-2 border-white w-[24.17vw] h-[9.72vw] flex items-center justify-center ${
            betType === 'low' 
              ? 'bg-[#8A0C0E]' 
              : 'bg-[#053065]'
          }`}>
            <span className="text-white font-bold text-[3.89vw] capitalize">
              {betType}
            </span>
          </div>
        </div>

        {/* Betting Button */}
        <div className="mb-4 flex justify-center">
          <button
            onClick={onConfirm}
            className="bg-gradient-to-b from-[#4A3B8A] to-[#2A1B5D] text-white font-bold text-[4.44vw] rounded-xl border-2 border-white hover:from-[#5A4B9A] hover:to-[#3A2B6D] transition-all duration-200 w-[46.94vw] h-[19.72vw] flex items-center justify-center"
          >
            Betting
          </button>
        </div>
      </div>
    </div>
  );
}
