'use client';

import { useState, useEffect, useCallback } from 'react';

const API_BASE_URL = 'http://localhost:3001';

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
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchWithdrawals();
    }, [fetchWithdrawals]);

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

        } catch (err: any) {
            setError(`Failed to approve ID ${withdrawalId}: ${err.message}`);
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
        } catch (err: any) {
            console.error("Failed to start draws:", err);
            setDrawError(`Error: ${err.message}`);
        } finally {
            setIsDrawProcessing(false);
        }
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
                    <button
                        onClick={handleStartDrawAll}
                        disabled={isDrawProcessing}
                        className="px-6 py-3 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-500 disabled:bg-gray-600 disabled:cursor-wait"
                    >
                        {isDrawProcessing ? 'Initiating Draws...' : 'Start Draw For All Rooms'}
                    </button>
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