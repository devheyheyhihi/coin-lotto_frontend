'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import WinnerInfoBar from '@/components/WinnerInfoBar';
import EntrySection from '@/components/EntrySection';
import SideMenu from '@/components/SideMenu';
import MyPageModal from '@/components/MyPageModal';
import GameExplainModal from '@/components/GameExplainModal';
import { API_BASE_URL } from '@/config';

interface RoomStatus {
    id: string;
    name: string;
    participantCount: number;
}

// --- Main Page Component ---
export default function MainPage() {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState(0);
  const [isMyPageVisible, setIsMyPageVisible] = useState(false);
  const [isExplainModalVisible, setIsExplainModalVisible] = useState(false);
  const [mainDeadline, setMainDeadline] = useState<string | null>(null);
  const [mainGlobalRoundId, setMainGlobalRoundId] = useState<number | null>(null);
  const [roomStatuses, setRoomStatuses] = useState<RoomStatus[]>([]);
  const router = useRouter();
  const entrySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch the deadline and round ID for a default room to show a general countdown.
    const fetchMainData = async () => {
      try {
        // We'll use room '1' as the reference for the main page timer.
        const response = await fetch(`${API_BASE_URL}/lottery-status/1`);
        if (response.ok) {
          const data = await response.json();
          setMainGlobalRoundId(data.globalRoundId);
          if (data.status === 'OPEN') {
            setMainDeadline(data.deadline);
          } else {
            setMainDeadline(null);
          }
        }
      } catch (error) {
        console.error("Failed to fetch main data:", error);
      }
    };

    fetchMainData();
    // Refresh timer data periodically
    const interval = setInterval(fetchMainData, 10000); // every 10 seconds

    const fetchRoomStatuses = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/rooms/status`);
            if (response.ok) {
                const data = await response.json();
                setRoomStatuses(data);
            }
        } catch (error) {
            console.error("Failed to fetch room statuses:", error);
        }
    };

    fetchRoomStatuses();
    const statusInterval = setInterval(fetchRoomStatuses, 5000); // 5초마다 참여자 수 갱신

    return () => {
        clearInterval(interval);
        clearInterval(statusInterval);
    };
  }, []);

  // Fetch balance whenever account changes
  useEffect(() => {
    if (account) {
      const fetchBalance = async () => {
        try {
          console.log("account:", account);
          const response = await fetch(`${API_BASE_URL}/balance/${account}`);
          if (response.ok) {
            const data = await response.json();
            console.log("response.ok:", data);
            setBalance(data.balance);
          } else {
            setBalance(0);
          }
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

  const handleEnterRoom = (roomId: string) => {
    router.push(`/room/${roomId}`);
  };

  const connectWallet = async () => {
    // If account already exists, scroll to entry section
    if (account) {
      entrySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // If no account, proceed with connection logic
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }) as string[];
        setAccount(accounts[0]);
      } catch (err) {
        console.error('Failed to connect wallet.', err);
      }
    } else {
      alert('Please install MetaMask.');
    }
  };

  const handleOpenMyPage = () => {
    if (account) {
      setIsMyPageVisible(true);
    } else {
      alert('Please connect your wallet first.');
    }
  };

  useEffect(() => {
    const handleAccountsChanged = (accounts: string[]) => {
      setAccount(accounts.length > 0 ? accounts[0] : null);
    };

    const ethereum = window.ethereum;
    if (ethereum) {
      ethereum.on('accountsChanged', handleAccountsChanged);
      // Check for existing accounts on initial load
      (async () => {
        const accounts = await ethereum.request({ method: 'eth_accounts' }) as string[];
        handleAccountsChanged(accounts);
      })();

      return () => {
        // Clean up the event listener
        if (ethereum.removeListener) {
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }
  }, []);

  const participationOptions = [
    { id: '1', amount: 1 },
    { id: '2', amount: 10 },
    { id: '3', amount: 50 },
    { id: '4', amount: 100 },
  ].map(option => {
    const status = roomStatuses.find(s => s.id === option.id);
    return {
        ...option,
        participants: status ? status.participantCount.toLocaleString() : 'Loading...'
    };
  });

  return (
    <div className="bg-[#1a1a2e] min-h-screen text-white font-sans bg-[url('/bg.png')] bg-[length:100%_100%] bg-fixed">
      <Header account={account} balance={balance} connectWallet={connectWallet} />

      <main>
        <WinnerInfoBar />
        <div>
          <EntrySection 
            ref={entrySectionRef} 
            participationOptions={participationOptions} 
            handleEnterRoom={handleEnterRoom}
            deadline={mainDeadline} 
            globalRoundId={mainGlobalRoundId}
          />
        </div>
      </main>

      <SideMenu onOpenMyPage={handleOpenMyPage} onOpenExplain={() => setIsExplainModalVisible(true)} />

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
        />
      )}
    </div>
  );
}
