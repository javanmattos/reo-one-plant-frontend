# One Plant (Frontend) 🪴

## About The Project

### Background
One Plant is a Web3 project inspired by [Prometheans](https://prometheans.xyz/). It has a plant that survives for 15 minutes without being watered, and to water the plant a user has to mint an NFT within those 15 minutes. The NFTs minted are all different based on the time the user minted them. The aim of the game is to keep the plant alive for as long as possible. The game uses a pay-what-you-want pricing model which enables users to mint an NFT for free, but if they donate at least 0.02ETH, they will be put on a whitelist for future projects by Coin Plants.

### Project Folder Structure
This repository contains the frontend code for the website.
```
├───src
│   ├───abi (contains ABI JSON file)
│   ├───assets (contains images, SVGs, and fonts)
│   ├───components (contains React components)
│   ├───hooks (contains custom hooks)
│   ├───types (contains typescript types)
│   └───utils (contains helper code – especially Web3 interaction code)
├───index.html (based HTML file)
├───public (contains resources for base HTML file)
├───.eslintrc.json (contains config for ESLint)
├───vite.config.ts (contains configurations for vite build tools)
└───package.json (contains dependencies and npm calls)
```

### Tools and Technology Used
The following tools/technologies are used in this project:

- [<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" align="center">](https://www.figma.com/)
- [<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" align="center">](https://vitejs.dev/)
- [<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" align="center">](https://reactjs.org/)
- [<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" align="center">](https://www.typescriptlang.org/)
- [<img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white" align="center">](https://web3js.readthedocs.io/en/v1.8.2/)
- [<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" align="center">](https://sass-lang.com/)
- [<img src="https://img.shields.io/badge/Digital_Ocean-0080FF?style=for-the-badge&logo=DigitalOcean&logoColor=white" align="center">](https://www.digitalocean.com/)

## Setup
Follow these steps if you want to run this app locally:

1. Clone the repository into your local directory
    ```
    git clone https://github.com/Coin-Plants/one-plant-frontend.git
    ```
2. Install NPM packages
    ```
    npm install
    ```
3. Create `.env` file and create ENV variables (might work without Alchemy key and URL as it'll use their test API). `VITE_ENV` can either have the value `dev` or `prod` – `dev` will allow sepolia ETH to be used and `prod` will only use mainnet.
    ```
    VITE_ENV=dev
    VITE_ALCHEMY_KEY=
    VITE_ALCHEMY_URL=
    VITE_CONTRACT_ADDRESS=<the smart contract address>
    VITE_PUBLIC_ADDRESS=<your ETH wallet public address>
    VITE_PRIVATE_ADDRESS=<your ETH wallet private address>
    ```
4. Run the app
    ```
    npm run dev
    ```Contribution: 2017-08-27 20:00

Contribution: 2017-08-28 20:00

Contribution: 2017-08-28 20:01

Contribution: 2017-08-28 20:02

Contribution: 2017-08-30 20:00

Contribution: 2017-09-01 20:00

Contribution: 2017-09-01 20:01

Contribution: 2017-09-06 20:00

Contribution: 2017-09-06 20:01

Contribution: 2017-09-06 20:02

Contribution: 2017-09-12 20:00

Contribution: 2017-09-12 20:01

Contribution: 2017-09-12 20:02

Contribution: 2016-03-23 20:00

