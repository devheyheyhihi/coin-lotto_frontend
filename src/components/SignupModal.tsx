'use client';

import React, { useState } from 'react';
import { API_BASE_URL } from '@/config';

interface SignupModalProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function SignupModal({ onClose, onSwitchToLogin }: SignupModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          nickname,
          wallet_address: walletAddress,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('회원가입에 성공했습니다! 로그인 후 서비스를 이용해주세요.');
        onSwitchToLogin(); // 성공 시 로그인 모달로 전환
      } else {
        setError(data.message || '회원가입에 실패했습니다. 입력 정보를 확인해주세요.');
      }
    } catch (err) {
      setError('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#00000080] flex justify-center items-center z-50">
      <div className="bg-gradient-to-b from-[#08369A] to-[#000000] rounded-lg p-8 w-full max-w-md m-4 text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">회원가입</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl" disabled={isLoading}>&times;</button>
        </div>
        <form onSubmit={handleSignup}>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="signup-username" className="block text-sm font-medium text-gray-300 mb-2">아이디</label>
            <input
              type="text"
              id="signup-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="사용하실 아이디를 입력하세요"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="signup-password"className="block text-sm font-medium text-gray-300 mb-2">비밀번호</label>
            <input
              type="password"
              id="signup-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="사용하실 비밀번호를 입력하세요"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nickname" className="block text-sm font-medium text-gray-300 mb-2">닉네임</label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="사용하실 닉네임을 입력하세요"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="wallet-address" className="block text-sm font-medium text-gray-300 mb-2">지갑 주소</label>
            <input
              type="text"
              id="wallet-address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="개인 지갑 주소를 입력하세요"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#005CD4] hover:bg-[#2F89FF] text-white font-bold py-3 rounded-md transition duration-300 disabled:bg-gray-500"
            disabled={isLoading}
          >
            {isLoading ? '가입 처리 중...' : '가입하기'}
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            이미 계정이 있으신가요?{' '}
            <button onClick={onSwitchToLogin} className="font-semibold text-yellow-400 hover:text-yellow-300 underline" disabled={isLoading}>
              로그인
            </button>
          </p>
        </div>
      </div>
    </div>
  );
} 