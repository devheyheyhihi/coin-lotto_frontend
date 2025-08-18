'use client';

import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/config';

interface Room {
	id: string;
	name: string;
	ticketPrice: string;
}

interface WinnerItem {
	round: number;
	roomId: string;
	roomName: string;
	ticketPrice: string;
	winner: string;
	nickname?: string;
	prizePool: string;
	timestamp?: string;
}

interface WinnersModalProps {
	onClose: () => void;
	winnerList?: WinnerItem[];
	rounds?: number[];
	rooms?: Room[];
}

const WinnersModal: React.FC<WinnersModalProps> = ({ onClose, winnerList = [], rounds = [], rooms = [] }) => {
	console.log('WinnersModal rendered with:', { winnerList, rounds, rooms });
	
	const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
	const [selectedRoomId, setSelectedRoomId] = useState<string>('');
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;

	// 초기 설정
	useEffect(() => {
		if (rooms.length > 0 && !selectedRoomId) {
			setSelectedRoomId(rooms[0].id);
		}
	}, [rooms, selectedRoomId]);

	// 현재 라운드
	const currentRound = rounds[currentRoundIndex];
	const canGoPrev = currentRoundIndex < rounds.length - 1;
	const canGoNext = currentRoundIndex > 0;

	// 현재 선택된 라운드와 방의 데이터 필터링
	const filteredWinners = winnerList.filter(item => 
		item.round === currentRound && item.roomId === selectedRoomId
	);

	// 페이지네이션
	const totalPages = Math.ceil(filteredWinners.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentWinners = filteredWinners.slice(startIndex, startIndex + itemsPerPage);

	const handleRoundChange = (direction: 'prev' | 'next') => {
		if (direction === 'prev' && canGoPrev) {
			setCurrentRoundIndex(prev => prev + 1);
			setCurrentPage(1);
		} else if (direction === 'next' && canGoNext) {
			setCurrentRoundIndex(prev => prev - 1);
			setCurrentPage(1);
		}
	};

	const handleRoomSelect = (roomId: string) => {
		setSelectedRoomId(roomId);
		setCurrentPage(1);
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
			<div className="w-full max-w-sm rounded-2xl bg-white p-4">
				{/* Header */}
				<div className="flex items-center justify-between mb-2">
					<div className="text-gray-600 text-sm">
						<button 
							onClick={() => handleRoundChange('prev')}
							disabled={!canGoPrev}
							className={`${!canGoPrev ? 'text-gray-300' : 'text-gray-600 hover:text-gray-800'}`}
						>
							◀
						</button>
						<span className="font-semibold mx-2">{currentRound || '--'}회</span>
						<button 
							onClick={() => handleRoundChange('next')}
							disabled={!canGoNext}
							className={`${!canGoNext ? 'text-gray-300' : 'text-gray-600 hover:text-gray-800'}`}
						>
							▶
						</button>
					</div>
					<button onClick={onClose} className="text-gray-500 text-xl hover:text-gray-700">✕</button>
				</div>
				<div className="flex items-center gap-2 mb-3">
					<span className="text-green-600">🪙</span>
					<span className="font-semibold text-gray-800">당첨자 정보</span>
				</div>

				{/* Tabs */}
				<div className="mb-3 flex items-center gap-4 text-sm">
					{rooms.map((room) => (
						<button 
							key={room.id}
							onClick={() => handleRoomSelect(room.id)}
							className={`${
								selectedRoomId === room.id 
									? 'font-bold text-black' 
									: 'text-gray-400 hover:text-gray-600'
							}`}
						>
							{room.name}
						</button>
					))}
				</div>

				{/* List */}
				<div className="space-y-3">
					{currentWinners.length > 0 ? (
						currentWinners.map((winner, idx) => (
							<div key={`${winner.round}_${winner.roomId}_${idx}`} className="flex items-center justify-between text-sm">
								<div className="flex items-center gap-2">
									<span>👑 Winner</span>
									<span className="text-gray-600 underline">
										{winner.nickname || (winner.winner ? `${winner.winner.substring(0, 6)}...${winner.winner.slice(-4)}` : 'Unknown')}
									</span>
								</div>
								<div className="flex items-center gap-4">
									<span className="font-semibold">
										{parseFloat(winner.prizePool || '0').toFixed(2)} USDT
									</span>
									<span className="text-gray-500">
										{winner.timestamp ? new Date(winner.timestamp).toLocaleTimeString('ko-KR', { hour12: false }) : '--:--:--'}
									</span>
								</div>
							</div>
						))
					) : (
						<div className="text-center text-gray-500 py-4">
							해당 라운드/방에 당첨자가 없습니다.
						</div>
					)}
				</div>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-600">
						{Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
							<button 
								key={pageNum}
								onClick={() => handlePageChange(pageNum)}
								className={`${
									currentPage === pageNum 
										? 'font-bold text-black' 
										: 'text-gray-600 hover:text-black'
								}`}
							>
								{pageNum}
							</button>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default WinnersModal; 