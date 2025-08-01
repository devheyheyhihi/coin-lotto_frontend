'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'next/navigation';
import { useAccount } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';

import Header from '@/components/Header';
import MyPageModal from '@/components/MyPageModal';
import GameExplainModal from '@/components/GameExplainModal';
import SideMenu from '@/components/SideMenu';
import Timer from '@/components/Timer';
import { API_BASE_URL } from '@/config';

// Interfaces
interface RoomConfig {
    id: string;
    name: string;
    ticketPrice: string;
    contractAddress: string;
}
interface LotteryStatus {
    name: string;
    status: 'OPEN' | 'DRAWING' | 'CLOSED';
    deadline: string;
    globalRoundId: number;
    participants: number;
    prizePool: string;
    players_snapshot: string;
    winner?: string;
    logs: Log[];
}
interface Log {
    type: string;
    message: string;
    timestamp: string;
}

export default function RoomPage() {
    const { roomId } = useParams<{ roomId: string }>();
    const { address: account, isConnected } = useAccount();
    const { open: openConnectModal } = useWeb3Modal();

    // State
    const [roomConfig, setRoomConfig] = useState<RoomConfig | null>(null);
    const [lotteryStatus, setLotteryStatus] = useState<LotteryStatus | null>(null);
    const [balance, setBalance] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isMyPageModalVisible, setIsMyPageModalVisible] = useState(false);
    const [isExplainModalVisible, setIsExplainModalVisible] = useState(false);
    const [displayedLogs, setDisplayedLogs] = useState<Log[]>([]);
    const lastLogTimestamp = useRef<string | null>(null);

    // Fetch initial room config
    useEffect(() => {
        const fetchRoomConfig = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/rooms`);
                const rooms = await res.json();
                const currentRoom = rooms.find((r: RoomConfig) => r.id === roomId);
                setRoomConfig(currentRoom);
            } catch (err) { setError('Failed to load room configuration.'); }
        };
        fetchRoomConfig();
    }, [roomId]);

    // Fetch balance
    const fetchBalance = useCallback(async () => {
        if (!account) return;
        try {
            const response = await fetch(`${API_BASE_URL}/balance/${account}`);
            if (response.ok) setBalance((await response.json()).balance);
            else setBalance(0);
        } catch (error) { setBalance(0); }
    }, [account]);

    // Register user and fetch balance on connect
    useEffect(() => {
        const registerAndFetch = async () => {
            if (account) {
                await fetch(`${API_BASE_URL}/users/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userAddress: account }),
                });
                fetchBalance();
            } else {
                setBalance(0);
            }
        };
        registerAndFetch();
    }, [account, fetchBalance]);

    // Fetch lottery status periodically
    const fetchStatus = useCallback(async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/lottery-status/${roomId}`);
            if (!response.ok) throw new Error('Failed to fetch status');
            const data: LotteryStatus = await response.json();
            setLotteryStatus(data);
        } catch (error) { console.error("Failed to fetch lottery status:", error); }
    }, [roomId]);

    useEffect(() => {
        fetchStatus();
        const interval = setInterval(fetchStatus, 5000);
        return () => clearInterval(interval);
    }, [fetchStatus]);

    // Update logs
    useEffect(() => {
        if (lotteryStatus?.logs) {
            const newLogs = lotteryStatus.logs.filter(log => 
                !lastLogTimestamp.current || new Date(log.timestamp) > new Date(lastLogTimestamp.current)
            );
            if (newLogs.length > 0) {
                setDisplayedLogs(prev => [...prev, ...newLogs].slice(-100)); // Keep last 100 logs
                lastLogTimestamp.current = newLogs[newLogs.length - 1].timestamp;
            }
        }
    }, [lotteryStatus?.logs]);

    // Handlers
    const handleParticipate = async () => {
        if (!account || !isConnected || !roomConfig) return;
        setIsProcessing(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/participate/${roomId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userAddress: account })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Participation failed.');
            setBalance(data.newBalance);
            await fetchStatus();
        } catch (err: any) {
            setError(`Participation failed: ${err.message}`);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleOpenMyPage = () => {
        if (isConnected) setIsMyPageModalVisible(true);
        else openConnectModal();
    };

    const formatAddress = (addr: string) => addr ? `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}` : '';

    return (
        <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/bg_room.png')" }}>
            <Header balance={balance} onOpenMyPage={handleOpenMyPage} />

            <main className="container mx-auto px-4 py-24 md:py-32">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Column (Participants) */}
                    <div className="md:w-1/3 order-2 md:order-1">
                        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 h-full">
                            <h3 className="text-xl font-bold mb-4 text-white">Participants ({lotteryStatus?.participants ?? 0})</h3>
                            <div className="h-96 overflow-y-auto pr-2 custom-scrollbar">
                                {/* Participant rendering logic here, if needed */}
                                <p className="text-gray-400">Participant list is not displayed in real-time.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Game Info) */}
                    <div className="md:w-2/3 order-1 md:order-2">
                        <div className="flex items-center mb-4">
                            {roomId && (
                                <video key={roomId} autoPlay loop muted playsInline className="w-12 h-12 mr-4">
                                    <source src={`/icon_room_${roomId}.webm`} type="video/webm" />
                                </video>
                            )}
                            <h2 className="font-bold text-2xl md:text-[32px] leading-normal [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[#1ACFF8] to-[#EBFD62] bg-clip-text text-transparent">
                                Global Round #{lotteryStatus?.globalRoundId || '...'}
                            </h2>
                        </div>
                        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="text-gray-400">Prize Pool</p>
                                    <p className="text-3xl font-bold text-yellow-400">{lotteryStatus?.prizePool ?? '0.00'} USDT</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-400">Remaining Time</p>
                                    {lotteryStatus?.deadline && <Timer deadline={lotteryStatus.deadline} />}
                                </div>
                            </div>

                            <button
                                onClick={handleParticipate}
                                disabled={!isConnected || lotteryStatus?.status !== 'OPEN' || isProcessing}
                                className="w-full text-white font-bold text-lg p-4 rounded-lg border-2 border-cyan-400 bg-black/50 hover:bg-cyan-400/20 transition-all disabled:bg-gray-700 disabled:border-gray-500 disabled:text-gray-400 disabled:cursor-not-allowed"
                            >
                                {isProcessing ? 'Processing...' : `Participate for ${roomConfig?.ticketPrice ?? ''} USDT`}
                            </button>
                            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                        </div>

                        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mt-8 h-80">
                            <h3 className="text-xl font-bold mb-4 text-white">Game Log</h3>
                            <div className="h-full overflow-y-auto pr-2 custom-scrollbar text-sm">
                                {displayedLogs.map((log, i) => (
                                    <p key={i} className="mb-1">
                                        <span className="text-gray-500 mr-2">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                                        <span className={log.type === 'WINNER' ? 'text-yellow-400' : 'text-gray-300'}>{log.message}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <SideMenu onOpenMyPage={handleOpenMyPage} onOpenExplain={() => setIsExplainModalVisible(true)} />

            {isMyPageModalVisible && isConnected && (
                <MyPageModal
                    onClose={() => setIsMyPageModalVisible(false)}
                    balance={balance}
                    onBalanceUpdate={setBalance}
                />
            )}

            {isExplainModalVisible && (
                <GameExplainModal
                    onClose={() => setIsExplainModalVisible(false)}
                    onConnectWallet={openConnectModal}
                />
            )}

            {isProcessing && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50">
                    <div className="w-16 h-16 border-4 border-t-transparent border-cyan-400 rounded-full animate-spin"></div>
                    <p className="text-white text-xl mt-4">Processing Transaction...</p>
                </div>
            )}
        </div>
    );
} 