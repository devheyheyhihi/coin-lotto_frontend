'use client';

import { useState, useEffect, useMemo } from 'react';
import { API_BASE_URL } from '@/config';
import WinnersModal from './WinnersModal';

interface Room {
    id: string;
    name: string;
    ticketPrice: string;
}

interface WinnerData {
    [roundId: string]: {
        [roomId: string]: {
            winner: string;
            prizePool: string;
        }
    }
}

const WinnerInfoBar = () => {
    const [rounds, setRounds] = useState<number[]>([]);
    const [rooms, setRooms] = useState<Room[]>([]);
    const [winnerData, setWinnerData] = useState<WinnerData>({});
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
    const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // API 호출 시작 시 로딩 상태로 설정
            try {
                const response = await fetch(`${API_BASE_URL}/winner-bar-data`);
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                
                // Sort rooms by ticket price ascending
                const sortedRooms = data.rooms.sort((a: Room, b: Room) => parseFloat(a.ticketPrice) - parseFloat(b.ticketPrice));

                setRounds(data.rounds); // Already sorted DESC from backend
                setRooms(sortedRooms);
                setWinnerData(data.winnerData);
            } catch (error) {
                console.error("Error fetching winner bar data:", error);
            } finally {
                setIsLoading(false); // API 호출 완료 시 로딩 상태 해제
            }
        };
        fetchData();
    }, []);

    // --- Mobile button ---
    if (!isLoading) {
        // Render a button on mobile to open modal
    }

    const handleRoundChange = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setCurrentRoundIndex(prev => Math.min(prev + 1, rounds.length - 1));
        } else {
            setCurrentRoundIndex(prev => Math.max(prev - 1, 0));
        }
    };

    const handleRoomChange = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setCurrentRoomIndex(prev => (prev - 1 + rooms.length) % rooms.length);
        } else {
            setCurrentRoomIndex(prev => (prev + 1) % rooms.length);
        }
    };

    const currentRound = rounds[currentRoundIndex];
    const prevRound = rounds[currentRoundIndex + 1];
    const nextRound = rounds[currentRoundIndex - 1];
    
    const currentRoom = rooms[currentRoomIndex];

    const currentWinnerInfo = currentRound && currentRoom ? winnerData[currentRound]?.[currentRoom.id] : null;

    // 모바일 모달용 데이터 변환
    const winnerList = useMemo(() => {
        if (!rounds.length || !rooms.length || !Object.keys(winnerData).length) return [];
        
        const list: Array<{
            round: number;
            roomId: string;
            roomName: string;
            ticketPrice: string;
            winner: string;
            nickname?: string;
            prizePool: string;
            timestamp?: string;
        }> = [];
        
        rounds.forEach(round => {
            rooms.forEach(room => {
                const winner = winnerData[round]?.[room.id];
                if (winner) {
                    list.push({
                        round,
                        roomId: room.id,
                        roomName: room.name,
                        ticketPrice: room.ticketPrice,
                        winner: winner.winner,
                        nickname: winner.nickname,
                        prizePool: winner.prizePool,
                        timestamp: winner.timestamp
                    });
                }
            });
        });
        return list;
    }, [rounds, rooms, winnerData]);

    // --- Render ---
    if (isLoading) {
        return (
            <>
                <div className="mx-auto flex w-full h-14 items-center justify-center bg-gray-800 text-gray-500">Loading Winner Data...</div>
            </>
        );
    }

    // if (rounds.length === 0) {
    //     return <div className="mx-auto flex w-full h-14 items-center justify-center bg-gray-800 text-gray-500">이전 우승자 기록이 없습니다.</div>;
    // }
    
    return (
        <>
        {/* Mobile: button */}
        <div className="md:hidden px-[8.33vw] py-[4.16vw]">
            <button 
                onClick={() => {
                    console.log('Opening modal with data:', { rounds, rooms, winnerList });
                    setIsModalOpen(true);
                }} 
                className="w-full rounded-2xl bg-white border-2 border-[#938C8C] py-[1.2vw]"
            >
                <span className="text-[#2D3131] font-['Pretendard'] text-[3.89vw] font-bold leading-normal">당첨자 정보</span>
            </button>
        </div>

        {/* Desktop: existing bar */}
        <div className="hidden md:flex mx-auto w-full flex-col items-center gap-2 border-t-2 border-[#33B8D7] bg-gradient-to-t from-black/[.72] to-[#1830C9] px-4 py-2 font-['Pretendard'] font-extrabold leading-normal shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25),0_-5px_4px_0_rgba(0,0,0,0.25)] md:h-14 md:flex-row md:justify-between md:px-[5vw] md:py-0">
            {/* 회차 선택 */}
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
                <button onClick={() => handleRoundChange('next')} className="text-xl text-[#8CFBFF]">◀</button>
                {nextRound && <span className="hidden text-sm text-[#AAAAA5] sm:inline">회차 {nextRound}회</span>}
                <span className="text-xl text-[#8CFBFF]">회차 {currentRound}회</span>
                {prevRound && <span className="hidden text-sm text-[#AAAAA5] sm:inline">회차 {prevRound}회</span>}
                <button onClick={() => handleRoundChange('prev')} className="text-xl text-[#8CFBFF]">▶</button>
            </div>

            {/* 당첨자 정보 */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 md:justify-end md:gap-x-6 lg:gap-x-10">
                <div className="flex items-center space-x-4">
                    <button onClick={() => handleRoomChange('prev')} className="text-xl text-[#8CFBFF]">◀</button>
                    <span className="text-base">{currentRoom?.name || 'No Room'}</span>
                    <button onClick={() => handleRoomChange('next')} className="text-xl text-[#8CFBFF]">▶</button>
                </div>
                {currentWinnerInfo ? (
                    <>
                        <span className="text-xl text-yellow-400">🏆 Winner</span>
                        <span className="text-base">
                            {currentWinnerInfo.nickname || `${currentWinnerInfo.winner.substring(0, 6)}...${currentWinnerInfo.winner.slice(-4)}`}
                        </span>
                        <span className="text-base">{parseFloat(currentWinnerInfo.prizePool).toFixed(2)} USDT</span>
                    </>
                ) : (
                    <span className="text-base text-gray-500">No winner for this round/room</span>
                )}
            </div>
        </div>

        {isModalOpen && (
            <WinnersModal 
                onClose={() => setIsModalOpen(false)}
                winnerList={winnerList}
                rounds={rounds}
                rooms={rooms}
            />
        )}
        </>
    );
}

export default WinnerInfoBar; 