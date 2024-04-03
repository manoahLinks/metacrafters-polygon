const hre = require("hardhat");

async function main() {
  const NGATokenNFTFactory = await hre.ethers.getContractFactory("NGATokenNFT");

  const NGATokenNFT = await NGATokenNFTFactory.deploy();

  console.log("NGAToken NFT deployed to: ", NGATokenNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});