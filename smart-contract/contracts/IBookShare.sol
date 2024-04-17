// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBookShare {
    event Create(uint256 indexed assetId, address indexed sender, string arTxId);
    event Remove(uint256 indexed assetId, address indexed sender);
    event Trade(
        TradeType indexed tradeType,
        uint256 indexed assetId,
        address indexed sender,
        uint256 tokenAmount,
        uint256 ethAmount,
        uint256 creatorFee
    );

    struct Asset {
        uint256 id;
        string title;
        string arTxId;
        address creator;
    }

    enum TradeType {
        Mint,
        Buy,
        Sell
    } // = 0, 1, 2

    function create(string calldata _title, string calldata arTxId) external;

    function checkUserShareIsLagerThanOne(uint256 assetId) external view returns (bool);
}