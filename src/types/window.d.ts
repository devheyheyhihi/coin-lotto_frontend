interface EthereumProvider {
  isMetaMask?: boolean;
  request: <T>(args: { method: string; params?: unknown[] }) => Promise<T>;
  on(event: 'accountsChanged', handler: (accounts: string[]) => void): void;
  on(event: 'chainChanged', handler: (chainId: string) => void): void;
  on(event: string, handler: (...args: unknown[]) => void): void; // Fallback
  removeListener(event: 'accountsChanged', handler: (accounts: string[]) => void): void;
  removeListener(event: 'chainChanged', handler: (chainId: string) => void): void;
  removeListener(event: string, handler: (...args: unknown[]) => void): void; // Fallback
  chainId: string;
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

export {}; 