'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ethers } from 'ethers';
import { useParams, useRouter } from 'next/navigation';
import lotteryABIFile from '../../../abis/Lottery.json';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import MyPageModal from '@/components/MyPageModal';
import Timer from '@/components/Timer';
import GameExplainModal from '@/components/GameExplainModal';

// --- Constants ---
const BNB_CHAIN_ID = '0x61';
const USDT_CONTRACT_ADDRESS = '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd';
const API_BASE_URL = 'http://localhost:3001';
const usdtABI = [
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function allowance(address owner, address spender) public view returns (uint256)",
    "function balanceOf(address account) public view returns (uint256)",
    "function transfer(address to, uint256 amount) public returns (bool)",
    "function transferFrom(address from, address to, uint256 amount) public returns (bool)",
    "function name() public view returns (string)",
    "function symbol() public view returns (string)",
    "function decimals() public view returns (uint8)"
];
const lotteryABI = lotteryABIFile.abi;

// --- Type Definitions ---
declare global { interface Window { ethereum?: any; }}

interface LogEntry {
    id: number;
    type: 'JOIN' | 'SYSTEM' | 'WINNER' | 'ERROR' | 'INFO' | 'PROCESS';
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
    const router = useRouter();
    const roomId = params.roomId as string;

    const [account, setAccount] = useState<string | null>(null);
    const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [lotteryStatus, setLotteryStatus] = useState<LotteryRound | null>(null);
    const [roomConfig, setRoomConfig] = useState<RoomConfig | null>(null);
    const [displayedLogs, setDisplayedLogs] = useState<LogEntry[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isAnimationRunning, setIsAnimationRunning] = useState(false);
    const [hasAnimationRun, setHasAnimationRun] = useState(false);
    const [isMyPageVisible, setIsMyPageVisible] = useState(false);
    const [isExplainModalVisible, setIsExplainModalVisible] = useState(false);
    const [pastWinners, setPastWinners] = useState<{ global_round_id: number; winner: string }[]>([]);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        console.log("isExplainModalVisible: ",isExplainModalVisible);
    },[isExplainModalVisible])

    const prevRoundIdRef = useRef<number | null>(null);
    const logContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (lotteryStatus && lotteryStatus.globalRoundId !== prevRoundIdRef.current) {
            setHasAnimationRun(false);
            prevRoundIdRef.current = lotteryStatus.globalRoundId;
        }
    }, [lotteryStatus]);

    useEffect(() => {
        if (!lotteryStatus?.deadline || lotteryStatus.status !== 'OPEN') {
            return;
        }

        const interval = setInterval(() => {
            const now = new Date();
            const deadlineTime = new Date(lotteryStatus.deadline);
            const diff = deadlineTime.getTime() - now.getTime();

            if (diff <= 0) {
                // Optionally trigger a status refresh
                fetchStatus();
                return;
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [lotteryStatus]);

    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [displayedLogs]);

    const addFrontendLog = useCallback((type: LogEntry['type'], message: string) => {
        const newLog: LogEntry = { id: Math.random() * -100000, type, message, timestamp: new Date().toISOString() };
        setDisplayedLogs(prev => [...prev, newLog]);
    }, []);

    const fetchStatus = useCallback(async () => {
        if (isAnimationRunning || !roomId) return;
        try {
            const response = await fetch(`${API_BASE_URL}/lottery-status/${roomId}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch lottery status.');
            }
            const data: LotteryRound = await response.json();

            setLotteryStatus(prevStatus => {
                if (prevStatus && data.globalRoundId !== prevStatus.globalRoundId) {
                    setDisplayedLogs(data.logs);
                } else {
                    setDisplayedLogs(prevLogs => {
                        const existingIds = new Set(prevLogs.map(l => l.id));
                        let newLogs = data.logs.filter(log => !existingIds.has(log.id));
                        if (data.status === 'DRAWING' || isAnimationRunning) {
                           newLogs = newLogs.filter(log => log.type !== 'WINNER');
                        }
                        return [...prevLogs, ...newLogs].sort((a,b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
                    });
                }
                return data;
            });

            if (!roomConfig) {
                setRoomConfig({
                    name: data.name,
                    ticketPrice: data.ticketPrice,
                    contractAddress: data.contractAddress,
                });
            }

        } catch (error: any) {
            setError(error.message);
        }
    }, [isAnimationRunning, roomId, roomConfig, addFrontendLog]);

    const checkNetwork = useCallback(async () => {
        if (window.ethereum) {
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            setIsCorrectNetwork(chainId === BNB_CHAIN_ID);
        }
    }, []);

    useEffect(() => {
        const handleAccountsChanged = (accounts: string[]) => {
            const newAccount = accounts.length > 0 ? accounts[0] : null;
            setAccount(newAccount);
        };
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', checkNetwork);
            (async () => {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                handleAccountsChanged(accounts);
                await checkNetwork();
            })();
            return () => {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                window.ethereum.removeListener('chainChanged', checkNetwork);
            };
        }
    }, [checkNetwork]);
    
    useEffect(() => {
        if (lotteryStatus?.status === 'DRAWING' && !isAnimationRunning && !hasAnimationRun) {
            setIsAnimationRunning(true);
            setHasAnimationRun(true);
            const runDrawingSequence = async () => {
                addFrontendLog('SYSTEM', 'Draw starting in 3...');
                await new Promise(res => setTimeout(res, 1000));
                addFrontendLog('SYSTEM', 'Draw starting in 2...');
                await new Promise(res => setTimeout(res, 1000));
                addFrontendLog('SYSTEM', 'Draw starting in 1...');
                await new Promise(res => setTimeout(res, 1000));
                
                const players = lotteryStatus.players_snapshot ? JSON.parse(lotteryStatus.players_snapshot) : [];
                if (players.length > 0) {
                    const animationDuration = 5000;
                    const startTime = Date.now();
                    const animationInterval = setInterval(() => {
                         if (Date.now() - startTime > animationDuration) {
                            clearInterval(animationInterval);
                            const closeRound = async () => {
                                addFrontendLog('SYSTEM', 'Verification complete. Announcing winner...');
                                const winnerLog = lotteryStatus.logs.find(l => l.type === 'WINNER');
                                if (winnerLog) setDisplayedLogs(prev => [...prev, winnerLog]);
                                else if (lotteryStatus.winner) addFrontendLog('WINNER', `🎉 Congratulations to the winner: ${lotteryStatus.winner}`);
                                await new Promise(res => setTimeout(res, 3000));
                                addFrontendLog('SYSTEM', 'This round is now closed. A new round will begin shortly.');
                                for (let i = 5; i > 0; i--) {
                                    addFrontendLog('SYSTEM', `Clearing board in ${i}...`);
                                    await new Promise(res => setTimeout(res, 1000));
                                }
                                setDisplayedLogs([]);
                                setIsAnimationRunning(false);
                            };
                            closeRound();
                        } else {
                            const randomIndex = Math.floor(Math.random() * players.length);
                            addFrontendLog('PROCESS', `Verifying: ${players[randomIndex]}`);
                        }
                    }, 10);
                } else {
                     addFrontendLog('ERROR', 'No participants in the draw.');
                     setIsAnimationRunning(false);
                }
            };
            runDrawingSequence();
        }
    }, [lotteryStatus, isAnimationRunning, hasAnimationRun, addFrontendLog]);

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
                // Optionally set an error state here to show in the UI
            }
        };
        fetchWinners();
    }, [roomId]);

    useEffect(() => {
        fetchStatus();
        const interval = setInterval(() => {
            if (!isAnimationRunning) fetchStatus();
        }, 3000);
        return () => clearInterval(interval);
    }, [fetchStatus, isAnimationRunning]);

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
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
        } catch (error) { setError('Failed to connect wallet.'); }
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

        } catch (error: any) {
            setError(`Participation failed: ${error.message}`);
        } finally {
            setIsProcessing(false);
        }
    };
    
    return (
        <div className="bg-[#1a1a2e] min-h-screen text-white font-sans bg-[url('/bg.png')] bg-[length:100%_100%] bg-fixed">
            <Header account={account} balance={balance} connectWallet={connectWallet} />

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
                    account={account}
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