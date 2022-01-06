const GooseCoin = artifacts.require("GooseCoin")
module.exports = async function (callback) { 

    let gooseCoin = await GooseCoin.deployed()
    let accounts = await web3.eth.getAccounts()

    let balance = await gooseCoin.balanceOf(accounts[0])
    console.log(accounts[0] + 'Account GooseCoin Balance: ' + balance.toString()) // 420,000,000.000000000000000000

    let createTokens = await gooseCoin.createTokens(42069)
    let totalSupply = await gooseCoin.totalSupply()
    console.log('Total Supply of Goose Coin: ' + totalSupply) // 3,322,761,000.000000000000000000 

    callback()
}


// to run script
// truffle exec scripts/testScript.js
