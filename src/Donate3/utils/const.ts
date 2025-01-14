import { PublicKey } from '@solana/web3.js';
export const ZERO_ADDRESS = '11111111111111111111111111111111111111111111';
export const MY_ADDRESS = '9KUpYG22qNKSW3XkpZmBCyFiy1JsFC7rw6o4c7iUomEk';
export enum DONATE_TYPE {
  FLOAT = 'float',
  EMBED = 'embed',
}

export type floatType = typeof DONATE_TYPE.FLOAT;
export type embedType = typeof DONATE_TYPE.EMBED;

export type UFOType = {
  type: floatType | embedType;
};

export type PrimaryCoinType = {
  Ethereum: string | number[];
  Goerli: string | number[];
  Polygon: string | number[];
  Solana: string | number[];
  'Polygon Mumbai': string | number[];
};

export const PRIMARY_COIN: PrimaryCoinType = {
  Ethereum: 'ETH',
  Goerli: 'ETH',
  Polygon: 'MATIC',
  'Polygon Mumbai': 'MATIC',
  Solana: 'Solana',
};

export const DONATE_VALUE_MAP: PrimaryCoinType = {
  Ethereum: [0.001, 0.01, 0.5],
  Goerli: [0.001, 0.01, 0.5],
  Polygon: [0.5, 5, 25],
  Solana: [0.001, 0.01, 0.5],
  'Polygon Mumbai': [0.5, 5, 25],
};


export type Explores = {
  [key: number]: string;
}

export const EXPLORER_URL_MAP = "https://solscan.io/account/"
export const SPL_DONATE_TOKEN_ID = new PublicKey(
  '5qVVcj3hit8XZb5xN1S351EAoRPkuB3ZjY5RWzWpq8gq'
);

// export const EXPLORER_URL_MAP: Explores = {
//   0: 'https://etherscan.io/address/',
//   1: 'https://etherscan.io/address/',
//   56: 'https://bscscan.com/address/',
//   137: 'https://polygonscan.com/address/',
//   80001: 'https://mumbai.polygonscan.com/address/',
//   5: 'https://goerli.etherscan.io/address/',
// }