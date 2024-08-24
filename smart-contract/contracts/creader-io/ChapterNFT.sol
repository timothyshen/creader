// SPDX-License-Identifier: MIT

//TODO: ChapterNFT
// createChapter -> mint a new 721 IPA and create a bonding curve for it

pragma solidity ^0.8.23;

import {ERC721} from "solmate/src/tokens/ERC721.sol";
import "@story-protocol/protocol-core/contracts/registries/IPAssetRegistry.sol";
import {IBodhi} from "../shares/interface/IBodhi.sol";

contract ChapterNFT is ERC721 {
    uint256 private _tokenIds;

    struct Chapter {
        string title;
        address owner;
    }

    mapping(uint256 => Chapter) public chapters;

    IPAssetRegistry public immutable REGISTRY;
    IBodhi public immutable BODHI;

    constructor(
        IPAssetRegistry _registry,
        IBodhi _bodhi
    ) ERC721("ChapterNFT", "CNFT") {
        REGISTRY = _registry;
        BODHI = IBodhi(_bodhi);
    }

    function createChapter(
        string memory _title,
        string calldata arTxId
    ) public {
        uint256 tokenId = _tokenIds;
        address id = REGISTRY.register(block.chainid, address(this), _tokenIds);
        chapters[tokenId] = Chapter(_title, id);
        _mint(msg.sender, tokenId);
        BODHI.create(arTxId);
        _tokenIds++;
    }

    function updateChapter(uint256 _tokenId, string memory _title) public {
        require(
            ownerOf(_tokenId) == msg.sender,
            "Only owner can update chapter"
        );
        chapters[_tokenId].title = _title;
    }

    function tokenURI(
        uint256 id
    ) public view virtual override returns (string memory) {
        // TODO: Implement token URI logic
        return string(abi.encodePacked("https://ipfs.io/ipfs/", id));
    }
}
