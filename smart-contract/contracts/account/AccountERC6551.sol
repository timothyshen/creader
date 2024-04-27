// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0;  // Specifies the version of the Solidity compiler the code should be compiled with.

// Import statements for various interfaces and libraries required by the contract.
import '../ERC6551/interfaces/IERC6551Account.sol';
import '../ERC6551/lib/ERC6551AccountLib.sol';

import '@openzeppelin/contracts/utils/introspection/IERC165.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';
import '@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol';
import '@openzeppelin/contracts/interfaces/IERC1271.sol';
import '@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol';


// Definition of the AccountERC6551 contract which implements multiple interfaces.
contract AccountERC6551 is IERC165, IERC1271, IERC6551Account {
    
    // Custom error definitions.
    error NotAuthorized();
    error OwnershipCycle();

    // Method for executing a call on behalf of the token's owner.
    function executeCall(address to, uint256 value, bytes calldata data) external payable returns (bytes memory) {
        emit TransactionExecuted(to, value, data);  // Emitting an event upon execution.

        return _call(to, value, data);  // Internal function call.
    }

    // Method to obtain the owner of the token.
    function owner() public view returns (address) {
        (uint256 chainId, address tokenContract, uint256 tokenId) = ERC6551AccountLib.token();

        if (chainId != block.chainid) return address(0);  // Validate chain ID.

        return IERC721(tokenContract).ownerOf(tokenId);  // Return the owner of the token.
    }

    // Method to obtain token information.
    function token() external view returns (uint256 chainId, address tokenContract, uint256 tokenId) {
        return ERC6551AccountLib.token();  // Return token information from the library.
    }

    // Receive ether.
    receive() external payable {}

    // Fallback function to accept ether.
    fallback() external payable {}

    //++++++++++++++++++++++++++++Support Function+++++++++++++++++++++++++++++++++++++++++++++

    // Method to check the support for certain interfaces.
    function supportsInterface(bytes4 interfaceId) public pure override returns (bool) {
        // Checking against supported interfaces.
        bool defaultSupport = interfaceId == type(IERC165).interfaceId ||
            interfaceId == type(IERC1155Receiver).interfaceId ||
            interfaceId == type(IERC6551Account).interfaceId;

        if (defaultSupport) return true;
        return false;
    }

    //++++++++++++++++++++++++++++ERC1155Receiver+++++++++++++++++++++++++++++++++++++++++++++

    // Method to receive ERC1155 tokens.

    function onERC1155Received(address, address, uint256, uint256, bytes memory)
        public
        virtual
        returns (bytes4)
    {
        return this.onERC1155Received.selector;
    }

    // Method to validate a signature against the owner's address.
    function isValidSignature(bytes32 hash, bytes memory signature) external view returns (bytes4 magicValue) {
        address _owner = owner();  // Obtain the owner's address.
        // Default - check if signature is valid for account owner.
        if (SignatureChecker.isValidSignatureNow(_owner, hash, signature)) {
            return IERC1271.isValidSignature.selector;
        }

        return '';
    }

    // Internal method to execute a call.
    function _call(address to, uint256 value, bytes calldata data) internal returns (bytes memory result) {
        bool success;
        (success, result) = to.call{value: value}(data);  // Execute call.

        if (!success) {
            assembly {
                revert(add(result, 32), mload(result))  // Revert on failure.
            }
        }
    }
}
