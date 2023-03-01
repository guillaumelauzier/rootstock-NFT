const Web3 = require('web3');
const web3 = new Web3('http://localhost:4444');
const MyNFT = require('./MyNFT.json');

const contractAddress = '0x...'; // address of the deployed contract
const myNFT = new web3.eth.Contract(MyNFT.abi, contractAddress);

// Mint a new token
const tokenId = 1;
const to = '0x...'; // address to receive the token
myNFT.methods.mint(to, tokenId).send({ from: '0x...' });
