'use client';

import React, { useState, useEffect } from 'react';

const SpinningNumbers = () => {
  const [isMounted, setIsMounted] = useState(false);
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1); // 1 to 10
  const radius = 120; // 원의 반지름 (pixels)
  const centerX = 150; // 원의 중심 X 좌표
  const centerY = 150; // 원의 중심 Y 좌표

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // 또는 로딩 스켈레톤을 보여줄 수 있습니다.
  }

  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      <div className="relative w-full h-full">
        {numbers.map((num, i) => {
          const angle = (i / numbers.length) * 2 * Math.PI; // 360도를 라디안으로 계산
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          const rotation = (i / numbers.length) * 360; // 각 숫자의 기울기

          return (
            <div
              key={num}
              className="absolute text-white text-3xl font-bold"
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