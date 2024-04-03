// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";

contract NGATokenNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("NGAToken", "NGAT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmTqorDXoVyYmdPoM68z5uyJ2RQMq6ufQNUFVNvgxKe6Bf/";
    }

    function promptDescription() external pure returns (string memory) {
        return "NFT collection of, Iconic Nigerian landmarks and architecture such as the Zuma Rock, 3rd mainland bridge, yankari game reserve, obudu cattle ranch and kainji dam.";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}