'use client';

import Image from 'next/image';
import SpinningNumbers from './SpinningNumbers';

const RouletteSection = () => {
  return (
    <div className="relative mt-8 md:mt-16 mx-auto w-[340px] h-[340px] animate-spin-slow">
      <Image
        src="/roulette.svg"
        alt="roulette"
        width={500}
        height={500}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <SpinningNumbers />
      </div>
    </div>
  );
};

export default RouletteSection; 