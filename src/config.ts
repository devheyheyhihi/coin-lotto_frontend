export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

export const CHAIN_CONFIG = {
    id: process.env.NEXT_PUBLIC_CHAIN_ID || '0x61', // '0x38' for BNB Mainnet
    name: process.env.NEXT_PUBLIC_CHAIN_NAME || 'BNB Smart Chain Testnet',
    rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    currency: {
        name: 'Binance Coin',
        symbol: process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || 'tBNB',
        decimals: 18,
    },
    blockExplorerUrl: process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL || 'https://testnet.bscscan.com',
}; 