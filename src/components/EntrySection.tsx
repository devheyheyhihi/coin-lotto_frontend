'use client';

import Image from 'next/image';
import { forwardRef } from 'react';
import Timer from './Timer';

interface EntrySectionProps {
  participationOptions: { id: string; amount: number; participants: string }[];
  handleEnterRoom: (roomId: string) => void;
  deadline: string | null;
  globalRoundId: number | null;
}

const EntrySection = forwardRef<HTMLDivElement, EntrySectionProps>(
  ({ participationOptions, handleEnterRoom, deadline, globalRoundId }, ref) => {
    return (
      <div ref={ref} className="relative text-center">
        <div>
          <div className="mx-auto flex h-14 w-full items-center justify-center bg-gradient-to-r from-[#3869A9] to-[#035ED5] shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25),0_1px_8.5px_0_rgba(0,0,0,0.73)]">
            <h2 className="text-2xl font-bold">{globalRoundId ? `${globalRoundId}회` : '...'}</h2>
          </div>
          <div className="bg-[linear-gradient(#42529E,#3C509E,#3C509E80,#08369A00)] py-10">
            <span className="font-['Pretendard'] text-xl font-semibold leading-normal text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">2025.07.23</span>
            <Timer 
              deadline={deadline}
              containerClassName="flex justify-center items-center font-['LABDigital'] text-[64px] font-normal leading-normal text-[#2BF7FF]"
              digitClassName="w-20"
            />
          </div>
          
          <div className="px-6 pb-8 md:px-12 lg:px-24">
            {/* Participation Options */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {participationOptions.map((option, index) => {
                const fromColors = [
                  "from-[#25228A]",     // Blue
                  "from-[#554671]",     // Yellow
                  "from-[#26475F]",     // Green
                  "from-[#491C51]",     // Red
                ];

                const videos = [
                  "/icon_room_1.webm",
                  "/icon_room_2.webm", 
                  "/icon_room_3.webm",
                  "/icon_room_4.webm"
                ];

                return (
                  <div
                    key={option.id}
                    className={`rounded-[25px] bg-gradient-to-b from-white to-[#724444] p-[2px] shadow-[0_4px_6.7px_3px_rgba(0,0,0,0.25)]`}
                  >
                    <div
                      className={`h-full w-full rounded-[23px] bg-gradient-to-b to-[#1E164F] p-6 shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)] ${fromColors[index]}`}
                    >
                      <div className="text-left">
                        <p className="font-['Pretendard'] text-2xl font-bold leading-normal text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">USDT</p>
                        <p className="mb-4 font-['Pretendard'] text-2xl font-bold leading-normal text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">{option.amount}</p>
                        <div className="mx-auto mb-4 flex h-full w-full items-center justify-center rounded-full">
                          <video 
                            src={videos[index]} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="h-auto w-2/3 md:w-full rounded-full object-cover"
                          />
                        </div>
                        <button
                          onClick={() => handleEnterRoom(option.id)}
                          className="mb-2 w-full rounded-lg bg-gradient-to-r from-[#323232] to-black py-2 px-6 font-['Pretendard'] text-base font-semibold leading-normal text-[#FC0] shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25),0_4px_4px_0_rgba(0,0,0,0.25)]"
                        >
                          참여하기
                        </button>
                        <p className="text-center font-['Pretendard'] text-2xl font-normal leading-normal text-[#FFE206]">{option.participants} 명</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

EntrySection.displayName = "EntrySection";

export default EntrySection;