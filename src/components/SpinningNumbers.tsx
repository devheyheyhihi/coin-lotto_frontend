'use client';

import React, { useState, useEffect } from 'react';

interface SpinningNumbersProps {
  width: number; 
  height: number;
  numbers?: number[]; // 서버에서 받은 숫자 배열
}

const SpinningNumbers = ({ width, height, numbers = [1,2,3,4,5,6,7,8,9,10] }: SpinningNumbersProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [containerSize, setContainerSize] = useState(0);
  
  useEffect(() => {
    const calculateSize = () => {
      // width가 90이면 90vw를 의미
      const viewportWidth = window.innerWidth;
      const calculatedSize = viewportWidth * (width / 100);
      setContainerSize(calculatedSize);
    };

    calculateSize();
    window.addEventListener('resize', calculateSize);
    
    return () => window.removeEventListener('resize', calculateSize);
  }, [width]);
  
  const centerX = containerSize / 2; // 컨테이너 중심 X
  const centerY = containerSize / 2; // 컨테이너 중심 Y  
  const radius = (containerSize / 2) * 0.65; // 반지름의 70% (30% 줄임)

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // 또는 로딩 스켈레톤을 보여줄 수 있습니다.
  }

  return (
    <div className="relative mx-auto" style={{ width: containerSize, height: containerSize }}>
      <div className="relative w-full h-full">
        {numbers.map((num, i) => {
          // 12시 방향을 0도로 시작 (Math.cos/sin은 3시 방향이 0도이므로 -90도 조정)
          const angle = (i / numbers.length) * 2 * Math.PI - Math.PI / 2; // -90도 조정
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          
          // 각 숫자가 원의 중심을 향하도록 회전 (라디안을 도로 변환)
          const rotationDegrees = (angle * 180 / Math.PI) + 90; // +90도로 중심을 향하게
          

          
          return (
            <div
              key={num}
              className="absolute text-white text-[8vw] font-bold"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(${rotationDegrees}deg)`, // 원의 중심을 향하도록 회전
              }}
            >
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpinningNumbers; 