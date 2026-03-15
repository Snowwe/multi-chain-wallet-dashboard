# Multi-Chain Wallet Dashboard

Angular application that allows users to explore wallet balances, token
holdings and recent transactions across multiple blockchains.

The dashboard supports **Ethereum (EVM)** and **Solana** wallets and
provides a clear overview of:

- native balance
- token portfolio
- recent transactions

This project was implemented as a **frontend test assignment**
demonstrating modern Angular architecture, strong typing and reactive
data handling.

------------------------------------------------------------------------

# Tech Stack

- Angular 21
- TypeScript (strict mode)
- RxJS
- Angular Signals
- Bootstrap 5
- Standalone Components
- Jest (unit testing)

------------------------------------------------------------------------

# Features

## Wallet dashboard

- Select blockchain network
- Enter wallet address
- Fetch portfolio data
- Display:
- native balance
- portfolio total value
- token balances
- recent transactions

------------------------------------------------------------------------

# Supported networks

- Ethereum (EVM)
- Solana

------------------------------------------------------------------------

# Wallet validation

Validation depends on the selected network.

## EVM wallets

Wallet must:

- start with `0x`
- contain **42 characters**

Example:

    0xdAC17F958D2ee523a2206206994597C13D831ec7

## Solana wallets

Wallet must be:

- base58 encoded
- length **32--44 characters**

Validation errors appear on **blur and submit**.

------------------------------------------------------------------------

# Portfolio overview

The dashboard displays:

## Native balance

Example:

    12.847231 ETH
    $44,892.35

------------------------------------------------------------------------

## Portfolio total

    $49,969.92
    Native asset + token holdings

------------------------------------------------------------------------

## Token balances

Example:

Symbol Balance USD Value
  -------- ------------ -----------
USDT 1250 \$1250
USDC 842.15 \$842.15
LINK 154.782145 \$2985.42

------------------------------------------------------------------------

# Recent transactions

Displays latest wallet activity.

Example:

  -----------------------------------------------------------------------------
Hash From To Amount Date
  --------------- --------------- --------------- -------------- --------------
0x8f1c...c3d4 0xdAC1...1ec7 0x742d...f44e 0.54 ETH Mar 9, 2024

  -----------------------------------------------------------------------------

------------------------------------------------------------------------

# Responsive design

The interface adapts to screen size.

Desktop: - full tables - detailed transaction view

Mobile: - optimized card layouts for tokens and transactions - avoids
horizontal scrolling

------------------------------------------------------------------------

# Mock mode

The application supports **mock mode** for local development and demo.

Enable mock mode in:

`src/environments/environment.ts`

    export const environment = {
      production: false,
      useMockApi: true
    };

When enabled, services return **local mock data instead of backend
requests**.

Mock data includes: - chains - portfolio - tokens - transactions

------------------------------------------------------------------------

# Backend note

The backend provided with the assignment was unstable during local
testing. To ensure the UI could still be demonstrated fully, **mock mode
was introduced**.

Switch back to the real backend by setting:

    useMockApi: false

------------------------------------------------------------------------

# Project structure

    src/app
    │
    ├── core
    │   ├── models
    │   ├── services
    │   ├── utils
    │   └── mocks
    │
    ├── features
    │   └── dashboard
    │        ├── components
    │        │    ├── wallet-form
    │        │    ├── portfolio-summary
    │        │    ├── token-table
    │        │    └── transaction-list
    │        │
    │        └── dashboard.page.ts

------------------------------------------------------------------------

# Technical decisions

Standalone components are used to simplify Angular architecture.

Signals manage: - loading state - error state - portfolio data -
transactions

RxJS operators used: - forkJoin - switchMap - shareReplay - finalize -
takeUntilDestroyed

Example:

    forkJoin({
      portfolio,
      transactions
    })

------------------------------------------------------------------------

# Unit tests

Example tested utility:

    formatTokenBalance

Run tests:

    npm run test:unit

------------------------------------------------------------------------

# Run the project

Install dependencies:

    npm install

Start development server:

    npm start

Open:

    http://localhost:4200

------------------------------------------------------------------------

# Scripts

Command Description
  ------------------- --------------------------
npm start start development server
npm run build build production version
npm run lint run ESLint
npm run format run Prettier
npm run test:unit run unit tests

------------------------------------------------------------------------

# Reviewer notes

1. Run the project with mock mode enabled.
2. No API keys are required.
3. Mock mode demonstrates the full UI flow even if backend APIs are
   unavailable.

------------------------------------------------------------------------

# Possible improvements

- skeleton loaders
- retry button for failed requests
- token sorting
- transaction pagination
- blockchain explorer links
- additional networks

------------------------------------------------------------------------

# Final notes

The purpose of this project is to demonstrate:

- Angular architecture
- TypeScript best practices
- RxJS usage
- responsive UI
- component-based structure
- handling unstable backend APIs using mock mode

The application can easily switch between **mock data and real backend
APIs** without changing the UI layer.
