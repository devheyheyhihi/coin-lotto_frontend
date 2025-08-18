'use client';

import Image from 'next/image';

const MobileBanner = () => {
  return (
    <div className="md:hidden w-full bg-white h-[68.61vw] flex items-center justify-center">
      <Image src="/img_banner.svg" alt="banner" width={191} height={153} className="w-[53.06vw] h-[42.5vw]" priority />
    </div>
  );
};

export default MobileBanner; 