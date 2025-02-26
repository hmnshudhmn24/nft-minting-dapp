# NFT Minting Dapp

This is a simple NFT Minting Dapp that allows users to create and sell NFTs using an ERC-721 smart contract.

## Features
- Deploys an ERC-721 NFT contract
- Mints NFTs to user wallets
- Uses MetaMask for transactions

## Setup Instructions

### 1. Install Dependencies
```sh
npm install
```

### 2. Compile & Deploy the Smart Contract
```sh
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
```

### 3. Start React Frontend
```sh
npm start
```

## Requirements
- Node.js & npm
- Hardhat
- MetaMask Wallet
- React.js

## License
MIT
