const Web3 = require('web3');
const rpcURL = "https://goerli.infura.io/v3/6c29d4b5e0fe494284555b32642da198";

const web3 = new Web3(rpcURL)

const blockNum = "8136910"
// 앞서 Account1 에서 Account3 로 0.01이더를 전송했던 0x2e0d8ca0d020bf8d687a6f11374d3200b095debbeddf949e8f4f5fdc5c125314 의 트랜잭션ID 를 포함하는 블록

web3.eth.getBlock(blockNum).then((obj) => {
  console.log(obj);
})