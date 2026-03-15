import { PortfolioResponse } from '@models/portfolio.model';

export const ETHEREUM_PORTFOLIO_MOCK: PortfolioResponse = {
  address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
  chain: 'ethereum',
  nativeBalance: {
    symbol: 'ETH',
    balance: '12.847231',
    rawBalance: '12847231000000000000',
    decimals: 18,
    usdValue: 44892.35,
  },
  tokens: [
    {
      symbol: 'USDT',
      balance: '1250.00',
      rawBalance: '1250000000',
      decimals: 6,
      usdValue: 1250,
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    },
    {
      symbol: 'USDC',
      balance: '842.15',
      rawBalance: '842150000',
      decimals: 6,
      usdValue: 842.15,
      address: '0xA0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    {
      symbol: 'LINK',
      balance: '154.782145',
      rawBalance: '154782145000000000000',
      decimals: 18,
      usdValue: 2985.42,
      address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
    },
  ],
  totalUsdValue: 49969.92,
};

export const SOLANA_PORTFOLIO_MOCK: PortfolioResponse = {
  address: '7EcDhSYGxXyscszYEp35KHN8vvw3svAuLKTzXwCFLtV',
  chain: 'solana',
  nativeBalance: {
    symbol: 'SOL',
    balance: '84.254781',
    rawBalance: '84254781000',
    decimals: 9,
    usdValue: 15009.37,
  },
  tokens: [
    {
      symbol: 'USDC',
      balance: '3250.40',
      rawBalance: '3250400000',
      decimals: 6,
      usdValue: 3250.4,
      address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    },
    {
      symbol: 'JUP',
      balance: '1200.00',
      rawBalance: '1200000000',
      decimals: 6,
      usdValue: 1080,
      address: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
    },
  ],
  totalUsdValue: 19339.77,
};
