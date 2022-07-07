// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GooseCoin is ERC20 {
    mapping(address => uint256) balances;

    uint256 public constant initialCreationSupply = 420 * (10**6) * 10**18; // 18 decimals = 420,000,000 GOOSE

    uint256 public constant tokenExchangeRate = 69000; // 69000 GOOSE tokens per 1 ETH

    // uint256 public constant tokenCreationCap =  420 * (10**6) * 10**18; // 18 decimals

    constructor() ERC20("GooseCoin", "GOOSE") {
        // 10,000,000 total supply
        // _mint(msg.sender, 1000000000000000000000000000);

        _mint(msg.sender, initialCreationSupply);
    }

    /// @dev Accepts ether and creates new GOOSE tokens.
    function createTokens(uint256 amount) external payable {
        //msg.value was used as the first parameter here. Where does this value actually come from?
        uint256 tokens = safeMult(amount, tokenExchangeRate) * 10**18;

        balances[msg.sender] += tokens;
        _mint(msg.sender, tokens);
    }

    function sendCoin(address receiver, uint256 amount)
        public
        returns (bool sufficient)
    {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Transfer(msg.sender, receiver, amount);
        return true;
    }

    function getBalance(address addr) public view returns (uint256) {
        return balances[addr];
    }

    function safeAdd(uint256 x, uint256 y) public pure returns (uint256) {
        uint256 z = x + y;
        assert((z >= x) && (z >= y));
        return z;
    }

    function safeSubtract(uint256 x, uint256 y) public pure returns (uint256) {
        assert(x >= y);
        uint256 z = x - y;
        return z;
    }

    function safeMult(uint256 x, uint256 y) public pure returns (uint256) {
        uint256 z = x * y;
        assert((x == 0) || (z / x == y));
        return z;
    }
}
