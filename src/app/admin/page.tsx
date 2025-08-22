'use client';

import { useState, useEffect, useCallback } from 'react';
import { API_BASE_URL } from '@/config';

interface WithdrawalRequest {
    id: number;
    user_address: string;
    amount: number;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    requested_at: string;
    tx_hash: string | null;
}

const AdminPage = () => {
    // Withdrawal states
    const [withdrawals, setWithdrawals] = useState<WithdrawalRequest[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
    const [processingId, setProcessingId] = useState<number | null>(null);

    // Draw states
    const [isDrawProcessing, setIsDrawProcessing] = useState(false);
    const [drawError, setDrawError] = useState<string | null>(null);
    const [drawSuccessMessage, setDrawSuccessMessage] = useState<string | null>(null);

    // Next Round states
    const [nextRoundSuccessMessage, setNextRoundSuccessMessage] = useState<string | null>(null);
    const [nextRoundError, setNextRoundError] = useState<string | null>(null);
    const [isNextRoundProcessing, setIsNextRoundProcessing] = useState(false);

    // Roulette Draw states
    const [rouletteDrawProcessing, setRouletteDrawProcessing] = useState(false);
    const [rouletteDrawError, setRouletteDrawError] = useState<string | null>(null);
    const [rouletteDrawSuccess, setRouletteDrawSuccess] = useState<string | null>(null);
    const [rouletteCurrentStatus, setRouletteCurrentStatus] = useState<{
        round: {
            id: number;
            round_number: number;
            status: string;
            end_time: string;
            total_low_amount: string;
            total_high_amount: string;
            number_sequence?: string;
        } | null;
        timeRemaining?: number;
    } | null>(null);
    const [rouletteLatestResult, setRouletteLatestResult] = useState<{
        winning_number: number;
        winning_type: string;
        round_id: number;
        round_number?: number;
        total_low_amount?: string;
        total_high_amount?: string;
        number_sequence?: number[];
    } | null>(null);

    const fetchWithdrawals = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/admin/withdrawals`);
            if (!response.ok) {
                throw new Error('Failed to fetch withdrawal requests.');
            }
            const data = await response.json();
            setWithdrawals(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setIsLoading(false);
    }
  }, []);

    // 룰렛 현재 상태 가져오기
    const fetchRouletteStatus = useCallback(async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/roulette/current`);
            if (response.ok) {
                const data = await response.json();
                setRouletteCurrentStatus(data);
            }
        } catch (error) {
            console.error('Failed to fetch roulette status:', error);
        }
    }, []);

    // 룰렛 최신 결과 가져오기
    const fetchRouletteResult = useCallback(async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/roulette/result`);
            if (response.ok) {
                const data = await response.json();
                setRouletteLatestResult(data);
            }
        } catch (error) {
            console.error('Failed to fetch roulette result:', error);
        }
    }, []);

    useEffect(() => {
        fetchWithdrawals();
        fetchRouletteStatus();
        fetchRouletteResult();
        
        // 5초마다 룰렛 상태 새로고침
        const interval = setInterval(() => {
            fetchRouletteStatus();
        }, 5000);
        
        return () => clearInterval(interval);
    }, [fetchWithdrawals, fetchRouletteStatus, fetchRouletteResult]);

    const handleApprove = async (withdrawalId: number) => {
        setProcessingId(withdrawalId);
        setError(null);
      try {
            const response = await fetch(`${API_BASE_URL}/admin/withdrawals/approve`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ withdrawalId }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to approve withdrawal.');
            }

            alert(`Approval successful! TxHash: ${data.txHash}`);
            fetchWithdrawals();

        } catch (err) {
            setError(`Failed to approve ID ${withdrawalId}: ${(err as Error).message}`);
        } finally {
            setProcessingId(null);
    }
  };

  const handleStartDrawAll = async () => {
        setIsDrawProcessing(true);
        setDrawError(null);
        setDrawSuccessMessage(null);
    try {
        const response = await fetch(`${API_BASE_URL}/start-draw-all`, { method: 'POST' });
        const data = await response.json();

        if (data.success) {
                setDrawSuccessMessage(data.message || "Draw process for all rooms has been initiated.");
        } else {
            throw new Error(data.message || "An unknown error occurred on the server.");
        }
        } catch (err) {
            console.error("Failed to start draws:", err);
            setDrawError(`Error: ${(err as Error).message}`);
        } finally {
            setIsDrawProcessing(false);
        }
      };

    const handleOpenNextRound = async () => {
        setIsNextRoundProcessing(true);
        setNextRoundError(null);
        setNextRoundSuccessMessage(null);
        try {
            const response = await fetch(`${API_BASE_URL}/admin/open-next-round`, {
                method: 'POST',
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to open next round.');
            }
            setNextRoundSuccessMessage(data.message);
        } catch (error) {
            setNextRoundError((error as Error).message);
        } finally {
            setIsNextRoundProcessing(false);
        }
    };

    // 룰렛 추첨 실행
    const handleRouletteDraw = async () => {
        setRouletteDrawProcessing(true);
        setRouletteDrawError(null);
        setRouletteDrawSuccess(null);
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/roulette/draw`, {
                method: 'POST',
            });
            const data = await response.json();
            
            if (response.ok) {
                if (data.success === false && data.result?.status === 'invalid') {
                    // 무효 라운드 처리
                    setRouletteDrawSuccess(`🚫 라운드 무효! HIGH 또는 LOW 중 한쪽에 베팅이 없어 모든 베팅을 환불했습니다. (환불된 베팅: ${data.result.refundedBets}건, 총 환불금액: ${data.result.totalRefunded.toFixed(2)} USDT)`);
                } else if (data.success) {
                    // 정상 추첨 완료
                    setRouletteDrawSuccess(`🎉 추첨 완료! 당첨번호: ${data.result.winningNumber} (${data.result.winningType}) | 당첨자: ${data.result.totalWinners}명 | 총 배당금: ${data.result.totalPayout.toFixed(2)} USDT`);
                }
                
                // 1초 후 상태 새로고침
                setTimeout(() => {
                    fetchRouletteStatus();
                    fetchRouletteResult();
                }, 1000);
            } else {
                throw new Error(data.message || 'Failed to draw roulette.');
            }
        } catch (error) {
            setRouletteDrawError((error as Error).message);
        } finally {
            setRouletteDrawProcessing(false);
        }
    };

    // 룰렛 애니메이션 테스트 함수들
    const testRouletteAnimation = async (number: number) => {
        console.log(`🧪 Testing roulette animation with number: ${number}`);
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/roulette/test-animation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ winningNumber: number })
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Animation test result:', result);
                alert(`✅ 룰렛 애니메이션 테스트 시작!\n숫자: ${number}\n참여자 화면에서 애니메이션을 확인하세요.`);
            } else {
                const error = await response.json();
                alert(`❌ 테스트 실패: ${error.message}`);
            }
        } catch (error) {
            console.error('Error testing roulette animation:', error);
            alert('❌ 애니메이션 테스트 중 오류가 발생했습니다.');
        }
    };

    const stopRouletteAnimation = () => {
        // 테스트 결과를 즉시 제거
        fetch(`${API_BASE_URL}/api/roulette/test-status`, { method: 'DELETE' })
            .then(() => {
                console.log('🛑 Roulette animation test stopped');
                alert('🛑 룰렛 애니메이션 테스트가 중지되었습니다.');
            })
            .catch(error => {
                console.error('Error stopping animation test:', error);
            });
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-5xl mx-auto"> {/* 너비 약간 증가 */}
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-yellow-400">Admin Panel</h1>
                </header>

                {/* Section for Global Round Control */}
                <div className="mb-12 bg-gray-800/50 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Global Round Control</h2>
                    {drawError && <p className="text-red-400 mb-4 p-3 bg-red-900/50 rounded-md">{drawError}</p>}
                    {drawSuccessMessage && <p className="text-green-400 mb-4 p-3 bg-green-900/50 rounded-md">{drawSuccessMessage}</p>}
                    {nextRoundError && <p className="text-red-400 mb-4 p-3 bg-red-900/50 rounded-md">{nextRoundError}</p>}
                    {nextRoundSuccessMessage && <p className="text-green-400 mb-4 p-3 bg-green-900/50 rounded-md">{nextRoundSuccessMessage}</p>}
        <button
            onClick={handleStartDrawAll}
            disabled={isDrawProcessing}
            className="px-6 py-3 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-500 disabled:bg-gray-600 disabled:cursor-wait"
        >
                        {isDrawProcessing ? 'Initiating Draws...' : 'Start Draw For All Rooms'}
        </button>
        <button
            onClick={handleOpenNextRound}
            disabled={isNextRoundProcessing}
            className="px-6 py-3 bg-green-600 text-white font-bold text-lg rounded-lg hover:bg-green-500 disabled:bg-gray-600 disabled:cursor-wait"
        >
            {isNextRoundProcessing ? 'Opening Next Round...' : 'Open Next Round'}
        </button>
                </div>

                {/* Section for Roulette Game Control */}
                <div className="mb-12 bg-gray-800/50 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-yellow-300 mb-4">🎰 Roulette Game Control</h2>
                    
                    {/* Error/Success Messages */}
                    {rouletteDrawError && (
                        <div className="text-red-400 mb-4 p-3 bg-red-900/50 rounded-md">
                            ❌ {rouletteDrawError}
                        </div>
                    )}
                    {rouletteDrawSuccess && (
                        <div className="text-green-400 mb-4 p-3 bg-green-900/50 rounded-md">
                            {rouletteDrawSuccess}
                        </div>
                    )}
                    
                    {/* Current Status */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-blue-300 mb-3">📊 Current Round Status</h3>
                            {rouletteCurrentStatus?.round ? (
                                <div className="space-y-2 text-sm">
                                    <p><strong>Round #{rouletteCurrentStatus.round.round_number}</strong></p>
                                    <p>Status: <span className="text-green-400">{rouletteCurrentStatus.round.status}</span></p>
                                    <p>Low Pool: <span className="text-blue-400">{rouletteCurrentStatus.round.total_low_amount} USDT</span></p>
                                    <p>High Pool: <span className="text-purple-400">{rouletteCurrentStatus.round.total_high_amount} USDT</span></p>
                                    <p>Total Pool: <span className="text-yellow-400">{(parseFloat(rouletteCurrentStatus.round.total_low_amount) + parseFloat(rouletteCurrentStatus.round.total_high_amount)).toFixed(2)} USDT</span></p>
                                    <p>Time Remaining: <span className="text-red-400">{rouletteCurrentStatus.timeRemaining}s</span></p>
                                    {rouletteCurrentStatus.round.number_sequence && (
                                        <p>Numbers: <span className="text-cyan-400">[{JSON.parse(rouletteCurrentStatus.round.number_sequence).join(', ')}]</span></p>
                                    )}
                                </div>
                            ) : (
                                <p className="text-gray-400">Loading...</p>
                            )}
                            <button 
                                onClick={fetchRouletteStatus}
                                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 text-sm"
                            >
                                🔄 Refresh
                            </button>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-green-300 mb-3">🏆 Latest Result</h3>
                            {rouletteLatestResult ? (
                                <div className="space-y-2 text-sm">
                                    <p><strong>Round #{rouletteLatestResult.round_number}</strong></p>
                                    <p>Winning Number: <span className="text-green-400 text-lg font-bold">{rouletteLatestResult.winning_number}</span></p>
                                    <p>Winning Type: <span className="text-blue-400">{rouletteLatestResult.winning_type}</span></p>
                                    <p>Low Pool: {rouletteLatestResult.total_low_amount} USDT</p>
                                    <p>High Pool: {rouletteLatestResult.total_high_amount} USDT</p>
                                    {rouletteLatestResult.number_sequence && (
                                        <p>Numbers: <span className="text-cyan-400">[{rouletteLatestResult.number_sequence.join(', ')}]</span></p>
                                    )}
                                </div>
                            ) : (
                                <p className="text-gray-400">No results yet</p>
                            )}
                            <button 
                                onClick={fetchRouletteResult}
                                className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 text-sm"
                            >
                                🔍 Refresh
                            </button>
                        </div>
                    </div>
                    
                    {/* Draw Button */}
                    <div className="text-center">
                        <button
                            onClick={handleRouletteDraw}
                            disabled={rouletteDrawProcessing}
                            className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-xl rounded-lg hover:from-red-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-wait transform hover:scale-105 transition-all duration-200"
                        >
                            {rouletteDrawProcessing ? '🎰 추첨 중...' : '🎰 DRAW ROULETTE'}
                        </button>
                        <p className="mt-2 text-gray-400 text-sm">룰렛 추첨을 실행하고 당첨자에게 배당금을 지급합니다</p>
                    </div>
                    
                    {/* Animation Test Section */}
                    <div className="mt-8 p-4 bg-purple-900/30 border border-purple-500 rounded-lg">
                        <h3 className="text-purple-300 text-center text-lg font-bold mb-4">🧪 룰렛 애니메이션 테스트</h3>
                        <p className="text-purple-200 text-center text-sm mb-4">특정 숫자로 룰렛 애니메이션을 테스트할 수 있습니다</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {[1,2,3,4,5,6,7,8,9,10].map(num => (
                                <button
                                    key={num}
                                    onClick={() => testRouletteAnimation(num)}
                                    className="px-3 py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
                                    disabled={rouletteDrawProcessing}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <button
                                onClick={stopRouletteAnimation}
                                className="px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
                                disabled={rouletteDrawProcessing}
                            >
                                애니메이션 중지
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section for Withdrawal Requests */}
                <div>
                    <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Withdrawal Requests</h2>
                    <p className="text-gray-400 mt-1 mb-4">Approve pending withdrawal requests here.</p>
                    
                    {error && (
                        <div className="bg-red-900/50 border border-red-700 text-red-300 p-3 rounded-md mb-6">
                            <strong>Withdrawal Error:</strong> {error}
            </div>
        )}

                    <div className="bg-gray-800/50 rounded-lg shadow-lg">
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto">
                                <thead className="bg-gray-700/50">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold">ID</th>
                                        <th className="px-4 py-3 text-left font-semibold">Requested At</th>
                                        <th className="px-4 py-3 text-left font-semibold">User Address</th>
                                        <th className="px-4 py-3 text-left font-semibold">Amount (USDT)</th>
                                        <th className="px-4 py-3 text-left font-semibold">Status</th> {/* 상태 열 추가 */}
                                        <th className="px-4 py-3 text-left font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                    {isLoading ? (
                                        <tr>
                                            <td colSpan={6} className="text-center py-8"> {/* colSpan 변경 */}
                                                <div className="inline-block w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                                                <p className="mt-2">Loading Requests...</p>
                                            </td>
                                        </tr>
                                    ) : withdrawals.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="text-center py-8 text-gray-500"> {/* colSpan 변경 */}
                                                No withdrawal requests found.
                                            </td>
                                        </tr>
                                    ) : (
                                        withdrawals.map((req) => (
                                            <tr key={req.id} className="hover:bg-gray-700/30">
                                                <td className="px-4 py-3">{req.id}</td>
                                                <td className="px-4 py-3 font-mono text-sm">{new Date(req.requested_at).toLocaleString()}</td>
                                                <td className="px-4 py-3 font-mono text-sm">{req.user_address}</td>
                                                <td className="px-4 py-3 font-bold text-yellow-300">{req.amount.toFixed(4)}</td>
                                                <td className="px-4 py-3">
                                                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                                                        req.status === 'PENDING' ? 'bg-yellow-600/50 text-yellow-200' :
                                                        req.status === 'APPROVED' ? 'bg-green-600/50 text-green-200' :
                                                        'bg-red-600/50 text-red-200'
                                                    }`}>
                                                        {req.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    {req.status === 'PENDING' ? (
                                                        <button
                                                            onClick={() => handleApprove(req.id)}
                                                            disabled={processingId === req.id}
                                                            className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md disabled:bg-gray-500 disabled:cursor-wait"
                                                        >
                                                            {processingId === req.id ? 'Processing...' : 'Approve'}
                                                        </button>
                                                    ) : req.tx_hash ? (
                                                        <a 
                                                            href={`https://testnet.bscscan.com/tx/${req.tx_hash}`} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="text-blue-400 hover:underline"
                                                        >
                                                            View Tx
                                                        </a>
                                                    ) : (
                                                        <span className="text-gray-500">-</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
        </div>
            </div>
        </div>
  );
};

export default AdminPage; 