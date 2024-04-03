const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const NGATokenNFTFactory = await hre.ethers.getContractFactory(
    "NGATokenNFT"
  );
  const ngaTokenNft = await NGATokenNFTFactory.attach(
    process.env.CONTRACT_ADDRESS
  );

  const mintTx = await ngaTokenNft.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await ngaTokenNft.balanceOf(process.env.WALLET_ADDRESS)) +
      " NGAToken NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await ngaTokenNft.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});