'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import { useAuth } from '@/contexts/AuthContext'; // useAuth 훅을 가져옵니다.
import Header from "@/components/Header";
import EntrySection from "@/components/EntrySection";
import WinnerInfoBar from "@/components/WinnerInfoBar";
import MyPageModal from "@/components/MyPageModal";
import GameExplainModal from "@/components/GameExplainModal";
import SideMenu from "@/components/SideMenu";
import LoginModal from "@/components/LoginModal"; // LoginModal 임포트
import { API_BASE_URL } from "@/config";
import { useRouter } from 'next/navigation';

interface RoomStatus {
  id: string;
  participantCount: number;
  }

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [isMyPageModalVisible, setIsMyPageModalVisible] = useState(false);
  const [isExplainModalVisible, setIsExplainModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false); // 로그인 모달 상태 추가
  const [roomStatuses, setRoomStatuses] = useState<RoomStatus[]>([]);
  const [mainDeadline, setMainDeadline] = useState<string | null>(null);
  const [mainGlobalRoundId, setMainGlobalRoundId] = useState<number | null>(null);
  
  const { isLoggedIn, user } = useAuth(); // AuthContext에서 로그인 상태와 사용자 정보를 가져옵니다.
  const router = useRouter();
  const entrySectionRef = useRef<HTMLDivElement>(null);

  // Fetch user's off-chain balance
  const fetchBalance = useCallback(async () => {
    // 로그인한 유저의 지갑 주소가 있을 때만 잔액을 가져옵니다.
    if (!user?.walletAddress) return;
    try {
      const response = await fetch(`${API_BASE_URL}/balance/${user.walletAddress}`);
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
  }, [user?.walletAddress]);
  
  // 로그인 상태 또는 사용자 정보가 변경될 때 잔액을 다시 가져옵니다.
  useEffect(() => {
    if (isLoggedIn && user) {
      fetchBalance();
    } else {
      setBalance(0);
    }
  }, [isLoggedIn, user, fetchBalance]);

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
    // 로그인 상태일 때만 마이페이지를 엽니다.
    if (isLoggedIn) {
      setIsMyPageModalVisible(true);
    } else {
      // 로그인 상태가 아니라면 로그인 모달을 엽니다.
      setIsLoginModalVisible(true);
    }
  };

  const handleEnterGame = () => {
    entrySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleCloseMyPage = () => setIsMyPageModalVisible(false);
  const handleOpenExplain = () => setIsExplainModalVisible(true);
  const handleCloseExplain = () => setIsExplainModalVisible(false);
  const handleEnterRoom = (roomId: string) => {
    if (!isLoggedIn) {
        // 이 부분은 향후 로그인 모달을 직접 띄우는 로직으로 개선할 수 있습니다.
        alert("로그인이 필요합니다.");
        return;
    }
    router.push(`/room/${roomId}`);
  }


  return (
    <div className="bg-[#1a1a2e] min-h-screen pb-20 text-white font-sans bg-[url('/bg.png')] bg-[length:100%_100%] bg-fixed">
      {/* Header는 이제 AuthContext를 통해 자체적으로 상태를 관리하므로 props가 필요 없습니다. */}
      <Header
        balance={balance} // balance는 MyPageModal 등 다른 곳에서도 쓰일 수 있어 일단 유지
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

      <SideMenu 
        onOpenMyPage={handleOpenMyPage} 
        onOpenExplain={handleOpenExplain}
        deadline={mainDeadline}
      />

      {isMyPageModalVisible && isLoggedIn && (
        <MyPageModal 
          onClose={handleCloseMyPage}
        />
      )}

      {isExplainModalVisible && (
        <GameExplainModal 
          onClose={handleCloseExplain}
          // onConnectWallet 대신 게임 참여 섹션으로 이동하는 함수를 전달합니다.
          onEnterGame={handleEnterGame}
        />
      )}

      {isLoginModalVisible && (
        <LoginModal 
          onClose={() => setIsLoginModalVisible(false)}
          // Header가 회원가입 모달 전환을 처리하므로 onSwitchToSignup은 전달하지 않습니다.
        />
      )}
    </div>
  );
}
