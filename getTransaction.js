const Web3 = require('web3');
const rpcURL = "https://goerli.infura.io/v3/6c29d4b5e0fe494284555b32642da198";

const web3 = new Web3(rpcURL)

const txId = "0x2e0d8ca0d020bf8d687a6f11374d3200b095debbeddf949e8f4f5fdc5c125314"
//Account1 에서 Account3으로 0.01이더 전송한 트랜잭션 ID

web3.eth.getTransaction(txId)
  .then((obj) => {
    console.log(obj);
  });