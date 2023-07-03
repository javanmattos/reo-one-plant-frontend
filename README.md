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

Contribution: 2016-03-23 20:01

Contribution: 2016-03-23 20:02

Contribution: 2016-03-27 20:00

Contribution: 2016-03-27 20:01

Contribution: 2016-03-27 20:02

Contribution: 2016-03-31 20:00

Contribution: 2016-03-31 20:01

Contribution: 2016-03-31 20:02

Contribution: 2016-04-04 20:00

Contribution: 2016-04-04 20:01

Contribution: 2016-04-04 20:02

Contribution: 2016-04-05 20:00

Contribution: 2016-04-10 20:00

Contribution: 2016-04-10 20:01

Contribution: 2016-04-11 20:00

Contribution: 2016-04-16 20:00

Contribution: 2016-04-16 20:01

Contribution: 2016-04-24 20:00

Contribution: 2016-04-24 20:01

Contribution: 2016-04-24 20:02

Contribution: 2016-04-28 20:00

Contribution: 2016-04-28 20:01

Contribution: 2016-05-02 20:00

Contribution: 2016-05-02 20:01

Contribution: 2016-05-04 20:00

Contribution: 2016-05-05 20:00

Contribution: 2016-05-06 20:00

Contribution: 2016-05-06 20:01

Contribution: 2016-05-06 20:02

Contribution: 2016-05-08 20:00

Contribution: 2016-05-10 20:00

Contribution: 2016-05-10 20:01

Contribution: 2016-05-11 20:00

Contribution: 2016-05-11 20:01

Contribution: 2016-05-12 20:00

Contribution: 2016-05-22 20:00

Contribution: 2016-05-22 20:01

Contribution: 2016-05-27 20:00

Contribution: 2016-05-30 20:00

Contribution: 2016-05-30 20:01

Contribution: 2016-05-30 20:02

Contribution: 2016-06-01 20:00

Contribution: 2016-06-01 20:01

Contribution: 2016-06-12 20:00

Contribution: 2016-06-13 20:00

Contribution: 2016-06-13 20:01

Contribution: 2016-06-13 20:02

Contribution: 2016-06-15 20:00

Contribution: 2016-06-15 20:01

Contribution: 2016-06-18 20:00

Contribution: 2016-06-18 20:01

Contribution: 2016-06-26 20:00

Contribution: 2016-06-29 20:00

Contribution: 2016-06-29 20:01

Contribution: 2016-06-29 20:02

Contribution: 2016-07-02 20:00

Contribution: 2016-07-08 20:00

Contribution: 2016-07-08 20:01

Contribution: 2016-07-20 20:00

Contribution: 2016-07-22 20:00

Contribution: 2016-07-27 20:00

Contribution: 2016-08-01 20:00

Contribution: 2016-01-15 20:00

Contribution: 2016-01-15 20:01

Contribution: 2016-02-06 20:00

Contribution: 2016-02-08 20:00

Contribution: 2016-02-09 20:00

Contribution: 2016-02-28 20:00

Contribution: 2016-02-28 20:01

Contribution: 2016-03-02 20:00

Contribution: 2016-03-02 20:01

Contribution: 2016-03-02 20:02

Contribution: 2023-02-01 20:00

Contribution: 2023-02-01 20:01

Contribution: 2023-02-01 20:02

Contribution: 2023-02-02 20:00

Contribution: 2023-02-04 20:00

Contribution: 2023-02-04 20:01

Contribution: 2023-02-10 20:00

Contribution: 2023-02-10 20:01

Contribution: 2023-02-10 20:02

Contribution: 2023-02-14 20:00

Contribution: 2023-02-18 20:00

Contribution: 2023-02-22 20:00

Contribution: 2023-02-23 20:00

Contribution: 2023-02-26 20:00

Contribution: 2023-02-26 20:01

Contribution: 2023-03-04 20:00

Contribution: 2023-03-04 20:01

Contribution: 2023-03-04 20:02

Contribution: 2023-03-08 20:00

Contribution: 2023-03-08 20:01

Contribution: 2023-03-09 20:00

Contribution: 2023-03-09 20:01

Contribution: 2023-03-09 20:02

Contribution: 2023-03-13 20:00

Contribution: 2023-03-15 20:00

Contribution: 2023-03-15 20:01

Contribution: 2023-03-19 20:00

Contribution: 2023-03-23 20:00

Contribution: 2023-03-24 20:00

Contribution: 2023-03-24 20:01

Contribution: 2023-03-27 20:00

Contribution: 2023-03-28 20:00

Contribution: 2023-03-28 20:01

Contribution: 2023-03-31 20:00

Contribution: 2023-03-31 20:01

Contribution: 2023-04-01 20:00

Contribution: 2023-04-01 20:01

Contribution: 2023-04-01 20:02

Contribution: 2023-04-02 20:00

Contribution: 2023-04-02 20:01

Contribution: 2023-04-02 20:02

Contribution: 2023-04-03 20:00

Contribution: 2023-04-03 20:01

Contribution: 2023-04-03 20:02

Contribution: 2023-04-05 20:00

Contribution: 2023-04-05 20:01

Contribution: 2023-04-08 20:00

Contribution: 2023-04-08 20:01

Contribution: 2023-04-10 20:00

Contribution: 2023-04-10 20:01

Contribution: 2023-04-10 20:02

Contribution: 2023-04-17 20:00

Contribution: 2023-04-21 20:00

Contribution: 2023-04-21 20:01

Contribution: 2023-04-21 20:02

Contribution: 2023-04-23 20:00

Contribution: 2023-04-23 20:01

Contribution: 2023-04-23 20:02

Contribution: 2023-04-24 20:00

Contribution: 2023-04-27 20:00

Contribution: 2023-04-29 20:00

Contribution: 2023-05-06 20:00

Contribution: 2023-05-06 20:01

Contribution: 2023-05-07 20:00

Contribution: 2023-05-07 20:01

Contribution: 2023-05-08 20:00

Contribution: 2023-05-08 20:01

Contribution: 2023-05-08 20:02

Contribution: 2023-05-09 20:00

Contribution: 2023-05-10 20:00

Contribution: 2023-05-15 20:00

Contribution: 2023-05-15 20:01

Contribution: 2023-05-16 20:00

Contribution: 2023-05-16 20:01

Contribution: 2023-05-26 20:00

Contribution: 2023-05-27 20:00

Contribution: 2023-05-27 20:01

Contribution: 2023-05-30 20:00

Contribution: 2023-05-31 20:00

Contribution: 2023-06-02 20:00

Contribution: 2023-06-02 20:01

Contribution: 2023-06-02 20:02

Contribution: 2023-06-04 20:00

Contribution: 2023-06-04 20:01

Contribution: 2023-06-04 20:02

Contribution: 2023-06-09 20:00

Contribution: 2023-06-13 20:00

Contribution: 2023-06-13 20:01

Contribution: 2023-06-14 20:00

Contribution: 2023-06-14 20:01

Contribution: 2023-06-14 20:02

Contribution: 2023-06-17 20:00

Contribution: 2023-06-17 20:01

Contribution: 2023-06-19 20:00

Contribution: 2023-06-19 20:01

Contribution: 2023-06-19 20:02

Contribution: 2023-06-23 20:00

Contribution: 2023-06-24 20:00

Contribution: 2023-06-24 20:01

Contribution: 2023-06-24 20:02

Contribution: 2023-06-25 20:00

Contribution: 2023-06-25 20:01

Contribution: 2023-06-27 20:00

Contribution: 2023-06-27 20:01

Contribution: 2023-06-27 20:02

Contribution: 2023-07-01 20:00

Contribution: 2023-07-02 20:00

Contribution: 2023-07-02 20:01

Contribution: 2023-07-02 20:02

Contribution: 2023-07-03 20:00

