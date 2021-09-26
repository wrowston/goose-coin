const GooseCoin = artifacts.require("GooseCoin")
const FarmToken = artifacts.require("FarmToken")

module.exports = async function (deployer, network, accounts) {
  // Deploy GooseCoin
  await deployer.deploy(GooseCoin)
  const gooseCoin = await GooseCoin.deployed()

    // Deploy Farm Token
    await deployer.deploy(FarmToken, gooseCoin.address)
    const farmToken = await FarmToken.deployed()
}
