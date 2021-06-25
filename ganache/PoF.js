const pof = require("../blockchain/PoF");
const util = require("../blockchain/utility");

const latte = new pof.Blockchain();

latte.createTransaction(new pof.Transaction('asen', 'tony', 10))
latte.minePendingTransactions('igor-the-miner')
latte.createTransaction(new pof.Transaction('asen', 'tony', 10))
latte.minePendingTransactions('igor-the-miner')

const minerBalance = latte.getBalanceOfAddress('igor-the-miner')


// const blockIndex = latte.chainLength;
// console.log('Minning block #' + blockIndex)
// latte.addBlock(newBlock)
// console.log('Added block #' + blockIndex)

// const checkChainIntegrity = latte.verifyChainIntegrity();

console.log(util.getHumanReadableBlockchain(latte), minerBalance);