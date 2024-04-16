// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LicenseNFT is ERC721, Ownable {
    // Event to emit when a new license is minted
    event LicenseMinted(
        uint256 indexed tokenId,
        address indexed to,
        uint256 indexed originalNftId
    );

    // Counter for tokenId generation
    uint256 private _tokenIdCounter;

    // Mapping to store the original NFT ID associated with each license NFT

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) Ownable(msg.sender) {}

    // Function to mint a new license NFT
    // `to` is the address receiving the license NFT
    // `originalNftId` is the ID of the original NFT for which the license is being granted
    function mint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter++;
        _mint(to, tokenId);
        emit LicenseMinted(tokenId, to, tokenId);
    }
}
