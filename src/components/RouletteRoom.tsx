'use client';

import { useState } from 'react';
import Image from 'next/image';
import FloatingBar from './FloatingBar';
import RouletteHistoryModal from './RouletteHistoryModal';
import Timer from './Timer';

interface RouletteRoomProps {
  onEnterRouletteRoom?: () => void;
  deadline?: string | null; // FloatingBar에 전달할 deadline
}

const RouletteRoom: React.FC<RouletteRoomProps> = ({ onEnterRouletteRoom, deadline }) => {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  const handlePlusClick = () => {
    console.log('Plus button clicked!');
  };

  const handleEnterRoulette = () => {
    if (onEnterRouletteRoom) {
      onEnterRouletteRoom();
    }
  };

  const handleWinningNumberClick = () => {
    setIsHistoryModalOpen(true);
  };

  return (
    <div className="relative bg-gradient-to-b from-[#820505] to-[#1C0101] px-[8.33vw] pt-[12vw] pb-[25vw]">
      {/* Roulette logo/title at top */}
      <div className="text-center mb-4 absolute top-[-5vw] left-[50%] translate-x-[-50%]">
        <Image 
          src="/logo_roulette.png" 
          alt="Roulette" 
          width={133} 
          height={50} 
          className="w-[33vw]"
        />
      </div>
      
             {/* Winning number display */}
       <div className="bg-gradient-to-b from-[#33B8D7] via-[#DEEE96] to-transparent rounded-4xl p-[2px] mb-6">
          <div className="bg-gradient-to-b from-[#1830C9] via-90% via-[#1C1350] to-[#1D0D33] rounded-4xl py-[2vw]">
           <button 
             onClick={handleWinningNumberClick}
             className="w-full text-center text-white hover:text-gray-200 transition-colors"
           >
             <p className="text-[3.89vw] font-bold">당첨 번호</p>
           </button>
         </div>
       </div>
      
      {/* Theater curtain style background with timer */}
      <div className="relative rounded-2xl overflow-hidden">
        {/* Background image */}
        <Image 
          src="/bg_roulette.png" 
          alt="Roulette Background" 
          width={800} 
          height={600} 
          className="w-full h-auto object-cover"
        />
        
        {/* Center content overlay */}
        <div className="absolute inset-0 flex left-1/2 -translate-x-1/2 top-[55.5%]">
          <button 
            onClick={handleEnterRoulette}
            className="bg-gradient-to-b from-blue-800 to-blue-900 rounded-2xl border-2 border-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 w-[39.17vw] h-[17.22vw] flex flex-col items-center justify-center"
          >
            <p className="pt-[1vw] text-white [text-shadow:0_5px_4.8px_rgba(0,0,0,0.25)] font-['Freesentation'] text-[3.89vw] font-bold leading-normal">참여하기</p>
            <Timer 
              deadline={deadline}
              digitClassName="font-['LABDigital'] text-cyan-400 text-[5.56vw] font-normal leading-normal"
              colonClassName="font-['LABDigital'] text-cyan-400 text-[5.56vw] font-normal leading-normal"
              containerClassName="flex items-center justify-center gap-1"
              showDate={false}
            />
          </button>
        </div>
      </div>

      {/* Floating Bar */}
      <FloatingBar 
        onPlusClick={handlePlusClick}
        deadline={deadline}
      />

      {/* Roulette History Modal */}
      <RouletteHistoryModal 
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
      />
      
    </div>
  );
};

export default RouletteRoom;
