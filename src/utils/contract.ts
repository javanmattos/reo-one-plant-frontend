import { AbiItem } from "web3-utils";
import contractABI from "../abi/abi.json";
import { Event, MintListenerOptions, ReopenListenerOptions } from "../types";
import Web3 from "web3";

interface CustomWindow extends Window {
  ethereum?: any;
}

declare const window: CustomWindow;

const web3 = new Web3(window.ethereum);

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS ?? "";

// Create connection to smart contract
const contract = new web3.eth.Contract(
  contractABI as AbiItem[],
  contractAddress
);

const contractMintFunc = await contract.getPastEvents("Minted");

/**
 * Gets the total seconds remaining in the plant's lifespan from the One Plant
 * smart contract.
 * @returns The total seconds remaining in the plant's lifespan.
 */
export const getTimeLeft = async (): Promise<number> => {
  try {
    const blockNumber = await web3.eth.getBlockNumber();
    const timeStamp: any = (await web3.eth.getBlock(blockNumber)).timestamp;

    console.log("Current blocknumber: ", blockNumber);
    console.log("Timestamp: ", timeStamp);

    var date = new Date(timeStamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    var formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    console.log(formattedTime);


    const lastMinted: number = await contract.methods.lastMinted().call();
    
    if ((blockNumber - lastMinted) * 12 > 900) {
      // GAME OVER
      return 0;
    }
    return 900 - (blockNumber - lastMinted) * 12;
  } catch (e) {
    console.error(`getTimeLeft(): ${e}`);
    return 0;
  }
};

/**
 * Gets the plant's lifespan from the One Plant smart contract.
 * @returns The plant's total lifespan.
 */
export const getPlantLifespan = async (): Promise<number> => {
  try {
    const blockNumber = await web3.eth.getBlockNumber();
    const maxToken = await contract.methods.maxTokenId().call();
    const mintingBlock = await contract.methods.mintingBlockOf(maxToken).call();
    const lastMinted = await contract.methods.lastMinted().call();
    const firstOpenBlock = await contract.methods.firstOpenBlock().call();

    if(!firstOpenBlock) return 0;
    if(blockNumber - lastMinted > 75) return (mintingBlock + 75 - firstOpenBlock) * 12;
    return (blockNumber - firstOpenBlock) * 12;

  } catch (e) {
    console.error(`getPlantLifeSpan(): ${e}`);
    return 0;
  }
};

/**
 * Gets the total amount of treasure found from the One Plant smart contract.
 * @returns The total amount of treasure found.
 */
export const getTreasureFound = async (): Promise<number> => {
  try {
    return await contract.methods.maxTokenId().call();
  } catch (e) {
    console.error(`getTreasureFound(): ${e}`);
    return 0;
  }
};

/**
 * Creates a transaction and interacts with the mint function in the One Plant
 * smart contract to mint an NFT.
 * @param address The wallet address of the user.
 * @param value The amount of ETH the user is using to mint.
 */
export const mint = async (address: string, value: number) => {
  const result = await contract.methods.mint().send({
    from: address,
    value: web3.utils.toWei(value.toString(), "ether")
  });
};

/**
 * Adds a listener for the Mint event from the One Plant smart contract.
 */
export const addMintListener = (options?: MintListenerOptions) => {
  contract.events.Minted({})
    .on("connected", (subscriptionId: string | number) => {
      console.log("Connected: " + subscriptionId);
    })
    .on("data", (event: Event) => {
      console.log("Mint success");
      console.log(event);
      options?.onMint();
    })
    .on("changed", (event: any) => {
      console.log("Changed");
      console.log(event);
    })
    .on("error", (error: any) => {
      console.log(error);
    });
};

/**
 * Adds a listener for the Reopen event from the One Plant smart contract.
 */
export const addOpenListener = (options?: ReopenListenerOptions) => {
  contract.events.OpenMint({})
    .on("connected", (subscriptionId: string | number) => {
      console.log("Connected: " + subscriptionId);
    })
    .on("data", (event: Event) => {
      console.log("Open success");
      console.log(event);
      options?.onReopen();
    })
    .on("changed", (event: any) => {
      console.log("Changed");
      console.log(event);
    })
    .on("error", (error: any) => {
      console.log(error);
    });
};

/**
 * Adds a listener for the Reopen event from the One Plant smart contract.
 */
export const addReopenListener = (options?: ReopenListenerOptions) => {
  contract.events.Reopen({})
    .on("connected", (subscriptionId: string | number) => {
      console.log("Connected: " + subscriptionId);
    })
    .on("data", (event: Event) => {
      console.log("Reopen success");
      console.log(event);
      options?.onReopen();
    })
    .on("changed", (event: any) => {
      console.log("Changed");
      console.log(event);
    })
    .on("error", (error: any) => {
      console.log(error);
    });
};

