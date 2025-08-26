'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { API_BASE_URL, VAULT_CONTRACT_ADDRESS } from '@/config';

// --- Type Definitions ---
interface HistoryItem {
    roomName: string;
    roundNumber: number;
    wasWinner: boolean;
    result: string; // 'Win', 'Lose', 또는 'Pending'
}
interface Room {
    id: string;
    name: string;
}
interface Transaction {
    id: number;
    type: 'DEPOSIT' | 'WITHDRAW' | 'PARTICIPATE' | 'WIN' | 'WITHDRAW_REQUEST' | 'WITHDRAW_COMPLETE';
    amount: number;
    timestamp: string;
    tx_hash?: string;
}
interface MyPageModalProps {
    onClose: () => void;
}

const MyPageModal = ({ onClose }: MyPageModalProps) => {
    // --- UI State Management ---
    const [activeMainTab, setActiveMainTab] = useState('history');
    const [activeWalletTab, setActiveWalletTab] = useState('deposit');
    const [activeRoomId, setActiveRoomId] = useState<string>('');
    const [amount, setAmount] = useState('');
    
    // --- Data and API State ---
    const [balance, setBalance] = useState(0);
    const [allHistory, setAllHistory] = useState<HistoryItem[]>([]);
    const [rooms, setRooms] = useState<Room[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false); // For backend actions like withdrawal

    const { user, logout } = useAuth();

    // 거래 타입에 따른 색상 결정
    const getTransactionColor = (type: string) => {
        const outgoingTypes = ['PLAY', 'WITHDRAWAL', 'ROULETTE_BET']; // 출금 타입들
        const incomingTypes = ['DEPOSIT', 'WIN', 'ROULETTE_WIN']; // 입금 타입들
        
        if (outgoingTypes.includes(type)) {
            return 'text-red-400'; // 빨간색 (출금)
        } else if (incomingTypes.includes(type)) {
            return 'text-green-400'; // 초록색 (입금)
        } else {
            return 'text-gray-400'; // 기본색
        }
    };

    // 거래 타입에 따른 부호 결정
    const getTransactionSign = (type: string, amount: number) => {
        const outgoingTypes = ['PLAY', 'WITHDRAWAL', 'ROULETTE_BET']; // 출금 타입들
        const incomingTypes = ['DEPOSIT', 'WIN', 'ROULETTE_WIN']; // 입금 타입들
        
        if (outgoingTypes.includes(type)) {
            return '-'; // 마이너스 (출금)
        } else if (incomingTypes.includes(type)) {
            return '+'; // 플러스 (입금)
        } else {
            return amount > 0 ? '+' : ''; // 기본 로직
        }
    };

    // --- Data Fetching Logic ---
    const fetchBalance = useCallback(async () => {
        if (!user?.walletAddress) return;
        try {
            const response = await fetch(`${API_BASE_URL}/balance/${user.walletAddress}`);
            if (response.ok) {
                const data = await response.json();
                setBalance(data.balance);
            }
        } catch (err) { console.error('Failed to fetch balance:', err); }
    }, [user?.walletAddress]);

    useEffect(() => {
        if (user?.walletAddress) {
            fetchBalance();
        }
    }, [user, fetchBalance]);

    useEffect(() => {
        if (!user?.walletAddress) return;
        
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                if (activeMainTab === 'history') {
                const [historyRes, roomsRes] = await Promise.all([
                        fetch(`${API_BASE_URL}/user-history/${user.walletAddress}`),
                    fetch(`${API_BASE_URL}/rooms`)
                ]);
                    if (!historyRes.ok || !roomsRes.ok) throw new Error('Failed to fetch history data.');
                const historyData = await historyRes.json();
                const roomsData = await roomsRes.json();
                setAllHistory(historyData.history || []);
                setRooms(roomsData || []);
                if (roomsData.length > 0 && !activeRoomId) {
                    setActiveRoomId(roomsData[0].id);
                }
                } else if (activeMainTab === 'wallet' && activeWalletTab === 'transactions') {
                    const res = await fetch(`${API_BASE_URL}/transactions/${user.walletAddress}`);
                    if (!res.ok) throw new Error('Failed to fetch transactions.');
                    const data = await res.json();
                    setTransactions(data.transactions || []);
                }
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [user, activeMainTab, activeWalletTab, activeRoomId]);

    // --- Event Handlers ---
    const handleLogout = () => {
        logout();
        onClose();
    };
    
    const handleWithdrawRequest = async () => {
        if (!user?.walletAddress || !amount || parseFloat(amount) <= 0) {
            setError("Please enter a valid amount.");
            return;
        }
        setIsProcessing(true);
        setError(null);
        try {
            const res = await fetch(`${API_BASE_URL}/withdrawals/request`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    userAddress: user.walletAddress, 
                    amount: parseFloat(amount) 
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Failed to submit withdrawal request.");

            alert("Withdrawal request submitted successfully!");
            setBalance(data.newBalance);
            setAmount('');
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred.");
        } finally {
            setIsProcessing(false);
        }
    };

    const filteredHistory = allHistory.filter(item => {
        const activeRoom = rooms.find(r => r.id === activeRoomId);
        return activeRoom ? item.roomName.includes(activeRoom.name) : true;
    });

    return (
        <div className="fixed inset-0 bg-[#FFFFFF80] flex justify-center items-center z-50" onClick={onClose}>
            <div className="bg-[linear-gradient(#000000,#1A255D)] rounded-3xl w-full max-w-2xl text-left shadow-xl flex flex-col" onClick={(e) => e.stopPropagation()}>
                {/* Header and Main Tabs */}
                <div className='rounded-t-3xl flex justify-between items-center p-4 px-8 border-b border-gray-700 bg-gradient-to-r from-[#143892] to-[#0E369D] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                    <span className="font-['Pretendard'] text-base font-bold leading-normal text-white">마이페이지</span>
                    <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl">&times;</button>
                </div>
                <div className="flex justify-between items-center p-4 border-gray-700">
                    <div className="flex gap-6">
                         <button onClick={() => setActiveMainTab('history')} className={`text-xl font-semibold pb-2 ${activeMainTab === 'history' ? 'text-white border-b-2 border-white' : 'text-gray-500 hover:text-white'}`}>History</button>
                         <button onClick={() => setActiveMainTab('wallet')} className={`text-xl font-semibold pb-2 ${activeMainTab === 'wallet' ? 'text-white border-b-2 border-white' : 'text-gray-500 hover:text-white'}`}>Wallet</button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-6 h-[500px] overflow-y-auto custom-scrollbar">
                    {activeMainTab === 'history' && (
                        <div>
                            <div className="flex border-b border-gray-600 mb-4">
                                {rooms.map(room => (
                                    <button
                                        key={room.id}
                                        onClick={() => setActiveRoomId(room.id)}
                                        className={`py-2 px-4 font-semibold transition-colors duration-200 ${activeRoomId === room.id ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        {room.name}
                                    </button>
                                ))}
                            </div>
                            {isLoading ? <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto my-4"></div>
                            : error ? <p className="text-red-500 text-center">{error}</p>
                            : filteredHistory.length > 0 ? (
                                <ul className="space-y-3 pr-2">
                                    {filteredHistory.map((item, index) => (
                                        <li key={index} className={`p-4 rounded-md flex justify-between items-center text-black ${
                                            item.result === 'Win' ? 'bg-[#FFE100] border border-yellow-500' : 
                                            item.result === 'Pending' ? 'bg-blue-700/50 border border-blue-400' : 
                                            'bg-gray-700/50'
                                        }`}>
                                            <div className="flex items-center gap-4">
                                                <span className="bg-[#040404] text-white text-center font-bold rounded-md px-3 py-2">Round #{item.roundNumber}</span>
                                                <div><p className="font-semibold">{item.roomName}</p></div>
                                            </div>
                                            <span className={`text-2xl font-bold ${
                                                item.result === 'Win' ? 'text-black' : 
                                                item.result === 'Pending' ? 'text-blue-200' : 
                                                'text-gray-400'
                                            }`}>
                                                {item.result === 'Pending' ? '⏳' : item.result.toUpperCase()}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : <p className="text-gray-500 text-center py-4">No participation history for this room.</p>}
                        </div>
                    )}
                    
                    {activeMainTab === 'wallet' && (
                        <div>
                             <div className="text-center mb-6 p-4 bg-black/20 rounded-lg">
                                 <p className="text-gray-400 text-sm">My Wallet Address</p>
                                <div className="flex items-center justify-center gap-2">
                                     <p className="font-mono text-xs md:text-lg text-white my-1 break-all">{user?.walletAddress}</p>
                                     {user?.walletAddress && <CopyButton textToCopy={user.walletAddress} />}
                                 </div>
                                 <button onClick={handleLogout} className="text-sm text-red-500 hover:text-red-400 hover:underline mt-2">
                                     Logout
                                 </button>
                             </div>
                            <div className="mb-6">
                                <h3 className="text-lg text-gray-400 mb-2">My Balance</h3>
                                    <p className="text-4xl font-bold text-yellow-400">{balance.toFixed(4)} <span className="text-2xl text-gray-300">USDT</span></p>
                            </div>
                            <div className="flex border-b border-gray-600 mb-4">
                                 <button onClick={() => setActiveWalletTab('deposit')} className={`py-2 px-4 font-semibold transition-colors duration-200 ${activeWalletTab === 'deposit' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'}`}>Deposit</button>
                                 <button onClick={() => setActiveWalletTab('withdraw')} className={`py-2 px-4 font-semibold transition-colors duration-200 ${activeWalletTab === 'withdraw' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'}`}>Withdraw</button>
                                 <button onClick={() => setActiveWalletTab('transactions')} className={`py-2 px-4 font-semibold transition-colors duration-200 ${activeWalletTab === 'transactions' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'}`}>Transactions</button>
                            </div>
                            
                             {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                            {activeWalletTab === 'deposit' && (
                                 <div className="space-y-4 text-center">
                                     <p className="text-gray-300">아래 주소로 USDT (BEP-20)를 보내주세요.</p>
                                     <div className="p-3 bg-gray-900 rounded-md flex items-center justify-between">
                                         <span className="text-yellow-400 font-mono text-sm break-all">{VAULT_CONTRACT_ADDRESS}</span>
                                         <CopyButton textToCopy={VAULT_CONTRACT_ADDRESS} />
                                     </div>
                                     <p className="text-xs text-gray-500 pt-2">
                                         반드시 BNB Smart Chain (BEP-20) 네트워크를 이용해주세요.<br/>
                                         잘못된 네트워크로 전송된 자산은 복구할 수 없습니다.
                                     </p>
                                </div>
                            )}

                            {activeWalletTab === 'withdraw' && (
                                <div className="space-y-4">
                                     <p className="text-gray-300">Available to withdraw: {balance.toFixed(4)} USDT</p>
                                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0.00" className="w-full bg-gray-800 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                                    <button onClick={handleWithdrawRequest} disabled={isProcessing} className="w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-400 disabled:bg-gray-500">
                                        {isProcessing ? 'Processing...' : 'Request Withdraw'}
                                    </button>
                                </div>
                            )}

                            {activeWalletTab === 'transactions' && (
                                 <div className="space-y-3 pr-2">
                                     {isLoading ? <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto my-4"></div>
                                     : error ? <p className="text-red-500 text-center">{error}</p>
                                     : transactions.length > 0 ? (
                                         transactions.map((tx) => (
                                             <div key={tx.id} className="p-3 rounded-md bg-gray-800/50 flex justify-between items-center">
                                <div>
                                                     <p className="font-bold capitalize text-white">{tx.type.replace(/_/g, ' ')}</p>
                                                     <p className="text-xs text-gray-400">{new Date(tx.timestamp).toLocaleString()}</p>
                                                 </div>
                                                 <div className="text-right">
                                                     <p className={`font-bold text-lg ${getTransactionColor(tx.type)}`}>
                                                         {getTransactionSign(tx.type, tx.amount)}{Math.abs(tx.amount).toFixed(4)}
                                                     </p>
                                                     {tx.tx_hash && (
                                                         <a 
                                                             href={`https://testnet.bscscan.com/tx/${tx.tx_hash}`} 
                                                             target="_blank" 
                                                             rel="noopener noreferrer"
                                                             className="text-xs text-blue-400 hover:underline"
                                                         >
                                                             View on Explorer
                                                         </a>
                                                     )}
                                                 </div>
                                             </div>
                                         ))
                                     ) : (
                                         <p className="text-gray-500 text-center py-4">No transactions found.</p>
                                     )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };

    return (
        <button onClick={handleCopy} className="p-2 rounded-md hover:bg-gray-700 transition-colors relative ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs rounded-md px-2 py-1">
                    Copied!
                </span>
            )}
        </button>
    );
};

export default MyPageModal; 