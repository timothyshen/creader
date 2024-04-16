// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@story-protocol/core/contracts/registries/IPAssetRegistry.sol";
import "@story-protocol/core/contracts/resolvers/IPResolver.sol";

import "@story-protocol/core/contracts/lib/IP.sol";
import "./interface/IModelNFT.sol";

contract IPARegistrar {
    IModelNFT public immutable NFT;
    address public immutable IP_RESOLVER;
    IPAssetRegistry public immutable IPA_REGISTRY;

    mapping(uint256 => TokenModelInfo) private _tokenModelInfos;

    struct ModelInfo {
        address creator;
        string createdAt;
        string numParams;
        string modelName;
    }

    struct TokenModelInfo {
        uint256 tokenId;
        address owner;
        address ipId;
        ModelInfo modelInfo;
    }

    event ModelNFTMint(uint256 indexed tokenId, address indexed to);

    uint256 private _tokenIdCounter;

    constructor(
        address ipAssetRegistry,
        address resolver,
        address nft
    ) {
        IPA_REGISTRY = IPAssetRegistry(ipAssetRegistry);
        IP_RESOLVER = resolver;
        NFT = IModelNFT(nft);
    }


    //Return the tba IPID
    function register(string memory ipName, string memory createdAt, string memory numParams, string memory modelName) external returns (address) {
        
        IPA_REGISTRY.setApprovalForAll(address(this), true);

        ModelInfo memory modelInfo = ModelInfo({
            creator: msg.sender,
            createdAt: createdAt,
            numParams: numParams,
            modelName: modelName
        });

        
        uint256 tokenId = NFT.mintWithModelInfo(msg.sender);

        bytes memory metadata = abi.encode(
            IP.MetadataV1({
                name: ipName,
                hash: "",
                registrationDate: uint64(block.timestamp),
                registrant: msg.sender,
                uri: ""
            })
        );

        address ipID = IPA_REGISTRY.register(block.chainid, address(NFT), tokenId, IP_RESOLVER, true, metadata);

        TokenModelInfo memory tokenModelInfo = TokenModelInfo({
            tokenId: tokenId,
            owner: msg.sender,
            ipId: ipID,
            modelInfo: modelInfo
        });

        _tokenModelInfos[tokenId] = tokenModelInfo;

        return ipID;
    }


    function getModelInfo(uint256 tokenId) public view returns (TokenModelInfo memory) {
        return _tokenModelInfos[tokenId];
    }

    function getAllModelInfo() public view returns (TokenModelInfo[] memory) {
        uint256 totalSupply = NFT.getTotalSupply();
        TokenModelInfo[] memory modelsInfo = new TokenModelInfo[](totalSupply);
        for (uint256 i = 0; i < totalSupply; i++) {
            uint256 tokenId = NFT.getTokenByIndex(i);
            TokenModelInfo memory modelInfo = getModelInfo(tokenId);
            modelsInfo[i] = modelInfo;
        }
        return modelsInfo;
    }
}