'use client';

import Image from 'next/image';

interface SideMenuProps {
  onOpenMyPage: () => void;
  onOpenExplain: () => void;
}

const SideMenu = ({ onOpenMyPage, onOpenExplain }: SideMenuProps) => (
  <div className="fixed right-4 top-1/2 -translate-y-1/2 w-[80px] h-[200px] flex-shrink-0 rounded-[20px] bg-gradient-to-b from-[#FFF17E] to-[#1BE6FD] p-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:right-[1.67vw] md:w-[6vw] md:h-[28vh]">
    <aside className="w-full h-full rounded-[19px] bg-gradient-to-b from-[#311A1A] to-[#13399A] flex flex-col items-center justify-center space-y-4 md:space-y-[4vh]">
      <button onClick={onOpenExplain} className="flex flex-col items-center">
        <Image src="/icon_explain.svg" alt="Game Explain" width={48} height={48} className="w-8 h-8 md:w-10 md:h-10" />
        <span className="text-xs mt-1">게임설명</span>
      </button>
      <button
        onClick={onOpenMyPage}
        className="flex flex-col items-center"
      >
        <Image src="/icon_mypage.svg" alt="My Page" width={48} height={48} className="w-8 h-8 md:w-10 md:h-10" />
        <span className="text-xs mt-1">마이페이지</span>
      </button>
    </aside>
  </div>
);

export default SideMenu; 