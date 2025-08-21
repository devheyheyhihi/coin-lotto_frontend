'use client';

import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';

interface RouletteHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RouletteHistoryItem {
  id: number;
  round_number: number;
  winning_number: number;
  winning_type: 'LOW' | 'HIGH';
  total_low_amount: number;
  total_high_amount: number;
  created_at: string;
  end_time: string;
}

export default function RouletteHistoryModal({ isOpen, onClose }: RouletteHistoryModalProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [historyData, setHistoryData] = useState<RouletteHistoryItem[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const itemsPerPage = 6;

  // 모바일 친화적 압축 페이지네이션 계산
  const getPaginationItems = (
    total: number,
    current: number,
    siblingCount: number = 1
  ): Array<number | 'dots'> => {
    // 총 페이지가 적으면 전부 노출
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i);
    }

    const firstPage = 0;
    const lastPage = total - 1;
    const leftSibling = Math.max(current - siblingCount, firstPage + 1);
    const rightSibling = Math.min(current + siblingCount, lastPage - 1);

    const items: Array<number | 'dots'> = [firstPage];

    if (leftSibling > firstPage + 1) {
      items.push('dots');
    }

    for (let p = leftSibling; p <= rightSibling; p++) {
      items.push(p);
    }

    if (rightSibling < lastPage - 1) {
      items.push('dots');
    }

    items.push(lastPage);
    return items;
  };

  // 실제 데이터 가져오기
  const fetchHistoryData = async (page: number) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/roulette/history?page=${page}&limit=${itemsPerPage}`);
      
      if (response.ok) {
        const data = await response.json();
        setHistoryData(data.history);
        setTotalPages(data.totalPages);
      } else {
        setError('히스토리 데이터를 가져올 수 없습니다.');
      }
    } catch (error) {
      setError('네트워크 오류가 발생했습니다.');
      console.error('Failed to fetch roulette history:', error);
    } finally {
      setLoading(false);
    }
  };

  // 모달이 열릴 때마다 데이터 가져오기
  useEffect(() => {
    if (isOpen) {
      fetchHistoryData(currentPage);
    }
  }, [isOpen, currentPage]);

  // 시간 포맷팅 함수
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('ko-KR', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

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
            {loading ? (
              <div className="flex items-center justify-center h-[200px]">
                <div className="text-white text-[4vw]">로딩 중...</div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-[200px]">
                <div className="text-red-400 text-[3.5vw] text-center">{error}</div>
              </div>
            ) : historyData.length === 0 ? (
              <div className="flex items-center justify-center h-[200px]">
                <div className="text-gray-400 text-[3.5vw]">히스토리가 없습니다</div>
              </div>
            ) : (
              historyData.map((item, index) => (
                <div 
                  key={item.id}
                  className="bg-[#2C2C2C] rounded-xl px-4 py-3 flex items-center justify-between border border-white"
                >
                  {/* Number Circle */}
                  <div className={`w-[8vw] h-[8vw] rounded-full flex items-center justify-center text-white font-bold text-[3.5vw] ${
                    item.winning_type === 'HIGH' 
                      ? 'bg-[#4169E1] border-2 border-[#87CEEB]' 
                      : 'bg-[#DC143C] border-2 border-[#FFB6C1]'
                  }`}>
                    {item.winning_number}
                  </div>

                  {/* Result Text */}
                  <div className="flex-1 text-center">
                    <span className="text-white font-bold text-[4vw]">{item.winning_type}</span>
                  </div>

                  {/* Time */}
                  <div className="text-white font-mono text-[3.5vw]">
                    {formatTime(item.end_time || item.created_at)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Pagination */}
        {!loading && !error && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="text-white text-[5vw] disabled:text-gray-500"
            >
              ◀
            </button>

            <div className="flex items-center gap-2">
              {getPaginationItems(totalPages, currentPage, 1).map((item, idx) =>
                item === 'dots' ? (
                  <span key={`dots-${idx}`} className="text-white text-[3.2vw] px-1">…</span>
                ) : (
                  <button
                    key={item}
                    onClick={() => setCurrentPage(item)}
                    className={`w-[6vw] h-[6vw] rounded-full text-[3vw] font-bold ${
                      currentPage === item
                        ? 'bg-[#90EE90] text-black'
                        : 'bg-transparent border border-white text-white'
                    }`}
                  >
                    {Number(item) + 1}
                  </button>
                )
              )}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="text-white text-[5vw] disabled:text-gray-500"
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
