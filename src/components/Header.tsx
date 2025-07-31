'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  account: string | null;
  balance: number;
  connectWallet: () => void;
}

const Header = ({ account, balance, connectWallet }: HeaderProps) => {
  const pathname = usePathname();
  const baseButtonStyle = "rounded-[21px] flex-shrink-0 font-bold flex items-center justify-center text-sm w-auto px-4 h-[32px] md:text-base md:h-[34px]";
  
  const buttonStyle = account
    ? `${baseButtonStyle} border border-white bg-gradient-to-r from-[#1AEBA9] to-[#384FC0] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]`
    : `${baseButtonStyle} bg-black w-[110px] md:w-[139px]`;


  return (
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
        <Link href="/how-to-play" className="text-sm text-white hover:text-gray-300 md:text-base md:hover:text-white">
          참여 방법
        </Link>

        {account ? (
            <div className="flex items-center space-x-2">
                <div className={`${baseButtonStyle} bg-black/50 border border-gray-600`}>
                    <span>{balance.toFixed(2)} USDT</span>
                </div>
                <button
                    onClick={() => { if (pathname === '/') connectWallet(); }}
                    className={`${buttonStyle} min-w-[120px]`}
                >
                    {pathname.startsWith('/room/') ? `${account.substring(0, 6)}...${account.slice(-4)}` : '게임 시작'}
                </button>
            </div>
        ) : (
            <button
              onClick={connectWallet}
              className={buttonStyle}
            >
              지갑 연결
            </button>
        )}
      </nav>
    </header>
  );
};

export default Header; 