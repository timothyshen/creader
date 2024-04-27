// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@story-protocol/core/contracts/registries/IPAssetRegistry.sol";
import "@story-protocol/core/contracts/lib/IP.sol";
import "@story-protocol/core/contracts/resolvers/IPResolver.sol";
import "./interface/IModelNFT.sol";

contract IPARemixRegistrar {
   
  uint256 public constant MIN_ROYALTY = 10;
  bytes ROYALTY_CONTEXT = "This is loyalty fee for the license.";
  IPResolver public resolver;
  IPAssetRegistry public immutable REGISTRY;
  
  constructor(address registry, address resolverAddr) {
    REGISTRY = IPAssetRegistry(registry);
    resolver = IPResolver(resolverAddr);
  }
  
  function remix(
  	    uint256[] calldata licenseIds,
  	    address tokenContract, 
        uint256 tokenId
	) public returns (address){
      bytes memory metadata = abi.encode(
        IP.MetadataV1({
          name: "name for your IP asset",
          hash:  bytes32("your IP asset content hash"),
          registrationDate: uint64(block.timestamp),
          registrant: msg.sender,
          uri: "https://yourip.xyz/metadata-regarding-its-ip"
        })
      );

      address ipAddress = REGISTRY.register(
        block.chainid,
        tokenContract,
        tokenId,
        address(resolver),
        true,
        metadata
      );
      return ipAddress;
  }
}
