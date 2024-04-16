// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "./AccessToken/AccessTokenNFT.sol";
import "./AccessToken/MockERC721.sol";

contract RightsManagementFactory {
    address public owner;

    event NewRightsManagement(address indexed rightsManagement);

    mapping(address => address) public AccessTokenRightsManagement;

    constructor() {
        owner = msg.sender;
    }

    function createAccessManagement(
    ) external returns (address) {
        // Deploy the contract using `new`
        MockERC721 rightsManagement = new MockERC721();
        address rightsManagementAddress = address(rightsManagement);

        emit NewRightsManagement(rightsManagementAddress);

        AccessTokenRightsManagement[rightsManagementAddress] = msg.sender;

        return rightsManagementAddress;
    }
}
