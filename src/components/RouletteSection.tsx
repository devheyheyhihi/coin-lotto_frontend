'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import SpinningNumbers from './SpinningNumbers';

interface RouletteSectionProps {
  numbers?: number[]; // 서버에서 받은 숫자 배열
  isDrawing?: boolean; // 추첨 중인지 여부
  winningNumber?: number | null; // 당첨 번호
  onAnimationComplete?: () => void; // 애니메이션 완료 콜백
}

const RouletteSection = ({ numbers = [1,2,3,4,5,6,7,8,9,10], isDrawing = false, winningNumber, onAnimationComplete }: RouletteSectionProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [prevWinningNumber, setPrevWinningNumber] = useState<number | null>(null);
  const rouletteRef = useRef<HTMLDivElement>(null);

  // 당첨 번호에 따른 최종 회전 각도 계산
  const calculateWinningAngle = (winningNum: number, numberSequence: number[]) => {
    const index = numberSequence.indexOf(winningNum);
    if (index === -1) return 0;
    
    // 각 숫자당 36도 (360도 / 10개)
    const baseAngle = (index / 10) * 360;

    // 12시 방향에 오도록 계산 (시계 반대 방향으로 회전)
    // 현재 위치에서 12시 방향(0도)으로 가려면 -baseAngle만큼 회전
    // 5바퀴 추가 회전 + 12시 방향 정렬
    const finalAngle = 360 * 5 - baseAngle;

    return finalAngle;
  };

  const handleTransitionEnd = useCallback(() => {
    if (isAnimating) {
      console.log(`🏁 Animation completed for ${winningNumber}`);
      setIsAnimating(false);
      onAnimationComplete?.();
    }
  }, [isAnimating, winningNumber, onAnimationComplete]);

  // 추첨 시작 감지
  useEffect(() => {
    if (isDrawing && winningNumber) {
      console.log(`🚀 ANIMATION TRIGGER: winningNumber=${winningNumber} (prev: ${prevWinningNumber})`);

      // 새로운 번호일 때만 초기화 및 시작
      if (winningNumber !== prevWinningNumber) {
        console.log(`✨ NEW NUMBER DETECTED - Starting fresh animation`);

        // 이전 번호 업데이트
        setPrevWinningNumber(winningNumber);

        // 애니메이션 상태 초기화 (회전 각도를 0으로 되돌림)
        // transition을 잠시 비활성화하여 즉시 0도로 이동
        setIsAnimating(false); // transition 비활성화
        setRotation(prev => prev - (prev % 360)); // 현재 각도에서 가장 가까운 0도 배수로 이동

        // 새로운 각도 계산
        const targetAngle = calculateWinningAngle(winningNumber, numbers);
        console.log(`🎯 Target angle: ${targetAngle}° for number ${winningNumber}`);

        // 약간의 지연 후 애니메이션 시작 (DOM 업데이트 보장)
        setTimeout(() => {
          console.log(`🚀 Starting animation NOW!`);
          setIsAnimating(true);
          setRotation(rotation + targetAngle);
        }, 50); // 최소 지연
      } else {
        console.log(`🔄 Same number - keeping current animation`);
      }
    }
  }, [isDrawing, winningNumber, numbers, prevWinningNumber]);

  // 동적 스타일 생성
  const getRouletteStyle = () => {
    return {
      transform: `rotate(${rotation}deg)`,
      transition: isAnimating ? 'transform 4s cubic-bezier(0.25, 0.46, 0.45, 0.99)' : 'none',
    };
  };

  return (
    <div className="relative mx-auto w-[80vw] h-[80vw]">
      <div
        ref={rouletteRef}
        className={`relative w-full h-full ${!isDrawing ? 'roulette-idles' : ''}`}
        style={getRouletteStyle()}
        onTransitionEnd={handleTransitionEnd}
      >
        <Image
          src="/roulette.svg"
          alt="roulette"
          width={500}
          height={500}
          className="absolute inset-0 w-full h-full"
          style={{ transform: 'rotate(17deg)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <SpinningNumbers width={80} height={80} numbers={numbers}/>
        </div>
      </div>
      

    </div>
  );
};

export default RouletteSection; 