'use client';

import { forwardRef } from 'react';
import Timer from './Timer';
import SpinningNumbers from './SpinningNumbers'; // 새로 만든 컴포넌트 임포트
import RouletteSection from './RouletteSection';
import GlobalRoundBar from './GlobalRoundBar';

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
          <div className="hidden md:block">
            <GlobalRoundBar globalRoundId={globalRoundId} />
          </div>
          <div className="bg-gradient-to-b from-white to-[#F1F0F0] shadow-[inset_0_2px_7.7px_0_rgba(0,0,0,0.25)] md:bg-[linear-gradient(#42529E,#3C509E,#3C509E80,#08369A00)] md:py-10 md:shadow-none">
              <Timer 
                deadline={deadline}
                showDate={true}
                dateClassName="font-['Pretendard'] text-xl font-semibold leading-normal text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] mb-2"
                containerClassName="flex justify-center items-center font-['LABDigital'] text-[9vw] md:text-[64px] font-normal leading-normal text-black md:text-[#2BF7FF] mb-[12vw] md:mb-0"
                digitClassName="w-[12vw] md:w-20 py-[2.16vw] md:py-0"
              />
          </div>
          
          <div className="px-6 pb-8 md:px-12 lg:px-24">
            {/* Participation Options */}
            <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
              {participationOptions.map((option, index) => {
                const fromColors = [
                  "md:from-[#25228A]",     // Blue (md+)
                  "md:from-[#554671]",     // Yellow (md+)
                  "md:from-[#26475F]",     // Green (md+)
                  "md:from-[#491C51]",     // Red (md+)
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
                    className={`md:rounded-[25px] md:bg-gradient-to-b md:from-white md:to-[#724444] md:p-[2px] md:shadow-[0_4px_6.7px_3px_rgba(0,0,0,0.25)]`}
                  >
                    <div
                      className={`h-full w-full rounded-[8px] md:rounded-[23px] bg-gradient-to-t from-[#EFEFEF] to-[#F0E9E9] md:bg-gradient-to-b md:to-[#1E164F] p-4 md:p-6 shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)] ${fromColors[index]}`}
                    >
                      {/* Mobile layout (image-like): left label, right button */}
                      <div className="flex items-center justify-between md:hidden">
                        <div className="text-left">
                          <p className="font-['Pretendard'] text-[3.89vw] font-bold leading-normal text-[#2D3131] md:text-white md:text-2xl md:[text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
                            USDT {option.amount}
                          </p>
                        </div>
                        <button
                          onClick={() => handleEnterRoom(option.id)}
                          className="rounded-xl bg-[#F5F5F5] px-6 py-3 text-[#333] font-['Pretendard'] text-base font-semibold shadow-[inset_0_4px_4px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.25)] active:translate-y-[1px]"
                        >
                          참여하기
                        </button>
                      </div>

                      {/* Desktop/Tablet layout (kept as-is) */}
                      <div className="hidden md:block text-left">
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

          {/* <RouletteSection /> */}
        </div>
      </div>
    );
  }
);

EntrySection.displayName = "EntrySection";

export default EntrySection;