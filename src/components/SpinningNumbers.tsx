'use client';

import React, { useState, useEffect } from 'react';

const SpinningNumbers = ({ width, height }: { width: number; height: number }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [containerSize, setContainerSize] = useState(0);
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1); // 1 to 10
  
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
          const angle = (i / numbers.length) * 2 * Math.PI; // 360도를 라디안으로 계산
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          const rotation = (i / numbers.length) * 360; // 각 숫자의 기울기

          return (
            <div
              key={num}
              className="absolute text-white text-[8vw] font-bold"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(${rotation + 90}deg)`, // 숫자가 원의 바깥쪽을 향하도록 조정
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