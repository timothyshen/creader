// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SimpleNFT is ERC721 {
    constructor() ERC721("SimpleNFT", "SNFT") {}

    function mint(address to) external returns (uint256) {
        uint256 tokenId = 0;
        _safeMint(to, tokenId);
        tokenId++;
        return tokenId;
    }
}
