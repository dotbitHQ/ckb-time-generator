import { Exchange, ascendex, binance, kucoin, huobi } from 'ccxt'
import { HttpsProxyAgent } from 'https-proxy-agent'

export const FEE = BigInt(1000)
export const INFO_CELL_CAPACITY = BigInt(400) * BigInt(100000000)
export const SUM_OF_INFO_CELLS = 12 // 36 info cells, we can add more if necessary

export enum INFO_DATA_TYPE {
  arbitrage = 0,
  timestamp = 1,
  blocknumber = 2,
}

export const TIME_1_M = 60 * 1000;
export const TIME_30_S = 30 * 1000;
export const TIME_5_S = 5 * 1000;
export const THEORETIC_BLOCK_1_M = 4;

export const LOWEST_CELL_CAPACITY = BigInt(6_100_000_000);

export enum CellType {
  Quote = '0x00',
  Timestamp = '0x01',
  BlockNumber = '0x02',
}

export enum SinceFlag {
  AbsoluteHeight = '00',
  AbsoluteTimestamp = '40',
}

// console.log(process.env.http_proxy)
// console.log(process.env.https_proxy)

const proxy = process.env.https_proxy ?? process.env.http_proxy
const agent = proxy ? new HttpsProxyAgent(proxy) : null
// These exchanges were picked from coinmarketcap.com and sorted base on their volume share on CKB/USDT market.
export const EXCHANGES: Exchange[] = [
  new binance({ agent }),
  new huobi({ agent }),
  new ascendex({ agent }),
  new kucoin({ agent })
]

export const UNKNOWN_OUT_POINT_REG = /Unknown\(OutPoint\((0x[0-9a-fA-F]+)\)\)/
