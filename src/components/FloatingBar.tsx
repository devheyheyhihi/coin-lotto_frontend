'use client';

import { useState, useRef } from 'react';
import Timer from './Timer';

interface FloatingBarProps {
  initialPosition?: { x: number; y: number };
  onPlusClick?: () => void;
  deadline?: string | null; // Timer 컴포넌트에서 사용할 deadline
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

  // 목업 데이터
  const mockData = [
    { amount: "USDT 1", status: "LOW", color: "text-red-500" },
    { amount: "USDT 10", status: "LOW", color: "text-red-500" },
    { amount: "USDT 100", status: "HIGH", color: "text-blue-400" }
  ];

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
      className="fixed z-[60] bg-black px-2 rounded-lg cursor-move select-none overflow-hidden"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '151px',
        height: isExpanded ? '150px' : '21px',
        transition: isDragging ? 'none' : 'height 0.3s ease'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between h-[21px]">
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
            deadline={deadline}
            digitClassName="font-['LABDigital'] text-cyan-400 text-xs"
            colonClassName="font-['LABDigital'] text-cyan-400 text-xs"
            containerClassName="flex items-center gap-1"
            showDate={false}
          />
        </div>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-1/2 pb-3 overflow-y-auto" style={{ height: '129px' }}>
          <div className="space-y-2">
            {mockData.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between bg-black border border-yellow-400 rounded-lg px-3 py-2 flex-shrink-0"
              >
                <span className="text-yellow-400 text-center font-['Pretendard'] text-[3.89vw] font-normal leading-normal">
                  {item.amount}
                </span>
                <span className={`${item.color} text-center font-['Pretendard'] text-[3.89vw] font-normal leading-normal`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingBar;
