pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GooseCoin is ERC20 {
    constructor() public ERC20("GooseCoin", "GOOSE"){
        _mint(msg.sender, 1000000000000000000000000);
    }
}
