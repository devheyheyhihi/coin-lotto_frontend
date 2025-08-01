'use client';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import vaultAbiJson from '@/abis/Vault.json';
import { API_BASE_URL } from '@/config';

const VAULT_CONTRACT_ADDRESS = "0x43aFfaE1C51B04e772E69EfDd0453B0dC89EC3E6";
const USDT_CONTRACT_ADDRESS = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd"; 
// ABIs would ideally be managed better, e.g., loading from JSON files.
const vaultABI = vaultAbiJson.abi;
const usdtABI = [ "function approve(address spender, uint256 amount) public returns (bool)", "function allowance(address owner, address spender) public view returns (uint256)" ];

// --- Type Definitions ---
interface Room {
  id: string;
  name: string;
  ticketPrice: string;
}

interface HistoryItem {
    roundNumber: number;
    roomName: string;
    ticketPrice: string;
    wasWinner: boolean;
}

interface MyPageModalProps {
    account: string;
    onClose: () => void;
    balance: number; // 부모로부터 잔액을 받음
    onBalanceUpdate: (newBalance: number) => void; // 부모의 잔액을 업데이트할 함수
}

// --- MyPage Modal Component ---
const MyPageModal = ({ account, onClose, balance, onBalanceUpdate }: MyPageModalProps) => {
    const [activeMainTab, setActiveMainTab] = useState('history'); // 'history' or 'wallet'
    
    // --- History Tab States ---
    const [allHistory, setAllHistory] = useState<HistoryItem[]>([]);
    const [rooms, setRooms] = useState<Room[]>([]);
    const [activeRoomId, setActiveRoomId] = useState<string>('');
    const [isLoadingHistory, setIsLoadingHistory] = useState(true);
    const [historyError, setHistoryError] = useState<string | null>(null);

    // --- Wallet Tab States ---
    const [activeWalletTab, setActiveWalletTab] = useState('deposit'); // 'deposit', 'withdraw', 'transactions'
    const [amount, setAmount] = useState(''); // For deposit/withdraw input
    const [isProcessing, setIsProcessing] = useState(false); // For transaction processing state
    const [walletError, setWalletError] = useState<string | null>(null);

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
    }, [account, activeMainTab, activeRoomId]);

    const handleDeposit = async () => {
        if (!amount || parseFloat(amount) <= 0) {
            setWalletError("Please enter a valid amount.");
            return;
        }
        if (!window.ethereum) {
            setWalletError("MetaMask is not installed.");
            return;
        }

        setIsProcessing(true);
        setWalletError(null);

        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const usdtContract = new ethers.Contract(USDT_CONTRACT_ADDRESS, usdtABI, signer);
            const vaultContract = new ethers.Contract(VAULT_CONTRACT_ADDRESS, vaultABI, signer);

            const amountToDeposit = ethers.parseUnits(amount, 18); // Assuming USDT has 18 decimals

            // 1. Approve
            const approveTx = await usdtContract.approve(VAULT_CONTRACT_ADDRESS, amountToDeposit);
            await approveTx.wait();

            // 2. Deposit
            const depositTx = await vaultContract.deposit(amountToDeposit);
            await depositTx.wait();

            alert("Deposit successful!");
            setAmount('');
            // Refresh balance after a short delay to allow backend to process event
            setTimeout(async () => {
                try {
                    const res = await fetch(`${API_BASE_URL}/balance/${account}`);
                    const data = await res.json();
                    onBalanceUpdate(data.balance); // 부모의 상태를 업데이트
                } catch (err) {
                    console.error("Failed to refetch balance:", err);
                }
            }, 3000); 

        } catch (err) {
            setWalletError((err as { reason?: string }).reason || "An error occurred during deposit.");
        } finally {
            setIsProcessing(false);
        }
    };
    
    const handleWithdrawRequest = async () => {
        if (!amount || parseFloat(amount) <= 0) {
            setWalletError("Please enter a valid amount.");
            return;
        }
        if (parseFloat(amount) > balance) {
            setWalletError("Withdrawal amount cannot exceed your balance.");
            return;
        }

        setIsProcessing(true);
        setWalletError(null);

        try {
            const res = await fetch(`${API_BASE_URL}/withdrawals/request`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userAddress: account, amount: parseFloat(amount) })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to submit withdrawal request.");
            }

            alert("Withdrawal request submitted successfully!");
            onBalanceUpdate(data.newBalance); // 부모의 상태를 업데이트
            setAmount('');

        } catch (err) {
            setWalletError((err as Error).message);
        } finally {
            setIsProcessing(false);
        }
    };

    const filteredHistory = allHistory.filter(item => {
        const activeRoom = rooms.find(r => r.id === activeRoomId);
        return activeRoom ? item.roomName.includes(activeRoom.name) : false;
    });

    return (
        <div className="fixed inset-0 bg-[#FFFFFF80] flex justify-center items-center z-50" onClick={onClose}>
            <div className="bg-[linear-gradient(#000000,#1A255D)] rounded-3xl w-full max-w-2xl text-left shadow-xl flex flex-col" onClick={(e) => e.stopPropagation()}>
                {/* Header and Main Tabs */}
                <div className='rounded-t-3xl flex justify-center items-center p-4 border-b border-gray-700 bg-gradient-to-r from-[#143892] to-[#0E369D] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                    <span className="font-['Pretendard'] text-base font-bold leading-normal text-white">마이페이지</span>
                </div>
                <div className="flex justify-between items-center p-4 border-gray-700">
                    <div className="flex gap-6">
                        <button onClick={() => setActiveMainTab('history')} className={`text-xl font-semibold pb-2 ${activeMainTab === 'history' ? 'text-white border-b-2 border-white' : 'text-gray-500 hover:text-white'}`}>
                            History
                        </button>
                        <button onClick={() => setActiveMainTab('wallet')} className={`text-xl font-semibold pb-2 ${activeMainTab === 'wallet' ? 'text-white border-b-2 border-white' : 'text-gray-500 hover:text-white'}`}>
                            Wallet
                        </button>
                    </div>
                    {/* <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl">&times;</button> */}
                </div>

                {/* Content Area */}
                <div className="p-6 h-[500px] overflow-y-auto">
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
                                        <li key={index} className={`p-4 rounded-md flex justify-between items-center ${item.wasWinner ? 'bg-yellow-500 text-black' : 'bg-gray-700'}`}>
                                            <div className="flex items-center gap-4">
                                                <span className="bg-black text-white text-center font-bold rounded-md px-3 py-2">Round #{item.roundNumber}</span>
                                                <div>
                                                    <p className="font-semibold">Winning # <span className="text-lg">{item.roundNumber}</span></p> {/* Placeholder */}
                                                </div>
                                                <div>
                                                    <p className="font-semibold">My # <span className="text-lg">{item.roundNumber}</span></p> {/* Placeholder */}
                                                </div>
                                            </div>
                                            <span className="text-2xl font-bold">{item.wasWinner ? 'WIN' : 'LOSE'}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : <p className="text-gray-500 text-center py-4">No participation history for this room.</p>}
                        </div>
                    )}
                    {activeMainTab === 'wallet' && (
                        <div>
                            {/* Balance Display */}
                            <div className="mb-6">
                                <h3 className="text-lg text-gray-400 mb-2">My Balance</h3>
                                {/* isLoadingBalance ? (
                                    <div className="h-10 bg-gray-700 rounded-md animate-pulse"></div>
                                ) : ( */}
                                    <p className="text-4xl font-bold text-yellow-400">{balance.toFixed(4)} <span className="text-2xl text-gray-300">USDT</span></p>
                                {/* ) */}
                            </div>

                            {/* Wallet Sub-tabs */}
                            <div className="flex border-b border-gray-600 mb-4">
                                <button onClick={() => setActiveWalletTab('deposit')} className={`py-2 px-4 font-semibold transition-colors duration-200 ${activeWalletTab === 'deposit' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'}`}>
                                    Deposit
                                </button>
                                <button onClick={() => setActiveWalletTab('withdraw')} className={`py-2 px-4 font-semibold transition-colors duration-200 ${activeWalletTab === 'withdraw' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'}`}>
                                    Withdraw
                                </button>
                                <button onClick={() => setActiveWalletTab('transactions')} className={`py-2 px-4 font-semibold transition-colors duration-200 ${activeWalletTab === 'transactions' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'}`}>
                                    Transactions
                                </button>
                            </div>
                            
                            {walletError && <p className="text-red-500 text-center mb-4">{walletError}</p>}

                            {/* Deposit Form */}
                            {activeWalletTab === 'deposit' && (
                                <div className="space-y-4">
                                    <p className="text-gray-300">Enter the amount of USDT to deposit from your wallet.</p>
                                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0.00" className="w-full bg-gray-800 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                                    <button onClick={handleDeposit} disabled={isProcessing} className="w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-400 disabled:bg-gray-500">
                                        {isProcessing ? 'Processing...' : 'Deposit USDT'}
                                    </button>
                                </div>
                            )}

                            {/* Withdraw Form */}
                            {activeWalletTab === 'withdraw' && (
                                <div className="space-y-4">
                                    <p className="text-gray-300">Enter the amount to withdraw to your wallet.</p>
                                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0.00" className="w-full bg-gray-800 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                                    <button onClick={handleWithdrawRequest} disabled={isProcessing} className="w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-400 disabled:bg-gray-500">
                                        {isProcessing ? 'Processing...' : 'Request Withdraw'}
                                    </button>
                                </div>
                            )}

                            {/* Transaction List */}
                            {activeWalletTab === 'transactions' && (
                                <div>
                                    {/* isLoadingTransactions ? <p>Loading transactions...</p> : <p>Transaction history will be shown here.</p> */}
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