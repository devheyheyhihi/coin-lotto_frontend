'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

interface HeaderProps {
  balance: number; // 잔액 표시는 유지될 수 있으므로 일단 남겨둡니다.
  onOpenMyPage: () => void;
}

const Header: React.FC<HeaderProps> = ({ balance, onOpenMyPage }) => {
  const { isLoggedIn, user, logout } = useAuth();
  const pathname = usePathname();

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setSignupModalOpen(false);
    setLoginModalOpen(true);
  };
  
  const openSignupModal = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(true);
  };

  const closeModals = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(false);
  };

  const baseButtonStyle = "rounded-[21px] flex-shrink-0 font-bold flex items-center justify-center text-sm w-auto px-4 h-[32px] md:text-base md:h-[34px]";
  const loggedInButtonStyle = `${baseButtonStyle} border border-white bg-gradient-to-r from-[#1AEBA9] to-[#384FC0] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]`;
  const loggedOutButtonStyle = `${baseButtonStyle} bg-black w-[110px] md:w-[139px]`;

  return (
    <>
    <header className="flex items-center justify-between px-4 py-6 md:px-[8.33vw] md:py-[5.5vh]">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/header_logo.svg"
          alt="TetherLuck Logo"
          width={135}
          height={40}
          className="h-auto w-[120px] md:w-[10vw]"
        />
      </Link>
      <nav className="flex items-center space-x-2 md:space-x-4">
          {isLoggedIn && user ? (
            <div className="flex items-center space-x-2">
                <div className={`${baseButtonStyle} bg-black/50 border border-gray-600`}>
                    <span>{balance.toFixed(2)} USDT</span>
                </div>
                  <button onClick={onOpenMyPage} className={`${loggedInButtonStyle} min-w-[120px]`}>
                      {user.nickname}
                  </button>
            </div>
        ) : (
          <button
              onClick={openLoginModal}
              className={loggedOutButtonStyle}
          >
                로그인
          </button>
        )}
      </nav>
    </header>

      {isLoginModalOpen && <LoginModal onClose={closeModals} onSwitchToSignup={openSignupModal} />}
      {isSignupModalOpen && <SignupModal onClose={closeModals} onSwitchToLogin={openLoginModal} />}
    </>
  );
};

export default Header; 