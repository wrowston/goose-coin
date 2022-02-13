const GooseCoin = artifacts.require("GooseCoin")
module.exports = async function (callback) {

    let gooseCoin = await GooseCoin.deployed()
    let accounts = await web3.eth.getAccounts()

    let balance = await gooseCoin.balanceOf(accounts[0])
    console.log(accounts[0] + 'Account GooseCoin Balance: ' + web3.utils.fromWei(balance.toString())) // 420,000,000.000000000000000000

    // let toWeiEth = web3.utils.toWei("1.0", "ether");
    // console.log("To Wei ETH:: " + toWeiEth)

    // let createTokens = await gooseCoin.createTokens(toWeiEth)
    let totalSupply = await gooseCoin.totalSupply()
    console.log('Total Supply of Goose Coin: ' + web3.utils.fromWei(totalSupply)) // 3,322,761,000.000000000000000000 

    await gooseCoin.approve(accounts[2], web3.utils.toWei("0.5", "ether"))
    const allowanceAfter = await gooseCoin.allowance(accounts[0], accounts[2])
    console.log(
        "Amount of gooseCoin FarmToken is allowed to transfer on our behalf After: " +
        allowanceAfter.toString()
    )

    balanceMyTokenBeforeAccounts0 = await gooseCoin.balanceOf(accounts[0])
    balanceMyTokenBeforeAccounts2 = await gooseCoin.balanceOf(accounts[2])
    console.log("*** Goose Coin ***")
    console.log(
        "Balance GooseCoin Before accounts[0] " +
        web3.utils.fromWei(balanceMyTokenBeforeAccounts0.toString())
    )
    console.log(
        "Balance GooseCoin Before accounts[2] " +
        web3.utils.fromWei(balanceMyTokenBeforeAccounts2.toString())
    )

    // await gooseCoin.transfer(accounts[1], 3322761000)
    // let balanceAccount1 = await gooseCoin.balanceOf(accounts[1])
    // console.log(accounts[1] + ' Account GooseCoin Balance: ' + balanceAccount1.toString()) 


    callback()
}


// to run script
// truffle exec scripts/testScript.js

/*
TODO: how can i swap ETH for GOOSE?
1. does the GOOSE contract address hold the GOOSE total supply and distribute GOOSE when a user sends ETH to the contract?
2. if so, how do I get the ETH out of the contract address?
3. when the initial minting of GOOSE occurs, I can change where the total supply goes. Does this address get the ETH from a swap?
4. can i deploy on MATIC network?
*/
