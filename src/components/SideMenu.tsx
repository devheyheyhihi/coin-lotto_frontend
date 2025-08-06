'use client';

import Image from 'next/image';
import Timer from './Timer'; // Timer 컴포넌트 임포트
import { useAuth } from '@/contexts/AuthContext'; // useAuth 훅 임포트

interface SideMenuProps {
  onOpenMyPage: () => void;
  onOpenExplain: () => void;
  deadline: string | null;
}

const SideMenu: React.FC<SideMenuProps> = ({ onOpenMyPage, onOpenExplain, deadline }) => {
    const { isLoggedIn } = useAuth();

    return (
  <div className="fixed bottom-0 left-0 right-0 h-[70px] bg-gradient-to-t from-gray-900 to-gray-800/80 border-t border-gray-700 backdrop-blur-sm p-1 z-40 md:w-[80px] md:h-[200px] md:flex-shrink-0 md:rounded-[20px] md:bg-gradient-to-b md:from-[#FFF17E] md:to-[#1BE6FD] md:p-[1px] md:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:right-4 md:top-1/2 md:-translate-y-1/2 md:left-auto">
    <aside className="w-full h-full flex flex-row items-center justify-around md:px-0 md:rounded-[19px] md:bg-gradient-to-b md:from-[#311A1A] md:to-[#13399A] md:flex-col md:justify-center md:space-y-4">
      
      {/* 모바일에서만 보이는 컨테이너 (1:1:2 비율 적용) */}
      <div className="flex w-full items-center justify-around md:hidden">
        <div className="basis-1/4 flex justify-center">
            <button onClick={onOpenExplain} className="flex flex-col items-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Image src="/icon_explain.svg" alt="Game Explain" width={48} height={48} className="w-7 h-7" />
                <span className="text-xs mt-1 text-gray-300">게임설명</span>
            </button>
        </div>
        <div className="basis-1/4 flex justify-center">
            <button onClick={onOpenMyPage} className="flex flex-col items-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Image src="/icon_mypage.svg" alt={isLoggedIn ? "My Page" : "Login"} width={48} height={48} className="w-7 h-7" />
                <span className="text-xs mt-1 text-gray-300">{isLoggedIn ? '마이페이지' : '로그인'}</span>
            </button>
        </div>
        <div className="basis-1/2 flex justify-center">
             <Timer 
                deadline={deadline}
                showDate={true}
                dateClassName="text-xs text-white mb-1"
                containerClassName="flex items-center font-['LABDigital'] text-3xl text-[#2BF7FF]"
                digitClassName="w-8"
                colonClassName="text-lg"
            />
        </div>
      </div>

      {/* 데스크탑에서만 보이는 버튼들 */}
      <div className="hidden md:flex md:flex-col md:items-center md:space-y-4">
        <button onClick={onOpenExplain} className="flex flex-col items-center p-2 rounded-lg hover:bg-white/10 transition-colors">
            <Image src="/icon_explain.svg" alt="Game Explain" width={48} height={48} className="w-10 h-10" />
            <span className="text-xs mt-1 text-gray-300">게임설명</span>
        </button>
        <button
            onClick={onOpenMyPage}
            className="flex flex-col items-center p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
            <Image src="/icon_mypage.svg" alt="My Page" width={48} height={48} className="w-10 h-10" />
            <span className="text-xs mt-1 text-gray-300">마이페이지</span>
        </button>
      </div>
    </aside>
  </div>
    )
};

export default SideMenu; 