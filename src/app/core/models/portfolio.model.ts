export interface AssetBalance {
  symbol: string;
  rawBalance: string;
  decimals: number;
  usdPrice: number;
}

export interface TokenBalance extends AssetBalance {}

export interface PortfolioResponse {
  chain: string;
  address: string;
  nativeBalance: AssetBalance;
  tokens: TokenBalance[];
}
