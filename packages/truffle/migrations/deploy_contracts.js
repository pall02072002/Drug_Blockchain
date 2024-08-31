const { ethers } = require("ethers");

async function main() {
    // Set up the provider and wallet
    const provider = new ethers.providers.JsonRpcProvider("https://<RPC_URL>"); // Replace with your network's RPC URL
    const wallet = new ethers.Wallet("<PRIVATE_KEY>", provider); // Replace with your private key

    // Replace the following ABI and Bytecode with your contract's ABI and bytecode
    const contractABI = [
        // Copy the ABI array from the compiled contract (DrugSupplyChain.abi)
    ];
    const contractBytecode = "0x..."; // Replace with the bytecode from the compiled contract (DrugSupplyChain.bin)

    // Create a ContractFactory to deploy the contract
    const contractFactory = new ethers.ContractFactory(contractABI, contractBytecode, wallet);

    // Deploy the contract
    console.log("Deploying contract...");
    const contract = await contractFactory.deploy();

    // Wait for the contract to be mined
    await contract.deployed();
    console.log(`Contract deployed at address: ${contract.address}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });



 
/*
Install Dependencies: Ensure you have Node.js and ethers.js installed. If you haven't installed ethers.js yet, you can do so using npm: 
npm install ethers

RPC URL: Replace https://<RPC_URL> with the RPC URL of the Ethereum network you're connecting to (e.g., Infura or Alchemy for mainnet/testnet).
Private Key: Replace <PRIVATE_KEY> with your Ethereum account's private key. Make sure to keep your private key secure.
Contract ABI and Bytecode: Replace contractABI and contractBytecode with the ABI and bytecode of your compiled DrugSupplyChain contract.
These are typically generated when you compile your Solidity code (you can use tools like solc, Hardhat, or Truffle).

for deploying use  : node deploy_contract.js

*/
