// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import '@openzeppelin/contracts/utils/Base64.sol';
import '../ERC6551/interfaces/IERC6551Registry.sol';
import './interfaces/ICopyrightNFT.sol';
import '../creaderToken/CreaderToken.sol';

import './lib/NFTMetadata.sol';

/**
 * @title Copyright NFT
 * @dev Create a Copyright NFT token
 */
contract CopyrightNFT is ERC721URIStorage, ICopyrightNFT {
    using NFTMetadata for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    CreaderToken public creaderToken;
    IERC6551Registry public registry;
    address public ERC6551Account;

    uint256 private _salt;
    // URId
    string internal baseURI;

    // mutable storage
    mapping(uint256 => Cover) public covers;

    mapping(uint256 => address) public tokenToCover;

    mapping(uint256 => address) public coverToToken;

    mapping(address => uint256[]) public authorCovers;

    event CoverMint(uint256 indexed CoverId, uint256 indexed tokenId, address indexed author);

    event CoverAccountCreated(address indexed account, address indexed to, uint256 indexed tokenId, string title);

    constructor(
        string memory baseURI_,
        string memory _name,
        string memory _symbol,
        address _creaderToken,
        address _erc6551Registry,
        address _ERC6551Account
    ) ERC721(_name, _symbol) {  // Constructor function
        creaderToken = CreaderToken(_creaderToken);  // Initializing CreaderToken instance
        registry = IERC6551Registry(_erc6551Registry);  // Initializing IERC6551Registry instance
        ERC6551Account = _ERC6551Account;  // Setting ERC6551Account address
        baseURI = baseURI_;  // Setting base URI
    }

    modifier onlyOwner(uint256 _id) {  // Modifier to check if caller is the owner of the cover
        require(covers[_id].owner == msg.sender, 'Caller is not the owner');
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
        uint256 newCoverId = _tokenIds.current();
        _safeMint(to, newCoverId);

        address contractAddress = address(this);

        _setTokenURI(newCoverId, NFTMetadata.getTokenURI(newCoverId));
        _tokenIds.increment();

        address NFTAccount = registry.createAccount(
            ERC6551Account,
            block.chainid,
            contractAddress,
            newCoverId,
            _salt,
            ''
        );

        address predictAccount = registry.account(ERC6551Account, block.chainid, contractAddress, newCoverId, _salt);

        if (predictAccount != NFTAccount) {
            revert('ERC6551: account creation failed');
        }

        emit CoverAccountCreated(NFTAccount, to, newCoverId, _title);

        covers[newCoverId] = Cover({
            id: newCoverId,
            title: _title,
            description: _description,
            owner: to,
            status: _status,
            timestamp: block.timestamp,
            nftAccount: NFTAccount
        });

        coverToToken[newCoverId] = NFTAccount;

        emit CoverCreation(_title, _description, msg.sender, _status, newCoverId);
        _salt++;

        return NFTAccount;
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
        emit CoverUpdate(_id, _title, _description, 'active');
        return _id;
    }

    // Function to get all covers
    function getAllCoypright() external view returns (Cover[] memory) {
        /*
         * @dev Get all covers
         */
        uint coverId = _tokenIds.current();
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
    function getAuthorCover(address _author) external view returns (Cover[] memory) {
        uint256[] memory authorCoverIds = authorCovers[_author];
        Cover[] memory result = new Cover[](authorCoverIds.length);

        for (uint256 i = 0; i < authorCoverIds.length; i++) {
            result[i] = covers[authorCoverIds[i]];
        }

        return result;
    }
}
