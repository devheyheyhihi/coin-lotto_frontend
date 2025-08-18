'use client';

import Image from 'next/image';
import SpinningNumbers from './SpinningNumbers';

const RouletteSection = () => {
  return (
    <div className="relative mx-auto w-[80vw] h-[80vw] animate-spin-slow">
      <Image
        src="/roulette.svg"
        alt="roulette"
        width={500}
        height={500}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <SpinningNumbers width={80} height={80}/>
      </div>
    </div>
  );
};

export default RouletteSection; 