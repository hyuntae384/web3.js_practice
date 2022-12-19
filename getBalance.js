// getBalance.js

const Web3 = require('web3');
const rpcURL = "https://goerli.infura.io/v3/6c29d4b5e0fe494284555b32642da198";

const web3 = new Web3(rpcURL);

const account = "0x5f02BC865C51791f59480700dCe9AC4A9a2d1199";

web3.eth.getBalance(account)
  .then((bal) =>{
    console.log(`지갑 ${account}의 잔액은... ${bal}입니다.`);
    return web3.utils.fromWei(bal, "ether");
  })
  .then((eth) => {
    console.log(`이더 단위로는 ${eth} ETH 입니다.`);
  });