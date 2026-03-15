import { Chain } from '@models/chain.model';

export const CHAINS_MOCK: Chain[] = [
  {
    id: 'ethereum',
    name: 'Ethereum',
    chainId: 1,
    nativeCurrency: {
      symbol: 'ETH',
      decimals: 18,
    },
    type: 'evm',
  },
  {
    id: 'polygon',
    name: 'Polygon',
    chainId: 137,
    nativeCurrency: {
      symbol: 'MATIC',
      decimals: 18,
    },
    type: 'evm',
  },
  {
    id: 'bsc',
    name: 'BNB Smart Chain',
    chainId: 56,
    nativeCurrency: {
      symbol: 'BNB',
      decimals: 18,
    },
    type: 'evm',
  },
  {
    id: 'solana',
    name: 'Solana',
    nativeCurrency: {
      symbol: 'SOL',
      decimals: 9,
    },
    type: 'solana',
  },
];
