'use client';

import { useState, useEffect, useRef } from "react";
import { useAccount } from 'wagmi';
import Header from "@/components/Header";
import EntrySection from "@/components/EntrySection";
import WinnerInfoBar from "@/components/WinnerInfoBar";
import MyPageModal from "@/components/MyPageModal";
import GameExplainModal from "@/components/GameExplainModal";
import SideMenu from "@/components/SideMenu"; // SideMenu 임포트
import { API_BASE_URL } from "@/config";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useRouter } from 'next/navigation';


interface RoomStatus {
  id: string;
  participantCount: number;
}

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [isMyPageModalVisible, setIsMyPageModalVisible] = useState(false);
  const [isExplainModalVisible, setIsExplainModalVisible] = useState(false);
  const [roomStatuses, setRoomStatuses] = useState<RoomStatus[]>([]);
  const [mainDeadline, setMainDeadline] = useState<string | null>(null);
  const [mainGlobalRoundId, setMainGlobalRoundId] = useState<number | null>(null);
  
  const { address: account, isConnected } = useAccount();
  const { open: openConnectModal } = useWeb3Modal();
  const router = useRouter();
  const entrySectionRef = useRef<HTMLDivElement>(null);

  // Fetch user's off-chain balance
  const fetchBalance = async () => {
    if (!account) return;
    try {
      const response = await fetch(`${API_BASE_URL}/balance/${account}`);
      if (response.ok) {
        const data = await response.json();
        setBalance(data.balance);
      } else {
        setBalance(0);
      }
    } catch (error) {
      console.error("Failed to fetch balance:", error);
      setBalance(0);
    }
  };
  
  // Register user and fetch balance on account change
  useEffect(() => {
    const registerAndFetchBalance = async () => {
      if (account) {
        try {
          await fetch(`${API_BASE_URL}/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userAddress: account }),
          });
          fetchBalance();
        } catch (error) {
          console.error('Failed to register user:', error);
        }
      } else {
        setBalance(0);
      }
    };
    registerAndFetchBalance();
  }, [account]);

  // Fetch real-time room participant counts and main deadline
  useEffect(() => {
    const fetchMainData = async () => {
       try {
         const response = await fetch(`${API_BASE_URL}/lottery-status/1`);
         if (response.ok) {
           const data = await response.json();
           setMainGlobalRoundId(data.globalRoundId);
           if (data.status === 'OPEN') setMainDeadline(data.deadline);
           else setMainDeadline(null);
         }
       } catch (error) { console.error("Failed to fetch main data:", error); }
     };

    const fetchRoomStatuses = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/rooms/status`);
        const data = await response.json();
        setRoomStatuses(data);
      } catch (error) {
        console.error("Failed to fetch room statuses:", error);
      }
    };
    
    fetchMainData();
    fetchRoomStatuses();
    const mainInterval = setInterval(fetchMainData, 10000);
    const interval = setInterval(fetchRoomStatuses, 5000);
    return () => {
        clearInterval(mainInterval);
        clearInterval(interval);
    };
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
      participants: status ? status.participantCount.toLocaleString() : '...'
    };
  });
  
  const handleOpenMyPage = () => {
    if (isConnected) setIsMyPageModalVisible(true);
    else openConnectModal();
  };

  const handleConnectAndEnter = () => {
    if(isConnected) {
        entrySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
        openConnectModal();
    }
  }

  const handleCloseMyPage = () => setIsMyPageModalVisible(false);
  const handleOpenExplain = () => setIsExplainModalVisible(true);
  const handleCloseExplain = () => setIsExplainModalVisible(false);
  const handleEnterRoom = (roomId: string) => router.push(`/room/${roomId}`);


  return (
    <div className="bg-[#1a1a2e] min-h-screen text-white font-sans bg-[url('/bg.png')] bg-[length:100%_100%] bg-fixed">
      <Header
        balance={balance}
        onOpenMyPage={handleOpenMyPage}
      />
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
      
      <SideMenu onOpenMyPage={handleOpenMyPage} onOpenExplain={handleOpenExplain} />

      {isMyPageModalVisible && isConnected && (
        <MyPageModal
          onClose={handleCloseMyPage}
          balance={balance}
          onBalanceUpdate={setBalance}
        />
      )}
      
      {isExplainModalVisible && (
        <GameExplainModal
          onClose={handleCloseExplain}
          onConnectWallet={handleConnectAndEnter}
        />
      )}
    </div>
  );
}
