'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
// Removed Timer import since mobile timer is no longer shown
import { useAuth } from '@/contexts/AuthContext'; // useAuth 훅 임포트
import { API_BASE_URL } from '../config';

interface SideMenuProps {
  onOpenMyPage: () => void;
  onOpenExplain: () => void;
  deadline: string | null;
}

const SideMenu: React.FC<SideMenuProps> = ({ onOpenMyPage, onOpenExplain }) => {
    const { isLoggedIn, user } = useAuth();
    
    // Balance 상태 관리
    const [balance, setBalance] = useState<number>(0);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    // Balance 가져오기 함수
    const fetchBalance = async () => {
        if (!user?.walletAddress) return;
        try {
            const response = await fetch(`${API_BASE_URL}/balance/${user.walletAddress}`);
            if (response.ok) {
                const data = await response.json();
                // 값이 변경된 경우에만 상태 업데이트 (깜빡임 방지)
                if (data.balance !== balance) {
                    setBalance(data.balance);
                }
                if (isInitialLoad) {
                    setIsInitialLoad(false);
                }
            }
        } catch (error) {
            console.error('Failed to fetch balance:', error);
        }
    };

    // 사용자 로그인 시 balance 가져오기 + 실시간 이벤트 구독
    useEffect(() => {
        if (user?.walletAddress) {
            fetchBalance();
            // 10초마다 balance 업데이트(보정) - 베팅 시 즉시 반영되므로 주기 연장
            const interval = setInterval(fetchBalance, 10000);

            const handleBalanceUpdate = (e: Event) => {
                const custom = e as CustomEvent<number>;
                if (typeof custom.detail === 'number') {
                    setBalance(custom.detail);
                }
            };
            if (typeof window !== 'undefined') {
                window.addEventListener('balance:update', handleBalanceUpdate as EventListener);
            }

            return () => {
                clearInterval(interval);
                if (typeof window !== 'undefined') {
                    window.removeEventListener('balance:update', handleBalanceUpdate as EventListener);
                }
            };
        } else {
            // 로그아웃 시 balance 초기화
            setBalance(0);
            setIsInitialLoad(true);
        }
    }, [user?.walletAddress]);

    return (
  <div className="fixed bottom-0 left-0 right-0 h-[70px] bg-[#F4F0F0] text-black md:bg-gradient-to-t from-gray-900 to-gray-800/80 md:border-t border-gray-700 backdrop-blur-sm p-1 z-40 md:w-[80px] md:h-[200px] md:flex-shrink-0 md:rounded-[20px] md:bg-gradient-to-b md:from-[#FFF17E] md:to-[#1BE6FD] md:p-[1px] md:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:right-4 md:top-1/2 md:-translate-y-1/2 md:left-auto">
    <aside className="w-full h-full flex flex-row items-center justify-around md:px-0 md:rounded-[19px] md:bg-gradient-to-b md:from-[#311A1A] md:to-[#13399A] md:flex-col md:justify-center md:space-y-4">
      
      {/* 모바일에서만 보이는 컨테이너 - 3개 섹션 */}
      <div className="flex w-full items-center justify-around md:hidden">
        {/* 보유 금액 섹션 */}
        <div className="text-white flex-2 flex justify-center">
          <div className="flex flex-col items-center py-2 px-6 bg-[#395DD3] rounded-xl">
            <span className="text-xs mb-1">보유 금액</span>
                         <div className="flex items-center gap-1">
               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="white"/>
                 <path d="M11.9746 7.14596C11.9746 6.37747 9.66995 6.08519 7.91565 6.01191V4.81082H10.7523V2.98926H3.25742V4.81082H6.09408V6.01191C4.33977 6.08519 2.03516 6.37747 2.03516 7.14596C2.03516 7.91444 4.33977 8.20672 6.09408 8.28V12.1785H7.91565V8.28C9.66995 8.20672 11.9746 7.91444 11.9746 7.14596ZM10.367 7.67945C9.47067 7.86358 8.27685 7.96488 7.00497 7.96488C5.73309 7.96488 4.53926 7.86358 3.64291 7.67945C2.59875 7.46502 2.3702 7.22172 2.3702 7.14596C2.3702 7.07019 2.59896 6.8271 3.64291 6.61246C4.3213 6.47317 5.17012 6.38121 6.09408 6.34488V7.55635H7.91565V6.34488C8.83961 6.38142 9.68864 6.47317 10.3668 6.61246C11.411 6.8269 11.6395 7.07019 11.6395 7.14596C11.6395 7.22172 11.4108 7.46502 10.3668 7.67945H10.367Z" fill="#298D75"/>
               </svg>
                             <span className="text-sm font-medium ml-2">
                 {isInitialLoad ? '...' : balance.toLocaleString()}
               </span>
            </div>
          </div>
        </div>

        {/* 게임설명 섹션 */}
        <div className="flex-1 flex justify-center">
          <button onClick={onOpenExplain} className="flex flex-col items-center p-2">
            <Image src="/icon_explain.svg" alt="Game Explain" width={48} height={48} className="w-7 h-7 mb-1" />
            <span className="text-xs">게임설명</span>
          </button>
        </div>

        {/* 로그인/마이페이지 섹션 */}
        <div className="flex-1 flex justify-center">
          <button onClick={onOpenMyPage} className="flex flex-col items-center p-2">
            <Image src="/icon_mypage.svg" alt={isLoggedIn ? "My Page" : "Login"} width={48} height={48} className="w-7 h-7 mb-1" />
            <span className="text-xs">{isLoggedIn ? '마이페이지' : '로그인'}</span>
          </button>
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