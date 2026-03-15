import { TransactionItem } from '@models/transaction.model';

export const ETHEREUM_TRANSACTIONS_MOCK: TransactionItem[] = [
  {
    hash: '0x8f1c5a74b6d4e74f3e4ef0c1f528a71f7d9d7c1f85a8c6b4d2e9a1f4a1b2c3d4',
    from: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    to: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    value: '0.54',
    symbol: 'ETH',
    timestamp: 1710000000,
    status: 'success',
  },
  {
    hash: '0x7a2d5c8f1c5a74b6d4e74f3e4ef0c1f528a71f7d9d7c1f85a8c6b4d2e9a1f4a1',
    from: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    to: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    value: '1.20',
    symbol: 'ETH',
    timestamp: 1710086400,
    status: 'success',
  },
  {
    hash: '0x6b4d2e9a1f4a1b2c3d48f1c5a74b6d4e74f3e4ef0c1f528a71f7d9d7c1f85a8c',
    from: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    to: '0x66f820a414680B5bcda5eECA5dea238543F42054',
    value: '0.08',
    symbol: 'ETH',
    timestamp: 1710172800,
    status: 'success',
  },
];

export const SOLANA_TRANSACTIONS_MOCK: TransactionItem[] = [
  {
    hash: '5Zk4i8r2mGvU3yJ8dF9cQ7wL2nP6sT1xR4bN9uK3mH7y',
    from: '7EcDhSYGxXyscszYEp35KHN8vvw3svAuLKTzXwCFLtV',
    to: '9xQeWvG816bUx9EPjHmaT23yvVMiijS6vY7KxY9S1bJw',
    value: '3.15',
    symbol: 'SOL',
    timestamp: 1710259200,
    status: 'success',
  },
  {
    hash: '4Pn8sT1xR4bN9uK3mH7y5Zk4i8r2mGvU3yJ8dF9cQ7wL',
    from: '9xQeWvG816bUx9EPjHmaT23yvVMiijS6vY7KxY9S1bJw',
    to: '7EcDhSYGxXyscszYEp35KHN8vvw3svAuLKTzXwCFLtV',
    value: '1.82',
    symbol: 'SOL',
    timestamp: 1710345600,
    status: 'success',
  },
];
