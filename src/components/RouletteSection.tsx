'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [finalRotation, setFinalRotation] = useState(0);
  const [prevWinningNumber, setPrevWinningNumber] = useState<number | null>(null);
  const rouletteRef = useRef<HTMLDivElement>(null);
  
  // 당첨 번호에 따른 최종 회전 각도 계산
  const calculateWinningAngle = (winningNum: number, numberSequence: number[]) => {
    const index = numberSequence.indexOf(winningNum);
    if (index === -1) return 0;
    
    // 각 숫자당 36도 (360도 / 10개)
    const baseAngle = (index / 10) * 360;
    
    console.log(`📐 Number ${winningNum} at index ${index}, baseAngle: ${baseAngle}°`);
    
    // 12시 방향에 오도록 계산 (시계 반대 방향으로 회전)
    // 현재 위치에서 12시 방향(0도)으로 가려면 -baseAngle만큼 회전
    // 5바퀴 추가 회전 + 12시 방향 정렬
    const finalAngle = 360 * 5 - baseAngle;
    
    console.log(`🎯 Final calculation: 360*5 - ${baseAngle} = ${finalAngle}°`);
    
    return finalAngle;
  };
  
  // 추첨 시작 감지
  useEffect(() => {
    // 중요한 상태 변화만 로그 출력
    if (isDrawing && winningNumber && winningNumber !== prevWinningNumber) {
      console.log(`🎯 RouletteSection: New animation trigger - winningNumber=${winningNumber}, prev=${prevWinningNumber}`);
    }
    
    if (isDrawing && winningNumber) {
      console.log(`🚀 ANIMATION TRIGGER: winningNumber=${winningNumber} (prev: ${prevWinningNumber})`);
      
      // 새로운 번호일 때만 초기화 및 시작
      if (winningNumber !== prevWinningNumber) {
        console.log(`✨ NEW NUMBER DETECTED - Starting fresh animation`);
        
        // 이전 번호 업데이트
        setPrevWinningNumber(winningNumber);
        
        // 즉시 애니메이션 중지 및 초기화
        setIsAnimating(false);
        setFinalRotation(0);
        
        // DOM 초기화
        if (rouletteRef.current) {
          rouletteRef.current.style.transform = 'rotate(0deg)';
          rouletteRef.current.style.animation = 'none';
          rouletteRef.current.offsetHeight; // reflow
        }
        
        // 새로운 각도 계산
        const targetAngle = calculateWinningAngle(winningNumber, numbers);
        console.log(`🎯 Target angle: ${targetAngle}° for number ${winningNumber}`);
        
        // 즉시 애니메이션 시작
        setTimeout(() => {
          console.log(`🚀 Starting animation NOW!`);
          setFinalRotation(targetAngle);
          setIsAnimating(true);
        }, 50); // 최소 지연
        
        // 애니메이션 완료 타이머는 별도 useEffect에서 처리
      } else {
        console.log(`🔄 Same number - keeping current animation`);
      }
    }
  }, [isDrawing, winningNumber, numbers, prevWinningNumber]);
  
  // 애니메이션 완료 타이머 (별도 useEffect)
  useEffect(() => {
    if (isAnimating && winningNumber) {
      console.log(`⏰ Setting completion timer for ${winningNumber}`);
      const completeTimer = setTimeout(() => {
        console.log(`🏁 Animation completed for ${winningNumber}`);
        setIsAnimating(false);
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }, 5000);
      
      return () => {
        console.log(`🗑️ Clearing completion timer for ${winningNumber}`);
        clearTimeout(completeTimer);
      };
    }
  }, [isAnimating, winningNumber, onAnimationComplete]);
  
  // 동적 스타일 생성
  const getRouletteStyle = () => {
    if (isAnimating) {
      return {
        animation: `roulette-spin-${winningNumber} 4s cubic-bezier(0.25, 0.46, 0.45, 0.99) forwards`,
        transform: `rotate(${finalRotation}deg)`
      };
    }
    return {};
  };
  
  // 동적 키프레임 생성 (CSS-in-JS 방식)
  useEffect(() => {
    if (isAnimating && winningNumber) {
      console.log(`🎨 Creating keyframes for number ${winningNumber}, finalRotation: ${finalRotation}°`);
      
      try {
        const styleSheet = document.styleSheets[0];
        const keyframeName = `roulette-spin-${winningNumber}`;
        
        // 기존 모든 룰렛 키프레임 제거 (다른 숫자 키프레임도 포함)
        for (let i = styleSheet.cssRules.length - 1; i >= 0; i--) {
          const rule = styleSheet.cssRules[i];
          if (rule instanceof CSSKeyframesRule && rule.name.startsWith('roulette-spin-')) {
            styleSheet.deleteRule(i);
            console.log(`🗑️ Removed existing keyframe: ${rule.name}`);
          }
        }
        
        // 단순한 키프레임 + 타이밍 함수로 자연스러운 감속
        const keyframes = `
          @keyframes ${keyframeName} {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(${finalRotation}deg); }
          }
        `;
        
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        console.log(`✅ Added keyframe: ${keyframeName}`);
        console.log(`🎬 Keyframe content:`, keyframes);
      } catch (error) {
        console.error('❌ Error creating keyframes:', error);
      }
    }
  }, [isAnimating, winningNumber, finalRotation]);
  
  return (
    <div className="relative mx-auto w-[80vw] h-[80vw]">
      <div
        ref={rouletteRef}
        className={`relative w-full h-full ${!isAnimating ? 'roulette-idles' : ''}`}
        style={getRouletteStyle()}
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