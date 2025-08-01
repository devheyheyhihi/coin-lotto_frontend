'use client';

import { useState, useEffect } from 'react';
import { useAccount, useDisconnect, useBalance, useWriteContract, useWaitForTransactionReceipt, useSwitchChain } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import usdtContractAbi from '@/abis/Usdt.json';
import vaultContractAbi from '@/abis/Vault.json';
import { API_BASE_URL, CHAIN_CONFIG } from '@/config';

const USDT_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_USDT_CONTRACT_ADDRESS || "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
const VAULT_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_VAULT_CONTRACT_ADDRESS || "0x43aFfaE1C51B04e772E69EfDd0453B0dC89EC3E6";

// --- Type Definitions ---
interface HistoryItem {
    roomName: string;
    roundNumber: number;
    wasWinner: boolean;
}
interface Room {
    id: string;
    name: string;
}
interface Transaction {
    id: number;
    type: 'DEPOSIT' | 'WITHDRAW' | 'PARTICIPATE' | 'WIN';
    amount: number;
    timestamp: string; // From backend
    tx_hash?: string;
}
interface MyPageModalProps {
    onClose: () => void;
    balance: number;
    onBalanceUpdate: (newBalance: number) => void;
}

const MyPageModal = ({ onClose, balance, onBalanceUpdate }: MyPageModalProps) => {
    const [activeMainTab, setActiveMainTab] = useState('history');
    const [allHistory, setAllHistory] = useState<HistoryItem[]>([]);
    const [rooms, setRooms] = useState<Room[]>([]);
    const [activeRoomId, setActiveRoomId] = useState<string>('');
    const [isLoadingHistory, setIsLoadingHistory] = useState(true);
    const [historyError, setHistoryError] = useState<string | null>(null);
    const [activeWalletTab, setActiveWalletTab] = useState('deposit');
    const [amount, setAmount] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [walletError, setWalletError] = useState<string | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);

    const { address: account, isConnected, chain } = useAccount();
    const { disconnect } = useDisconnect();
    const { switchChain } = useSwitchChain();
    const { data: hash, error: writeError, isPending, writeContract } = useWriteContract();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

    const { data: usdtBalanceData } = useBalance({
        address: account,
        token: USDT_CONTRACT_ADDRESS as `0x${string}`,
    });
    const usdtBalance = usdtBalanceData ? parseFloat(formatEther(usdtBalanceData.value)).toFixed(2) : '0.00';

    useEffect(() => {
        if (isConfirmed) {
            alert("Transaction successful!");
            fetchBalance();
            setIsProcessing(false);
            setAmount('');
        }
    }, [isConfirmed]);

    useEffect(() => {
        if (writeError) {
            setWalletError(writeError.message.split('Contract Call')[0] || "An error occurred.");
            setIsProcessing(false);
        }
    }, [writeError]);

    const fetchBalance = async () => {
        if (!account) return;
        try {
            const response = await fetch(`${API_BASE_URL}/balance/${account}`);
            if (response.ok) {
                const data = await response.json();
                onBalanceUpdate(data.balance);
            }
        } catch (error) {
            console.error('Failed to fetch balance:', error);
        }
    };
    
    // Fetch game history
    useEffect(() => {
        if (!account || activeMainTab !== 'history') return;
        
        const fetchHistoryAndRooms = async () => {
            setIsLoadingHistory(true);
            setHistoryError(null);
            try {
                const [historyRes, roomsRes] = await Promise.all([
                    fetch(`${API_BASE_URL}/user-history/${account}`),
                    fetch(`${API_BASE_URL}/rooms`)
                ]);

                if (!historyRes.ok) throw new Error('Failed to fetch history.');
                if (!roomsRes.ok) throw new Error('Failed to fetch rooms.');

                const historyData = await historyRes.json();
                const roomsData = await roomsRes.json();
                
                setAllHistory(historyData.history || []);
                setRooms(roomsData || []);
                if (roomsData.length > 0 && !activeRoomId) {
                    setActiveRoomId(roomsData[0].id);
                }

            } catch (err) {
                setHistoryError((err as Error).message);
            } finally {
                setIsLoadingHistory(false);
            }
        };
        fetchHistoryAndRooms();
    }, [account, activeMainTab]);
    
    // Fetch user transaction history (for Wallet tab)
    useEffect(() => {
        if (account && activeWalletTab === 'transactions') {
            const fetchTransactions = async () => {
                setIsLoadingTransactions(true);
                setWalletError(null);
                try {
                    const res = await fetch(`${API_BASE_URL}/transactions/${account}`);
                    if (!res.ok) throw new Error('Failed to fetch transactions.');
                    const data = await res.json();
                    setTransactions(data.transactions || []);
                } catch(err: any) {
                    setWalletError(err.message);
                } finally {
                    setIsLoadingTransactions(false);
                }
            };
            fetchTransactions();
        }
    }, [account, activeWalletTab]);
    
    useEffect(() => {
        setWalletError(null);
        setAmount('');
    }, [activeMainTab, activeWalletTab]);

    const handleDisconnect = () => {
        disconnect();
        onClose();
    };

    const ensureCorrectNetwork = async (): Promise<boolean> => {
        if (chain?.id.toString() !== CHAIN_CONFIG.id) {
            try {
                await switchChain({ chainId: parseInt(CHAIN_CONFIG.id, 16) });
                return true;
            } catch (error) {
                setWalletError("Failed to switch network. Please switch to BNB Testnet manually.");
                return false;
            }
        }
        return true;
    };
    
    const handleDeposit = async () => {
        if (!await ensureCorrectNetwork() || !amount) return;
        
        setIsProcessing(true);
        setWalletError(null);
        const depositAmount = parseEther(amount);

        // Step 1: Approve
        writeContract({
            address: USDT_CONTRACT_ADDRESS as `0x${string}`,
            abi: usdtContractAbi.abi,
            functionName: 'approve',
            args: [VAULT_CONTRACT_ADDRESS, depositAmount],
        }, {
            onSuccess: async (approveHash) => {
               // This is a simplified flow. A truly robust version would use useWaitForTransactionReceipt here
               // before calling the next writeContract.
               // For this implementation, we proceed optimistically.
                writeContract({
                    address: VAULT_CONTRACT_ADDRESS as `0x${string}`,
                    abi: vaultContractAbi.abi,
                    functionName: 'deposit',
                    args: [depositAmount],
                });
            },
            onError: (err) => {
                setWalletError(`Approval failed: ${err.message.split('Contract Call')[0]}`);
                setIsProcessing(false);
            }
        });
    };

    const handleWithdrawRequest = async () => {
        if (!account || !amount) return;
        setIsProcessing(true);
        setWalletError(null);
        try {
            const res = await fetch(`${API_BASE_URL}/withdrawals/request`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userAddress: account, amount: parseFloat(amount) })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Failed to submit withdrawal request.");
            alert("Withdrawal request submitted successfully!");
            onBalanceUpdate(data.newBalance);
            setAmount('');
        } catch (err) {
            setWalletError((err as Error).message);
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
                            {isLoadingHistory ? <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto my-4"></div>
                            : historyError ? <p className="text-red-500 text-center">{historyError}</p>
                            : filteredHistory.length > 0 ? (
                                <ul className="space-y-3 pr-2">
                                    {filteredHistory.map((item, index) => (
                                        <li key={index} className={`p-4 rounded-md flex justify-between items-center text-black ${item.wasWinner ? 'bg-[#FFE100] border border-yellow-500' : 'bg-gray-700/50'}`}>
                                            <div className="flex items-center gap-4">
                                                <span className="bg-[#040404] text-white text-center font-bold rounded-md px-3 py-2">Round #{item.roundNumber}</span>
                                                <div><p className="font-semibold">{item.roomName}</p></div>
                                            </div>
                                            <span className={`text-2xl font-bold ${item.wasWinner ? 'text-black' : 'text-gray-400'}`}>{item.wasWinner ? 'WIN' : 'LOSE'}</span>
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
                                 <p className="font-mono text-lg text-white my-1">{account}</p>
                                 <button onClick={handleDisconnect} className="text-sm text-red-500 hover:text-red-400 hover:underline">
                                     Disconnect Wallet
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
                             {walletError && <p className="text-red-500 text-center mb-4">{walletError}</p>}
                            
                             {activeWalletTab === 'deposit' && (
                                 <div className="space-y-4">
                                     <p className="text-gray-300">Available to deposit: {usdtBalance} USDT</p>
                                     <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0.00" className="w-full bg-gray-800 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                                     <button onClick={handleDeposit} disabled={isProcessing || isPending || isConfirming} className="w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-400 disabled:bg-gray-500">
                                         {isProcessing || isPending || isConfirming ? 'Processing...' : 'Deposit USDT'}
                                     </button>
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
                                     {isLoadingTransactions ? (
                                         <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto my-4"></div>
                                     ) : walletError ? (
                                         <p className="text-red-500 text-center">{walletError}</p>
                                     ) : transactions.length > 0 ? (
                                         transactions.map((tx) => (
                                             <div key={tx.id} className="p-3 rounded-md bg-gray-800/50 flex justify-between items-center">
                                                 <div>
                                                     <p className="font-bold capitalize text-white">{tx.type.replace('_', ' ')}</p>
                                                     <p className="text-xs text-gray-400">{new Date(tx.timestamp).toLocaleString()}</p>
                                                 </div>
                                                 <div className="text-right">
                                                     <p className={`font-bold text-lg ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                         {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(4)}
                                                     </p>
                                                     {tx.tx_hash && (
                                                         <a 
                                                             href={`${CHAIN_CONFIG.blockExplorerUrl}/tx/${tx.tx_hash}`} 
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

export default MyPageModal; 