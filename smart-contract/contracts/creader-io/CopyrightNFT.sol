// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

// Story Protocol imports
import "@story-protocol/protocol-core/contracts/registries/IPAssetRegistry.sol";

import "./interfaces/ICopyrightNFT.sol";
import "../creaderToken/CreaderToken.sol";
import "./lib/NFTMetadata.sol";

/**
 * @title Copyright NFT
 * @dev Create a Copyright NFT token
 */
contract CopyrightNFT is ERC721URIStorage, ICopyrightNFT {
    using NFTMetadata for uint256;
    uint256 private _tokenIds;

    CreaderToken public creaderToken;

    IPAssetRegistry public immutable REGISTRY;

    uint256 public constant MIN_ROYALTY = 10;
    bytes ROYALTY_CONTEXT;

    // URId
    string internal baseURI;

    // mutable storage
    mapping(uint256 => Cover) public covers;

    mapping(uint256 => address) public tokenToCover;

    mapping(uint256 => address) public coverToToken;

    mapping(address => uint256[]) public authorCovers;

    event CoverMint(
        uint256 indexed CoverId,
        uint256 indexed tokenId,
        address indexed author
    );

    event CoverAccountCreated(
        address indexed account,
        address indexed to,
        uint256 indexed tokenId,
        string title
    );

    event RemixMint(
        uint256 indexed tokenId,
        uint256 indexed coverId,
        address indexed author
    );

    event RemixMintCreated(
        string title,
        string description,
        address author,
        string status,
        uint256 coverId
    );

    constructor(
        string memory baseURI_,
        string memory _name,
        string memory _symbol,
        address _creaderToken,
        address _registry
    ) ERC721(_name, _symbol) {
        // Constructor function
        baseURI = baseURI_; // Setting base URI
        creaderToken = CreaderToken(_creaderToken); // Initializing CreaderToken instance
        REGISTRY = IPAssetRegistry(_registry);
    }

    modifier onlyOwner(uint256 _id) {
        // Modifier to check if caller is the owner of the cover
        require(covers[_id].owner == msg.sender, "Caller is not the owner");
        _;
    }

    // Function to create a new copyright
    function createCopyright(
        address to,
        uint256 chainId,
        string memory _title,
        string memory _description,
        string memory _status
    ) external returns (address) {
        uint256 newCoverId = _tokenIds;
        _safeMint(to, newCoverId);

        address contractAddress = address(this);

        _setTokenURI(newCoverId, NFTMetadata.getTokenURI(newCoverId));
        ++_tokenIds;

        address ipId = REGISTRY.register(
            block.chainid,
            contractAddress,
            newCoverId
        );

        emit CoverAccountCreated(ipId, to, newCoverId, _title);

        covers[newCoverId] = Cover({
            id: newCoverId,
            title: _title,
            description: _description,
            owner: to,
            status: _status,
            timestamp: block.timestamp,
            nftAccount: ipId
        });

        coverToToken[newCoverId] = ipId;

        emit CoverCreation(
            _title,
            _description,
            msg.sender,
            _status,
            newCoverId
        );

        return ipId;
    }

    // Function to update a cover
    function updateCover(
        uint256 _id,
        string memory _title,
        string memory _description
    ) external onlyOwner(_id) returns (uint256) {
        // Store the cover in memory if you are only reading from it
        Cover memory cover = covers[_id];
        cover.title = _title;
        cover.description = _description;
        emit CoverUpdate(_id, _title, _description, "active");
        return _id;
    }

    // Function to get all covers
    function getAllCoypright() external view returns (Cover[] memory) {
        /*
         * @dev Get all covers
         */
        uint coverId = _tokenIds;
        Cover[] memory result = new Cover[](coverId);
        for (uint256 i = 0; i < coverId; i++) {
            result[i] = covers[i];
        }
        return result;
    }

    // Function to get a cover
    function getCover(uint256 _id) external view returns (Cover memory) {
        return covers[_id];
    }

    // Function to get a cover by author address
    function getAuthorCover(
        address _author
    ) external view returns (Cover[] memory) {
        uint256[] memory authorCoverIds = authorCovers[_author];
        Cover[] memory result = new Cover[](authorCoverIds.length);

        for (uint256 i = 0; i < authorCoverIds.length; i++) {
            result[i] = covers[authorCoverIds[i]];
        }

        return result;
    }
}
