'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { API_BASE_URL } from '@/config';

interface LoginModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSwitchToSignup?: () => void;
  onSignupClick?: () => void; // for room page
  onLoginSuccess?: () => void; // for roulette modal
}

export default function LoginModal({ isOpen = true, onClose, onSwitchToSignup, onSignupClick, onLoginSuccess }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // AuthContext의 login 함수를 호출하여 상태를 업데이트하고 토큰을 저장
        login(data.token, data.user);
        onClose(); // 로그인 성공 시 모달 닫기
        
        // 룰렛 모달에서 호출된 경우 추가 콜백 실행
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        setError(data.message || '로그인에 실패했습니다. 아이디 또는 비밀번호를 확인해주세요.');
      }
    } catch (err) {
      setError('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000080] flex justify-center items-center z-50">
      <div className="bg-gradient-to-b from-[#08369A] to-[#000000] rounded-lg p-8 w-full max-w-md m-4 text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">로그인</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl" disabled={isLoading}>&times;</button>
        </div>
        <form onSubmit={handleLogin}>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">아이디</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="아이디를 입력하세요"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#005CD4] hover:bg-[#2F89FF] text-white font-bold py-3 rounded-md transition duration-300 disabled:bg-gray-500"
            disabled={isLoading}
          >
            {isLoading ? '로그인 중...' : '로그인'}
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            계정이 없으신가요?{' '}
            <button 
              onClick={onSwitchToSignup || onSignupClick} 
              className="font-semibold text-yellow-400 hover:text-yellow-300 underline" 
              disabled={isLoading}
            >
              회원가입
            </button>
          </p>
        </div>
      </div>
    </div>
  );
} 