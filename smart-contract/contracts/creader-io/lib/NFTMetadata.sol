// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/Strings.sol';
import '@openzeppelin/contracts/utils/Base64.sol';

library NFTMetadata {
    using Strings for uint256;

    function generateCoverImage() internal pure returns (string memory) {
        /*
         * @dev Generate cover image
         * @param tokenId uint256
         */

        bytes memory coverImage = abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
            '<style>.base { fill: white; font-family: serif; font-size: 14px; }</style>',
            '<rect width="100%" height="100%" fill="black" />',
            '<text x="50%" y="40%" class="base" dominant-baseline="middle" text-anchor="middle">',
            'Title: ',
            'Title',
            '</text>',
            '<text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle">',
            'Author: ',
            'Author',
            '</text>',
            '</svg>'
        );
        return string(abi.encodePacked('data:image/svg+xml;base64,', Base64.encode(coverImage)));
    }

    function getTokenURI(uint tokenId) internal pure returns (string memory) {
        /*
         * @dev Get token URI
         * @param tokenId uint256
         */

        bytes memory dataURI = abi.encodePacked(
            '{',
            '"name": "CreaderDAO Copyright ',
            'test',
            ' #',
            tokenId.toString(),
            '",',
            '"description": "Creader Copyright is a Unique NFT built based on the ERC721 standard to represent',
            'the ownership of the book. We want to use this token to help pushing the use of NFT in copyright and IP law",',
            '"image": "',
            generateCoverImage(),
            '"',
            '}'
        );
        return string(abi.encodePacked('data:application/json;base64,', Base64.encode(dataURI)));
    }
}
