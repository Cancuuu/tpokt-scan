
export const CONTRACT_ADDRESS = "0x5430a0B6C11f870571ffA891d59dec8C4608Ea9A"; // Contract address

export const CONTRACT_CREATION_BLOCK = 24626620; // Block number of contract creation

export const MINT_EVENT_TOPIC = "0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885"; // Event topic of mint

export const FILTER_ADDRESS_TOPIC = {
    address: CONTRACT_ADDRESS,
    topics: [
        MINT_EVENT_TOPIC
    ],
  };