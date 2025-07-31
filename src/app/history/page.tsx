'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const API_BASE_URL = 'http://localhost:3001';

interface HistoryItem {
    roundNumber: number; // This is now the global_round_id
    roomName: string;
    ticketPrice: string;
    wasWinner: boolean;
}

export default function HistoryPage() {
    const [account, setAccount] = useState<string | null>(null);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchHistory = useCallback(async (currentAccount: string) => {
        if (!currentAccount) return;
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/user-history/${currentAccount}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch history.');
            }
            const data = await response.json();
            setHistory(data.history || []);
        } catch (err) {
            setError((err as Error).message);
            setHistory([]);
        } finally {
            setIsLoading(false);
        }
    }, []);
    
    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }) as string[];
                setAccount(accounts[0]);
                fetchHistory(accounts[0]);
            } catch {
                setError('Failed to connect wallet.');
            }
        } else {
            setError('Please install MetaMask.');
        }
    };

    useEffect(() => {
        const handleAccountsChanged = (accounts: string[]) => {
            const newAccount = accounts.length > 0 ? accounts[0] : null;
            setAccount(newAccount);
            if (newAccount) {
                fetchHistory(newAccount);
            } else {
                setHistory([]);
            }
        };

        const ethereum = window.ethereum;
        if (ethereum) {
            ethereum.on('accountsChanged', handleAccountsChanged);
            (async () => {
                const accounts = await ethereum.request({ method: 'eth_accounts' }) as string[];
                handleAccountsChanged(accounts);
            })();
            return () => {
                ethereum.removeListener('accountsChanged', handleAccountsChanged);
            };
        }
    }, [fetchHistory]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4">
            <div className="absolute top-5 left-5">
                <Link href="/" className="text-blue-400 hover:underline">← Back to Lotto</Link>
            </div>

            <div className="w-full max-w-2xl text-center">
                <h1 className="text-5xl font-bold mb-8">My History</h1>
                
                {!account ? (
                    <button onClick={connectWallet} className="px-8 py-4 bg-blue-600 text-white font-bold text-2xl rounded-lg hover:bg-blue-500">
                        Connect Wallet to View History
                    </button>
                ) : (
                    <div className="space-y-4">
                        {isLoading ? (
                            <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
                        ) : error ? (
                            <p className="text-red-500">{error}</p>
                        ) : history.length > 0 ? (
                            <div className="bg-gray-800 rounded-lg p-4 max-h-96 overflow-y-auto">
                                <ul className="space-y-3">
                                    {history.map((item, index) => (
                                        <li key={index} className="bg-gray-800 p-4 rounded-md flex justify-between items-center">
                                            <div>
                                                <p className="text-lg font-bold">
                                                    Global Round <span className="text-yellow-400">#{item.roundNumber}</span> - <span className="text-blue-400">{item.roomName}</span>
                                                </p>
                                                <p className="text-sm text-gray-400">Ticket Price: {item.ticketPrice} USDT</p>
                                            </div>
                                            {item.wasWinner && (
                                                <span className="text-lg font-bold bg-yellow-500 text-black px-3 py-1 rounded-full">
                                                    🎉 WINNER
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p className="text-gray-500">You have not participated in any rounds yet.</p>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
} 