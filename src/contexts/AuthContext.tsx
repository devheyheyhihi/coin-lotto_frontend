'use client';

import React, { createContext, useReducer, useContext, useEffect, ReactNode } from 'react';
import {jwtDecode} from 'jwt-decode'; // jwt-decode 라이브러리에서 jwtDecode를 올바르게 import

interface User {
  id: number;
  username: string;
  nickname: string;
  walletAddress: string;
  status: 'PENDING' | 'ACTIVE';
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
  isLoading: boolean;
}

type AuthAction =
  | { type: 'LOGIN_SUCCESS'; payload: { token: string; user: User } }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'UPDATE_USER_STATUS'; payload: 'PENDING' | 'ACTIVE' };

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null,
  isLoading: true,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'UPDATE_USER_STATUS':
      if (state.user) {
        return {
          ...state,
          user: { ...state.user, status: action.payload },
        };
      }
      return state;
    default:
      return state;
  }
};

interface AuthContextType extends AuthState {
  login: (token: string, user: User) => void;
  logout: () => void;
  updateUserStatus: (status: 'PENDING' | 'ACTIVE') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: { exp: number, iat: number, id: number, username: string, wallet_address: string } = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime) {
          // 토큰이 유효하면, 사용자 정보를 로컬 스토리지에서 가져오거나 API를 호출해야 합니다.
          // 여기서는 로컬 스토리지에 저장된 user 객체를 사용합니다.
          const storedUser = localStorage.getItem('user');
          if(storedUser) {
            const user: User = JSON.parse(storedUser);
            dispatch({ type: 'LOGIN_SUCCESS', payload: { token, user } });
          } else {
            // 사용자는 있지만 정보가 없는 경우, 로그아웃 처리
             logout();
          }
        } else {
          // 토큰이 만료되었다면 로그아웃 처리
          logout();
        }
      } catch (error) {
        console.error("Invalid token:", error);
        logout(); // 잘못된 토큰이면 로그아웃
      }
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const login = (token: string, user: User) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({ type: 'LOGIN_SUCCESS', payload: { token, user } });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  const updateUserStatus = (status: 'PENDING' | 'ACTIVE') => {
     dispatch({ type: 'UPDATE_USER_STATUS', payload: status });
     // 로컬 스토리지의 유저 정보도 업데이트
     const storedUser = localStorage.getItem('user');
     if(storedUser) {
       const user: User = JSON.parse(storedUser);
       user.status = status;
       localStorage.setItem('user', JSON.stringify(user));
     }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, updateUserStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 