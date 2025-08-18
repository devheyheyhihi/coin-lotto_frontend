'use client';

import { useEffect, useState } from 'react';

interface GlobalRoundBarProps {
  globalRoundId: number | null;
}

const GlobalRoundBar: React.FC<GlobalRoundBarProps> = ({ globalRoundId }) => {
  const [today, setToday] = useState('');

  useEffect(() => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    setToday(`${y}.${m}.${day}`);
  }, []);

  return (
    <>
      {/* Mobile layout: date on left, round on right */}
      <div className="md:hidden h-10 w-full px-[8.33vw] flex items-center justify-between bg-[#3755C2]">
        <span className="text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] font-['Pretendard'] text-[3.89vw] font-semibold leading-normal">{today}</span>
        <span className="text-[#E8FF6B] font-bold text-sm flex items-center gap-1">🍀 {globalRoundId ? `${globalRoundId}회` : '...'}</span>
      </div>

      {/* Desktop layout: centered round title */}
      <div className="hidden md:flex mx-auto h-14 w-full items-center justify-center bg-gradient-to-r from-[#3869A9] to-[#035ED5] shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25),0_1px_8.5px_0_rgba(0,0,0,0.73)]">
        <h2 className="text-2xl font-bold">{globalRoundId ? `${globalRoundId}회` : '...'}</h2>
      </div>
    </>
  );
};

export default GlobalRoundBar; 