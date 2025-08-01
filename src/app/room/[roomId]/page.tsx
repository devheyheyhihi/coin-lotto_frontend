'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import MyPageModal from '@/components/MyPageModal';
import Timer from '@/components/Timer';
import GameExplainModal from '@/components/GameExplainModal';
import { API_BASE_URL } from '@/config';

// --- Constants ---
const BNB_CHAIN_ID = '0x61';

// --- Type Definitions ---

interface LogEntry {
    id: number;
    type: 'JOIN' | 'SYSTEM' | 'WINNER' | 'ERROR' | 'INFO' | 'PROCESS' | 'SPIN';
    message: string;
    timestamp: string;
}

interface LotteryRound {
    id: number; // This is now the room_round_id
    globalRoundId: number;
    deadline: string; // Add deadline to the type
    status: 'OPEN' | 'DRAWING' | 'CLOSED';
    players: string[];
    players_snapshot: string | null;
    winner: string | null;
    prizePool: string | null;
    logs: LogEntry[];
    // These are added from the backend's room config
    name: string;
    ticketPrice: string;
    contractAddress: string;
}

interface RoomConfig {
    name: string;
    ticketPrice: string;
    contractAddress: string;
}

// --- Main Component ---
export default function RoomPage() {
    const params = useParams();
    const roomId = params.roomId as string;

    const [account, setAccount] = useState<string | null>(null);
    const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [lotteryStatus, setLotteryStatus] = useState<LotteryRound | null>(null);
    const [roomConfig, setRoomConfig] = useState<RoomConfig | null>(null);
    const [displayedLogs, setDisplayedLogs] = useState<LogEntry[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isMyPageVisible, setIsMyPageVisible] = useState(false);
    const [isExplainModalVisible, setIsExplainModalVisible] = useState(false);
    const [pastWinners, setPastWinners] = useState<{ global_round_id: number; winner: string }[]>([]);
    const [balance, setBalance] = useState(0);

    const logContainerRef = useRef<HTMLDivElement>(null);
    const prevStatusRef = useRef<LotteryRound | null>(null); // 이전 상태 기억

    const addFrontendLog = useCallback((type: LogEntry['type'], message: string) => {
        const newLog: LogEntry = { id: Math.random() * -100000, type, message, timestamp: new Date().toISOString() };
        setDisplayedLogs(prev => [...prev, newLog]);
    }, []);

    const fetchStatus = useCallback(async () => {
        if (!roomId) return;
        try {
            const response = await fetch(`${API_BASE_URL}/lottery-status/${roomId}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch lottery status.');
            }
            const data: LotteryRound = await response.json();
            setLotteryStatus(data);

            if (!roomConfig) {
                setRoomConfig({
                    name: data.name,
                    ticketPrice: data.ticketPrice,
                    contractAddress: data.contractAddress,
                });
            }
        } catch (err) {
            setError((err as Error).message);
        }
    }, [roomId, roomConfig]);
    
    // --- New, Robust Animation Logic ---
    useEffect(() => {
        if (!lotteryStatus) return; // 서버 데이터 없으면 종료

        const prevStatus = prevStatusRef.current;
        
        // 애니메이션을 실행하는 함수 (내용은 이전과 동일)
        const animateLogs = async (logsToAnimate: LogEntry[], clearFirst: boolean) => {
            if (clearFirst) {
                setDisplayedLogs([]);
                // 화면을 비운 후 잠깐의 딜레이를 주어 사용자가 인지하게 함
                await new Promise(res => setTimeout(res, 100));
            }

            const isDrawSequence = logsToAnimate.some(log => log.type === 'SPIN' || log.type === 'WINNER');
            const totalLogs = logsToAnimate.length;

            for (let i = 0; i < totalLogs; i++) {
                const log = logsToAnimate[i];
                setDisplayedLogs(prev => [...prev, log]);

                let delay = 100;
                if (isDrawSequence) {
                    const progress = (i + 1) / totalLogs;
                    if (progress < 0.6) delay = 30;
                    else if (progress < 0.9) delay = 45 + ((progress - 0.6) / 0.3 * 150);
                    else delay = 500 + Math.random() * 500;
                }
                await new Promise(res => setTimeout(res, delay));
            }
        };

        // --- 시나리오 분기 ---

        // 시나리오 1: '추첨 시작'의 순간 (OPEN -> DRAWING)
        if (lotteryStatus.status === 'DRAWING' && prevStatus?.status === 'OPEN') {
            animateLogs(lotteryStatus.logs, true);
        }
        // 시나리오 2: '참가자 추가'의 순간 (OPEN -> OPEN)
        else if (lotteryStatus.status === 'OPEN' && prevStatus?.status === 'OPEN' && lotteryStatus.logs.length > prevStatus.logs.length) {
            const newLogs = lotteryStatus.logs.slice(prevStatus.logs.length);
            animateLogs(newLogs, false);
        }
        // 시나리오 3: 그 외 모든 경우 (새로고침, 재진입 등)
        else {
            // 애니메이션 없이 즉시 로그를 현재 상태로 동기화
            setDisplayedLogs(lotteryStatus.logs);
        }

        // 마지막에 현재 상태를 '이전 상태'로 기록
        prevStatusRef.current = lotteryStatus;
        
    }, [lotteryStatus]); // 오직 lotteryStatus에만 의존하여 실행

    useEffect(() => {
        if (!lotteryStatus?.deadline || lotteryStatus.status !== 'OPEN') {
            return;
        }

        const interval = setInterval(() => {
            const now = new Date();
            const deadlineTime = new Date(lotteryStatus.deadline);
            const diff = deadlineTime.getTime() - now.getTime();

            if (diff <= 0) {
                fetchStatus();
                return;
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [lotteryStatus, fetchStatus]);

    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [displayedLogs]);


    const checkNetwork = useCallback(async (chainId: string) => {
        if (window.ethereum) {
            setIsCorrectNetwork(chainId === BNB_CHAIN_ID);
        }
    }, []);

    useEffect(() => {
        const handleAccountsChanged = (accounts: string[]) => {
            const newAccount = accounts.length > 0 ? accounts[0] : null;
            setAccount(newAccount);
        };
        const ethereum = window.ethereum;
        if (ethereum) {
            ethereum.on('accountsChanged', handleAccountsChanged);
            ethereum.on('chainChanged', checkNetwork);
            (async () => {
                const accounts = await ethereum.request({ method: 'eth_accounts' }) as string[];
                handleAccountsChanged(accounts);
                await checkNetwork(await ethereum.request({ method: 'eth_chainId' }) as string);
            })();
            return () => {
                ethereum.removeListener('accountsChanged', handleAccountsChanged);
                ethereum.removeListener('chainChanged', checkNetwork);
            };
        }
    }, [checkNetwork]);

    useEffect(() => {
        const fetchWinners = async () => {
            if (!roomId) return;
            try {
                const response = await fetch(`${API_BASE_URL}/winners/${roomId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch winners');
                }
                const data = await response.json();
                setPastWinners(data);
            } catch (error) {
                console.error("Error fetching past winners:", error);
            }
        };
        fetchWinners();
    }, [roomId]);

    useEffect(() => {
        fetchStatus();
        const interval = setInterval(fetchStatus, 3000);
        return () => clearInterval(interval);
    }, [fetchStatus]);

    // Fetch balance whenever account changes
    useEffect(() => {
        if (account) {
            const fetchBalance = async () => {
                try {
                    const response = await fetch(`${API_BASE_URL}/balance/${account}`);
                    if (response.ok) {
                        const data = await response.json();
                        setBalance(data.balance);
                    } else { setBalance(0); }
                } catch (error) {
                    console.error("Failed to fetch balance:", error);
                    setBalance(0);
                }
            };
            fetchBalance();
        } else {
            setBalance(0);
        }
    }, [account]);

    const connectWallet = async () => {
        if (!window.ethereum) return setError('Please install MetaMask.');
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }) as string[];
            setAccount(accounts[0]);
        } catch { setError('Failed to connect wallet.'); }
    };

    const handleOpenMyPage = () => {
        if (account) {
          setIsMyPageVisible(true);
        } else {
          alert('Please connect your wallet first.');
        }
    };

    const handleParticipate = async () => {
        if (!account || !isCorrectNetwork || !roomConfig) return;
        
        setIsProcessing(true);
        setError(null);
        
        try {
            const response = await fetch(`${API_BASE_URL}/participate/${roomId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userAddress: account })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Participation failed.');
            }

            // Update balance and refetch status
            setBalance(data.newBalance);
            await fetchStatus();

        } catch (err) {
            setError(`Participation failed: ${(err as Error).message}`);
        } finally {
            setIsProcessing(false);
        }
    };
    
    return (
        <div className="bg-[#1a1a2e] min-h-screen text-white font-sans bg-[url('/bg.png')] bg-[length:100%_100%] bg-fixed">
            <Header balance={balance} onOpenMyPage={handleOpenMyPage} />

            {isProcessing && (
                <div className="fixed inset-0 bg-[#00000090] flex flex-col justify-center items-center z-50">
                    <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-white text-xl font-semibold">Processing Transaction...</p>
                </div>
            )}

            {/* Global Round Bar */}
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
                    
                    <div ref={logContainerRef} className="flex-grow rounded-lg p-4 bg-black/80 font-mono text-sm overflow-y-auto border border-gray-700 h-80 md:h-96">
                        {displayedLogs.map((log, i) => (
                            <div key={log.id || i} className={`${
                                log.type === 'WINNER' ? 'text-yellow-400 font-bold text-lg' 
                                : log.type === 'ERROR' ? 'text-red-500' 
                                : log.type === 'JOIN' ? 'text-blue-400'
                                : log.type === 'PROCESS' ? 'text-green-400'
                                : 'text-gray-400'
                            }`}>
                                <span className="text-gray-600 mr-2">{new Date(log.timestamp).toLocaleTimeString()}</span>
                                <span>{log.message}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left Column */}
                <div className="w-full md:w-1/3 flex flex-col gap-4 p-4 bg-black/30 rounded-lg border border-gray-700 md:order-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-center">{roomConfig?.name || 'Loading Room...'}</h1>
                    
                    <Timer 
                        deadline={lotteryStatus?.status === 'OPEN' ? lotteryStatus.deadline : null}
                        containerClassName="text-4xl md:text-5xl text-center font-['LABDigital'] py-2 text-cyan-400 flex justify-center"
                    />

                    {error && <p className="text-red-500 text-xs my-1 text-center">{error}</p>}
                    
                    <button
                        onClick={handleParticipate}
                        disabled={isProcessing || lotteryStatus?.status !== 'OPEN' || !account || !isCorrectNetwork}
                        className="w-full text-white font-bold p-3 rounded-lg border-2 border-cyan-400 bg-black/50 hover:bg-cyan-400/20 disabled:bg-gray-700 disabled:border-gray-500 disabled:text-gray-400"
                    >
                        {lotteryStatus?.status === 'OPEN' && roomConfig ? `Participate (${roomConfig.ticketPrice} USDT)` : `Round is ${lotteryStatus?.status || 'Loading...'}`}
                    </button>

                    {/* Participants list */}
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold mb-2">Participants ({lotteryStatus?.players?.length || 0})</h2>
                        <div className="bg-black/20 rounded p-2 h-40 md:h-48 overflow-y-auto border border-gray-800">
                            {lotteryStatus?.players?.map((player, index) => <div key={index} className="text-sm truncate font-mono text-green-400">{player}</div>)}
                        </div>
                    </div>

                    {/* Past Winners list placeholder */}
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold mt-2 mb-2">🏆 Round 우승자</h2>
                        <div className="bg-black/20 rounded p-2 h-40 md:h-48 overflow-y-auto border border-gray-800">
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
                        <div className="flex justify-end gap-2 mt-2">
                            <button className="text-lg hover:text-cyan-400">◀</button>
                            <button className="text-lg hover:text-cyan-400">▶</button>
                        </div>
                    </div>
                </div>
            </main>

            <SideMenu onOpenMyPage={handleOpenMyPage} onOpenExplain={() => {
                setIsExplainModalVisible(true)
            }} />

            {isMyPageVisible && account && (
                <MyPageModal
                    onClose={() => setIsMyPageVisible(false)}
                    balance={balance}
                    onBalanceUpdate={setBalance}
                />
            )}

            {isExplainModalVisible && (
                <GameExplainModal 
                    onClose={() => setIsExplainModalVisible(false)}
                    onConnectWallet={connectWallet}
                />
            )}
        </div>
    );
} 