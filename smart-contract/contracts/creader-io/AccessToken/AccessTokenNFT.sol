// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import '@openzeppelin/contracts/utils/Base64.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import 'hardhat/console.sol';
import '../CopyrightNFT.sol';
import '../lib/NFTMetadata.sol';

contract AccessToken is ERC721, ERC721URIStorage, ERC721Enumerable {
    using NFTMetadata for uint256;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    string private coverTitle;
    CopyrightNFT public copyrightNFT;

    // ============ Structs ============

    struct Membership {
        uint256 id;
        uint256 coverId;
        // The maximum number of tokens that can be sold.
        uint256 quantity;
        // The price at which each token will be sold, in ETH.
        uint256 price;
        // The number of tokens sold so far.
        uint256 numSold;
        // The account that will receive sales revenue.
        address payable fundingRecipient;
    }

    // ============ Immutable Storage ============
    // The URI for the API that serves the content for each token.
    // Note: Strings cannot be literally immutable.
    string internal baseURI;

    // ============ Mutable Storage ============
    // Mapping of membership id to descriptive data.
    mapping(uint256 => Membership) public memberships;
    // Mapping of token id to membership id.
    mapping(uint256 => uint256) public tokenToMembership;

    // The amount of funds that have already been withdrawn for a given cover.
    mapping(uint256 => uint256) public withdrawnForMembership;

    mapping(uint256 => uint256) public coverToMembershipId;

    mapping(address => mapping(uint256 => bool)) public isOwnerOfCover;

    // Membership start at 1, in order that unsold tokens don't map to the first cover.
    uint256 private nextMembershipId = 1;

    // ============ Events ============

    event MembershipCreated(uint256 quantity, uint256 price, address fundingRecipient, uint256 indexed MembershipId);

    event MembershipPurchased(
        uint256 indexed MembershipId,
        uint256 indexed tokenId,
        // `numSold` at time of purchase represents the "serial number" of the NFT.
        uint256 numSold,
        // The account that paid for and received the NFT.
        address indexed buyer
    );
    // ============ modifier ============
    modifier correctId(uint id, uint256 _tokenId) {
        require(id <= memberships[_tokenId].numSold && id > 0, 'Invalid id');
        _;
    }

    modifier onlyCopyrightNFTOwner(uint256 _tokenId) {
        require(copyrightNFT.ownerOf(_tokenId) == msg.sender, 'Caller is not the owner');
        _;
    }

    // ============ Constructor ============

    constructor(
        address _copyrightContract,
        string memory baseURI_,
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
        baseURI = baseURI_;
        copyrightNFT = CopyrightNFT(_copyrightContract);
    }

    // ============ Cover Methods ============

    function createMemberships(
        uint256 _coverId,
        // The number of tokens that can be minted and sold.
        uint256 quantity,
        // The price to purchase a token.
        uint256 price,
        // The account that should receive the revenue.
        address payable fundingRecipient
    ) external onlyCopyrightNFTOwner(_coverId) {
        require(msg.sender != address(0), 'ERC721: mint to the zero address');
        /*
        Create a new membership.
        */
        require(quantity > 0, 'Quantity must be greater than 0');
        require(price > 0, 'Price must be greater than 0');
        require(fundingRecipient != address(0), 'Recipient must be non-zero address');

        memberships[nextMembershipId] = Membership({
            id: nextMembershipId,
            coverId: _coverId,
            quantity: quantity,
            price: price,
            fundingRecipient: fundingRecipient,
            numSold: 0
        });

        coverToMembershipId[_coverId] = nextMembershipId;
        isOwnerOfCover[msg.sender][_coverId] = true;

        emit MembershipCreated(quantity, price, fundingRecipient, nextMembershipId);

        nextMembershipId++;
    }

    function buyMembership(uint256 membershipId) external payable {
        Membership storage membership = memberships[membershipId];

        // Check that the membership exists.
        require(membership.quantity > 0, 'Membership does not exist');
        // Check that there are still tokens available to purchase.
        require(
            membership.quantity > membership.numSold && msg.value == membership.price,
            'Membership does not exist, is already sold out, or incorrect payment amount.'
        );
        // Increment the number of tokens sold for this membership BEFORE minting a new token.
        memberships[membershipId].numSold++;

        // Mint a new token for the sender, using the `_tokenIds`.
        uint256 newTokenId = _tokenIds.current();
        _safeMint(msg.sender, newTokenId);

        // Increment token counter AFTER minting a new token.
        _tokenIds.increment();

        // Store the mapping of token id to the membership being purchased.
        tokenToMembership[newTokenId] = membershipId;

        // set token URI
        _setTokenURI(newTokenId, NFTMetadata.getTokenURI(newTokenId));

        // Set the mapping from owner's address and cover id to true
        isOwnerOfCover[msg.sender][membership.coverId] = true;

        emit MembershipPurchased(membershipId, newTokenId, membership.numSold, msg.sender);
    }

    // ============ Operational Methods ============

    // function withdrawFunds(uint256 membershipId) external {
    //     Membership storage membership = memberships[membershipId];
    //     uint256 withdrawn = withdrawnForMembership[membershipId];

    //     // Compute the amount available for withdrawing from this membership.
    //     uint256 remainingForMembership = (membership.price * membership.numSold) - withdrawn;

    //     // Update that amount that has already been withdrawn for the membership.
    //     withdrawnForMembership[membershipId] = withdrawn + remainingForMembership;

    //     // Send the amount that was remaining for the membership, to the funding recipient.
    //     _sendFunds(membership.fundingRecipient, remainingForMembership);
    // }

    // ============ NFT Methods ============

    function getMembership(uint _coverId) public view returns (Membership memory) {
        uint256 membershipId = coverToMembershipId[_coverId];
        require(membershipId != 0, 'Membership does not exist');
        return memberships[membershipId];
    }

    function totalSupply(uint id) public view returns (uint256) {
        /*
         * @dev Get total supply of a specific membership
         * @param id The id of the membership
         * @return uint256 total supply for a specific membership
         */
        return memberships[id].quantity;
    }

    function isOwner(address _owner, uint _coverId) public view returns (bool) {
        return isOwnerOfCover[_owner][_coverId];
    }

    // ============ Private Methods ============

    // function _sendFunds(address payable recipient, uint256 amount) private {
    //     require(address(this).balance >= amount, 'Insufficient balance for send');
    //     (bool success, ) = recipient.call{value: amount}('');
    //     require(success, 'Unable to send value: recipient may have reverted');
    // }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721Enumerable, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
