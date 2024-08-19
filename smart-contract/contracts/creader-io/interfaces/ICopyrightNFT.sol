// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface ICopyrightNFT {
    struct Cover {
        uint256 id;
        string title;
        string description;
        string status;
        address owner;
        uint256 timestamp;
        address nftAccount;
    }

    event CoverCreation(
        string title,
        string description,
        address owner,
        string status,
        uint256 indexed CoverId
    );

    event CoverUpdate(
        uint256 indexed CoverId,
        string title,
        string description,
        string status
    );

    function createCopyright(
        address to,
        string memory title,
        string memory description,
        string memory status
    ) external returns (address);

    function updateCover(
        uint256 _id,
        string memory _title,
        string memory _description
    ) external returns (uint256);

    function getAllCoypright() external view returns (Cover[] memory);

    function getCover(uint256 _id) external view returns (Cover memory);

    function getAuthorCover(
        address _author
    ) external view returns (Cover[] memory);
}
