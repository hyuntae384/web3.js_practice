const Web3 = require('web3');
const rpcURL = "https://goerli.infura.io/v3/6c29d4b5e0fe494284555b32642da198";

const web3 = new Web3(rpcURL)

const account = "0x5f02BC865C51791f59480700dCe9AC4A9a2d1199";

async function getTransactionsByAccount(account, startBlock, endBlock){
  const res = [];

  for(let i=startBlock; i<endBlock; i++){
    const blockInfo = await web3.eth.getBlock(i);

    const transactionList = blockInfo.transactions;

    transactionList.forEach(async (item) => {
      const txInfo = await web3.eth.getTransaction(item);
      if(txInfo.to == account || txInfo.from == account){
        res.push(txInfo.hash);
      }
    });
  }
  return res;
}

getTransactionsByAccount(account, 8121100, 8121300) //어카운트의 블록을 보고 융통적으로 start, end 블록 넘버 설정하기
  .then((res) => {
    console.log(res)
  })