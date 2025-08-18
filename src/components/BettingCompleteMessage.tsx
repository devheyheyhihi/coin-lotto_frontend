'use client';

import { useEffect } from 'react';

interface BettingCompleteMessageProps {
  isVisible: boolean;
  onHide: () => void;
}

export default function BettingCompleteMessage({ isVisible, onHide }: BettingCompleteMessageProps) {
  useEffect(() => {
    if (isVisible) {
      // 3초 후 자동으로 메시지 숨김
      const timer = setTimeout(() => {
        onHide();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[80] pointer-events-none">
      {/* Betting Complete Message */}
      <div className="bg-gradient-to-r w-full from-[#FFF714] to-[#FFFFF5] text-black font-bold text-[6vw] shadow-2xl animate-pulse">
        <div className="text-center py-[1vw]">
          Betting complete !
        </div>
      </div>
    </div>
  );
}
