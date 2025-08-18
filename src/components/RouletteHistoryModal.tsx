'use client';

import { useState } from 'react';

interface RouletteHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 목업 데이터
const mockHistoryData = [
  { number: 10, result: 'HIGH', time: '00:05:00' },
  { number: 1, result: 'LOW', time: '00:10:00' },
  { number: 1, result: 'LOW', time: '00:15:00' },
  { number: 3, result: 'LOW', time: '00:20:00' },
  { number: 1, result: 'LOW', time: '00:25:00' },
  { number: 8, result: 'HIGH', time: '00:30:00' },
  { number: 7, result: 'HIGH', time: '00:35:00' },
  { number: 2, result: 'LOW', time: '00:40:00' },
  { number: 9, result: 'HIGH', time: '00:45:00' },
  { number: 4, result: 'LOW', time: '00:50:00' },
];

export default function RouletteHistoryModal({ isOpen, onClose }: RouletteHistoryModalProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(mockHistoryData.length / itemsPerPage);
  
  const currentData = mockHistoryData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-gradient-to-b from-[#810505] to-[#1B0101] w-[90vw] max-w-[400px] h-[80vh] rounded-2xl p-6 text-white flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="bg-gradient-to-b from-[#E9D763] to-[#1CC8A9] bg-clip-text text-transparent text-[5.5vw] font-extrabold mb-2" style={{WebkitTextStroke: '0.6px #434040'}}>roulette</h2>
          <h3 className="text-white text-[4vw] font-semibold">당첨번호</h3>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-[6vw] font-bold"
        >
          ×
        </button>

        {/* History List */}
        <div className="flex-1 overflow-y-auto mb-6">
          <div className="space-y-3 min-h-[400px]">
            {currentData.map((item, index) => (
              <div 
                key={index}
                className="bg-[#2C2C2C] rounded-xl px-4 py-3 flex items-center justify-between border border-white"
              >
                {/* Number Circle */}
                <div className={`w-[8vw] h-[8vw] rounded-full flex items-center justify-center text-white font-bold text-[3.5vw] ${
                  item.result === 'HIGH' 
                    ? 'bg-[#4169E1] border-2 border-[#87CEEB]' 
                    : 'bg-[#DC143C] border-2 border-[#FFB6C1]'
                }`}>
                  {item.number}
                </div>

                {/* Result Text */}
                <div className="flex-1 text-center">
                  <span className="text-white font-bold text-[4vw]">{item.result}</span>
                </div>

                {/* Time */}
                <div className="text-white font-mono text-[3.5vw]">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <button 
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="text-white text-[5vw] disabled:text-gray-500"
          >
            ◀
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-[6vw] h-[6vw] rounded-full text-[3vw] font-bold ${
                  currentPage === i 
                    ? 'bg-[#90EE90] text-black' 
                    : 'bg-transparent border border-white text-white'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          
          <button 
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className="text-white text-[5vw] disabled:text-gray-500"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
