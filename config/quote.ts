import { INFO_DATA_TYPE } from '../src/utils/const'

const PayersLockScript = {
  codeHash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',
  hashType: 'type',
  args: '0xb12e3692d401c331f6d1f1efcb24d510296c4a6a',
}

const PayersPrivateKey = '0x986ac023216102573529e19d79368cbbe84a5c5987ea4f2b8169ffaea50dcf0e'

const IndexStateTypeScript = {
  codeHash: '0x554cff969f3148e3c620749384004e9692e67c429f621554d139b505a281c7b8',
  hashType: 'type',
  args: '0x00',
}

const InfoTypeScript = {
  codeHash: '0x96248cdefb09eed910018a847cfb51ad044c2d7db650112931760e3ef34a7e9a',
  hashType: 'type',
  args: '0x00',
}

console.log('using config: quote')

export default {
  infoDataType: INFO_DATA_TYPE.arbitrage,
  IndexStateTypeScript,
  InfoTypeScript,
  PayersLockScript,
  PayersPrivateKey,
}
