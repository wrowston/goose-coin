const GooseCoin = artifacts.require("GooseCoin")
const FarmToken = artifacts.require("FarmToken")

let gooseCoin = await GooseCoin.deployed()
let acconts = await web3.eth.getAccounts()
let balance = await gooseCoin.balanceOf(accounts[0])

module.exports = async function (callback) {
  gooseCoin = await GooseCoin.deployed()
  farmToken = await FarmToken.deployed()
  let accounts = await web3.eth.getAccounts()

  // Returns the remaining number of tokens that spender will be allowed to spend on behalf of owner through transferFrom.
  // This is zero by default.
  const allowanceBefore = await gooseCoin.allowance(
    accounts[0],
    farmToken.address
  )
  console.log(
    "Amount of gooseCoin FarmToken is allowed to transfer on our behalf Before: " +
      allowanceBefore.toString()
  )

  // In order to allow the Smart Contract to transfer to MyToken (ERC-20) on the accounts[0] behalf,
  // we must explicitly allow it.
  // We allow farmToken to transfer x amount of MyToken on our behalf
  await gooseCoin.approve(farmToken.address, web3.utils.toWei("0.5", "ether"))

  // Validate that the farmToken can now move x amount of MyToken on our behalf
  const allowanceAfter = await gooseCoin.allowance(accounts[0], farmToken.address)
  console.log(
    "Amount of gooseCoin FarmToken is allowed to transfer on our behalf After: " +
      allowanceAfter.toString()
  )

  // Verify accounts[0] and farmToken balance of gooseCoin before and after the transfer
  balanceMyTokenBeforeAccounts0 = await gooseCoin.balanceOf(accounts[0])
  balanceMyTokenBeforeFarmToken = await gooseCoin.balanceOf(farmToken.address)
  console.log("*** Goose Coin ***")
  console.log(
    "Balance GooseCoin Before accounts[0] " +
      web3.utils.fromWei(balanceMyTokenBeforeAccounts0.toString())
  )
  console.log(
    "Balance GooseCoin Before TokenFarm " +
      web3.utils.fromWei(balanceMyTokenBeforeFarmToken.toString())
  )

  console.log("*** Farm Token ***")
  balanceFarmTokenBeforeAccounts0 = await farmToken.balanceOf(accounts[0])
  balanceFarmTokenBeforeFarmToken = await farmToken.balanceOf(farmToken.address)
  console.log(
    "Balance FarmToken Before accounts[0] " +
      web3.utils.fromWei(balanceFarmTokenBeforeAccounts0.toString())
  )
  console.log(
    "Balance FarmToken Before TokenFarm " +
      web3.utils.fromWei(balanceFarmTokenBeforeFarmToken.toString())
  )
  // Call Deposit function from FarmToken
  console.log("Call Deposit Function")
  await farmToken.deposit(web3.utils.toWei("0.5", "ether"))
  console.log("*** Goose Coin ***")
  balanceMyTokenAfterAccounts0 = await gooseCoin.balanceOf(accounts[0])
  balanceMyTokenAfterFarmToken = await gooseCoin.balanceOf(farmToken.address)
  console.log(
    "Balance gooseCoin After accounts[0] " +
      web3.utils.fromWei(balanceMyTokenAfterAccounts0.toString())
  )
  console.log(
    "Balance gooseCoin After TokenFarm " +
      web3.utils.fromWei(balanceMyTokenAfterFarmToken.toString())
  )

  console.log("*** Farm Token ***")
  balanceFarmTokenAfterAccounts0 = await farmToken.balanceOf(accounts[0])
  balanceFarmTokenAfterFarmToken = await farmToken.balanceOf(farmToken.address)
  console.log(
    "Balance FarmToken After accounts[0] " +
      web3.utils.fromWei(balanceFarmTokenAfterAccounts0.toString())
  )
  console.log(
    "Balance FarmToken After TokenFarm " +
      web3.utils.fromWei(balanceFarmTokenAfterFarmToken.toString())
  )

  // End function
  callback()
}
