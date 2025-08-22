'use client';

import { useEffect } from 'react';

interface RoundCanceledMessageProps {
  isVisible: boolean;
  onHide: () => void;
}

export default function RoundCanceledMessage({ isVisible, onHide }: RoundCanceledMessageProps) {
  useEffect(() => {
    if (isVisible) {
      // 4초 후 자동으로 메시지 숨김 (조금 더 길게)
      const timer = setTimeout(() => {
        onHide();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[80] pointer-events-none">
      {/* Round Canceled Message */}
      <div className="bg-gradient-to-r w-full from-[#FF6B6B] to-[#FFE5E5] text-black font-bold text-[6vw] shadow-2xl animate-pulse">
        <div className="text-center py-[1vw]">
          <div className="text-[4vw] mb-[0.5vw]">⚠️</div>
          <div>Latest Round Canceled!</div>
          <div className="text-[3vw] mt-[0.5vw] opacity-80">
            All bets have been refunded
          </div>
        </div>
      </div>
    </div>
  );
}
