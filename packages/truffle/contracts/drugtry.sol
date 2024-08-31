// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract DrugSupplyChain {
    // Events to log transactions
    event ManufacturerSet(address indexed supplier, address indexed manufacturer);
    event RawMaterialSent(address indexed supplier, address indexed manufacturer, uint256 amount);
    event RawMaterialReceived(address indexed manufacturer, address indexed supplier, uint256 amount);
    event TotalMaterialsReceived(uint256 totalAmount);

    // Struct to represent a raw material transaction
    struct MaterialTransaction {
        address supplier;
        address manufacturer;
        uint256 amount;
        uint256 timestamp;
    }

    address public immutable supplier;
    address public manufacturer;
    uint256 public totalMaterialsReceived;

    MaterialTransaction[] public transactions; // Array to store all transactions

    constructor() {
        supplier = msg.sender; // The deployer of the contract is the supplier
    }

    // Function to set the manufacturer address, only callable by the supplier
    function setManufacturer(address _manufacturer) external {
        require(msg.sender == supplier, "Only the supplier can set the manufacturer.");
        require(_manufacturer != address(0), "Invalid manufacturer address.");
        manufacturer = _manufacturer;

        // Emit event when the manufacturer is set
        emit ManufacturerSet(supplier, manufacturer);
    }

    // Function to send raw materials to the manufacturer
    function sendRawMaterial(uint256 amount) external {
        require(msg.sender == supplier, "Only the supplier can send raw materials.");
        require(manufacturer != address(0), "Manufacturer address not set.");
        require(amount > 0, "Amount must be greater than zero.");

        // Emit event for sending raw materials
        emit RawMaterialSent(supplier, manufacturer, amount);

        // Internal function to update state and emit receiving event
        _receiveRawMaterial(amount);
    }

    // Internal function for the manufacturer to receive raw materials
    function _receiveRawMaterial(uint256 amount) internal {
        totalMaterialsReceived += amount; // Update total materials received

        // Store transaction details in the array
        transactions.push(MaterialTransaction({
            supplier: supplier,
            manufacturer: manufacturer,
            amount: amount,
            timestamp: block.timestamp
        }));

        // Emit event when raw materials are received
        emit RawMaterialReceived(manufacturer, supplier, amount);

        // Emit event to log the total materials received
        emit TotalMaterialsReceived(totalMaterialsReceived);
    }

    // Function to fetch total materials received by the manufacturer
    function getTotalMaterialsReceived() external view returns (uint256) {
        return totalMaterialsReceived;
    }

    // Function to get transaction details in a JSON-like structure
    function getTransactionDetails() external view returns (MaterialTransaction[] memory) {
        return transactions;
    }
}

// update the truffle version or pragma version if needed 
// use command : npm install -g truffle@latest
// also update the truffle version in " truffle-config.js"  file if needed 