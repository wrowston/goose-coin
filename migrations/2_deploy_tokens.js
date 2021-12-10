const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const GooseCoin = artifacts.require("GooseCoin")
const GooseCoinV2 = artifacts.require("GooseCoin")

module.exports = async function (deployer, network, accounts) {
  // Deploy GooseCoin
  await deployer.deploy(GooseCoin)
  const gooseCoin = await GooseCoin.deployed()
  // const instance = await deployProxy(GooseCoin, { deployer });
  // await upgradeProxy(instance.address, GooseCoinV2, { deployer });
}