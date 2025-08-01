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
interface PastWinner {
    global_round_id: number;
    winner: string;
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
    const [pastWinners, setPastWinners] = useState<PastWinner[]>([]);
    const logContainerRef = useRef<HTMLDivElement>(null);
    
    // Data Fetching
    useEffect(() => {
        const fetchRoomConfig = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/rooms`);
                const rooms = await res.json();
                setRoomConfig(rooms.find((r: RoomConfig) => r.id === roomId));
            } catch (err) { setError('Failed to load room configuration.'); }
        };
        const fetchWinners = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/winners/${roomId}`);
                if (res.ok) setPastWinners(await res.json());
            } catch (error) { console.error("Error fetching past winners:", error); }
        };
        fetchRoomConfig();
        fetchWinners();
    }, [roomId]);

    const fetchBalance = useCallback(async () => {
        if (!account) return;
        try {
            const response = await fetch(`${API_BASE_URL}/balance/${account}`);
            if (response.ok) setBalance((await response.json()).balance);
            else setBalance(0);
        } catch (error) { setBalance(0); }
    }, [account]);

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

    useEffect(() => {
        if (lotteryStatus?.logs) {
            setDisplayedLogs(lotteryStatus.logs);
        }
    }, [lotteryStatus?.logs]);

    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [displayedLogs]);

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

    return (
        <div className="bg-[#1a1a2e] min-h-screen text-white font-sans bg-[url('/bg.png')] bg-[length:100%_100%] bg-fixed">
            <Header balance={balance} onOpenMyPage={handleOpenMyPage} />

            <div className="text-center py-3 bg-gradient-to-r from-[#2C32AE] to-[#120D0D] border-y border-[#FFFFFF]">
                <div className="flex justify-center items-center">
                     <h2 className="font-bold text-2xl md:text-[32px] leading-normal [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[#1ACFF8] to-[#EBFD62] bg-clip-text text-transparent">Global Round #{lotteryStatus?.globalRoundId || '...'}</h2>
                 </div>
            </div>

            <main className="flex flex-col md:flex-row w-full gap-4 md:gap-8 p-4 md:p-8">
                {/* Right Column */}
                <div className="w-full md:w-2/3 flex flex-col gap-4 md:order-2">
                     <div className="text-xl md:text-2xl font-bold text-yellow-400 p-4 bg-black/30 rounded-lg border border-gray-700 flex items-center gap-2">
                         <video key={roomId} autoPlay loop muted playsInline className="w-12 h-12">
                             <source src={`/icon_room_${roomId}.webm`} type="video/webm" />
                         </video>
                         <span>Prize Pool: <span className="font-mono">{parseFloat(lotteryStatus?.prizePool || '0').toFixed(4)}</span> USDT</span>
                     </div>
                     <div ref={logContainerRef} className="flex-grow rounded-lg p-4 bg-black/80 font-mono text-sm overflow-y-auto border border-gray-700 h-80 md:h-96 custom-scrollbar">
                        {displayedLogs.map((log, i) => (
                             <div key={i} className={`${ log.type === 'WINNER' ? 'text-yellow-400 font-bold' : 'text-gray-400' }`}>
                                 <span className="text-gray-600 mr-2">{new Date(log.timestamp).toLocaleTimeString()}</span>
                                 <span>{log.message}</span>
                             </div>
                         ))}
                     </div>
                </div>

                {/* Left Column */}
                <div className="w-full md:w-1/3 flex flex-col gap-4 p-4 bg-black/30 rounded-lg border border-gray-700 md:order-1">
                     <h1 className="text-2xl md:text-3xl font-bold text-center">{roomConfig?.name || 'Loading Room...'}</h1>
                     <Timer deadline={lotteryStatus?.status === 'OPEN' ? lotteryStatus.deadline : null} containerClassName="text-4xl md:text-5xl text-center font-['LABDigital'] py-2 text-cyan-400 flex justify-center" />
                     {error && <p className="text-red-500 text-xs my-1 text-center">{error}</p>}
                     <button
                         onClick={handleParticipate}
                         disabled={!isConnected || lotteryStatus?.status !== 'OPEN' || isProcessing}
                         className="w-full text-white font-bold p-3 rounded-lg border-2 border-cyan-400 bg-black/50 hover:bg-cyan-400/20 disabled:bg-gray-700 disabled:border-gray-500 disabled:text-gray-400"
                     >
                         Participate ({roomConfig?.ticketPrice || '...'} USDT)
                     </button>
                     <div className="flex flex-col">
                         <h2 className="text-lg font-bold mb-2">Participants ({lotteryStatus?.participants || 0})</h2>
                         <div className="bg-black/20 rounded p-2 h-40 md:h-48 overflow-y-auto border border-gray-800 custom-scrollbar">
                             {lotteryStatus?.players_snapshot && JSON.parse(lotteryStatus.players_snapshot).map((player: string, index: number) => <div key={index} className="text-sm truncate font-mono text-green-400">{player}</div>)}
                         </div>
                     </div>
                     <div className="flex flex-col">
                         <h2 className="text-lg font-bold mt-2 mb-2">🏆 Round Winners</h2>
                         <div className="bg-black/20 rounded p-2 h-40 md:h-48 overflow-y-auto border border-gray-800 custom-scrollbar">
                             {pastWinners.length > 0 ? (
                                 pastWinners.map((winner, index) => (
                                     <div key={index} className="flex justify-between items-center text-sm py-1">
                                         <span>Round {winner.global_round_id}</span>
                                         <span className="font-mono">{`${winner.winner.substring(0, 6)}...${winner.winner.slice(-4)}`}</span>
                                     </div>
                                 ))
                             ) : (
                                 <div className="text-sm text-gray-500 text-center py-1">No recent winners.</div>
                             )}
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