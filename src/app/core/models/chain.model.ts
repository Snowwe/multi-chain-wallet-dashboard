export type ChainType = 'evm' | 'solana';

export interface Chain {
  id: string;
  name: string;
  nativeSymbol: string;
  type: ChainType;
}
