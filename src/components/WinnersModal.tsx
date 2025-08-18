'use client';

interface WinnersModalProps {
	onClose: () => void;
}

const WinnersModal: React.FC<WinnersModalProps> = ({ onClose }) => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
			<div className="w-full max-w-sm rounded-2xl bg-white p-4">
				{/* Header */}
				<div className="flex items-center justify-between mb-2">
					<div className="text-gray-600 text-sm">◀ <span className="font-semibold">21회</span> ▶</div>
					<button onClick={onClose} className="text-gray-500 text-xl">✕</button>
				</div>
				<div className="flex items-center gap-2 mb-3">
					<span className="text-green-600">🪙</span>
					<span className="font-semibold text-gray-800">당첨자 정보</span>
				</div>

				{/* Tabs */}
				<div className="mb-3 flex items-center gap-4 text-sm">
					<button className="font-bold text-black">USDT 1</button>
					<button className="text-gray-400">USDT 10</button>
					<button className="text-gray-400">USDT 50</button>
					<button className="text-gray-400">USDT 100</button>
				</div>

				{/* List */}
				<div className="space-y-3">
					{Array.from({ length: 4 }).map((_, idx) => (
						<div key={idx} className="flex items-center justify-between text-sm">
							<div className="flex items-center gap-2">
								<span>👑 Winner</span>
								<span className="text-gray-600 underline">aswltjs</span>
							</div>
							<div className="flex items-center gap-4">
								<span className="font-semibold">1,000만원</span>
								<span className="text-gray-500">12:00:00</span>
							</div>
						</div>
					))}
				</div>

				{/* Pagination */}
				<div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-600">
					{[1,2,3,4,5].map(n => <button key={n}>{n}</button>)}
				</div>
			</div>
		</div>
	);
};

export default WinnersModal; 