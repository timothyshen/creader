// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title IBodhi
 * @dev Interface for the Bodhi contract.
 */
interface IBodhi {

    /**
     * @notice Creates a new asset.
     * @param arTxId The Arweave transaction ID associated with the asset.
     */
    function create(string calldata arTxId) external;

    /**
     * @notice Removes an existing asset.
     * @param assetId The ID of the asset to be removed.
     */
    function remove(uint256 assetId) external;

    /**
     * @notice Gets the asset IDs associated with an address.
     * @param addr The address to query for asset IDs.
     * @return An array of asset IDs associated with the address.
     */
    function getAssetIdsByAddress(address addr) external view returns (uint256[] memory);

    /**
     * @notice Gets the price for buying a certain amount of an asset.
     * @param assetId The ID of the asset.
     * @param amount The amount of the asset to buy.
     * @return The price for buying the specified amount of the asset.
     */
    function getBuyPrice(uint256 assetId, uint256 amount) external view returns (uint256);

    /**
     * @notice Gets the price for selling a certain amount of an asset.
     * @param assetId The ID of the asset.
     * @param amount The amount of the asset to sell.
     * @return The price for selling the specified amount of the asset.
     */
    function getSellPrice(uint256 assetId, uint256 amount) external view returns (uint256);

    /**
     * @notice Gets the buy price after adding the creator fee.
     * @param assetId The ID of the asset.
     * @param amount The amount of the asset to buy.
     * @return The price for buying the specified amount of the asset after adding the creator fee.
     */
    function getBuyPriceAfterFee(uint256 assetId, uint256 amount) external view returns (uint256);

    /**
     * @notice Gets the sell price after subtracting the creator fee.
     * @param assetId The ID of the asset.
     * @param amount The amount of the asset to sell.
     * @return The price for selling the specified amount of the asset after subtracting the creator fee.
     */
    function getSellPriceAfterFee(uint256 assetId, uint256 amount) external view returns (uint256);

    /**
     * @notice Buys a certain amount of an asset.
     * @param assetId The ID of the asset to buy.
     * @param amount The amount of the asset to buy.
     */
    function buy(uint256 assetId, uint256 amount) external payable;

    /**
     * @notice Sells a certain amount of an asset.
     * @param assetId The ID of the asset to sell.
     * @param amount The amount of the asset to sell.
     */
    function sell(uint256 assetId, uint256 amount) external;

    /**
     * @notice Gets the URI associated with an asset ID.
     * @param id The asset ID.
     * @return The URI associated with the asset ID.
     */
    function uri(uint256 id) external view returns (string memory);

    /**
     * @notice Checks if a user has shares in an asset.
     * @param user The address of the user.
     * @param assetId The ID of the asset.
     * @return True if the user has shares in the asset, false otherwise.
     */
    function hasShares(address user, uint256 assetId) external view returns (bool);


    function checkIfUserHasShares(address user, uint256 assetId) public view returns (bool);


    /// @dev Event emitted when an asset is created.
    event Create(uint256 indexed assetId, address indexed sender, string arTxId);

    /// @dev Event emitted when an asset is removed.
    event Remove(uint256 indexed assetId, address indexed sender);

    /// @dev Event emitted when a trade occurs.
    event Trade(
        TradeType indexed tradeType,
        uint256 indexed assetId,
        address indexed sender,
        uint256 tokenAmount,
        uint256 ethAmount,
        uint256 creatorFee
    );

    /// @dev Custom error for unauthorized access.
    error Unauthorized();

    /// @dev Enumeration of trade types.
    enum TradeType {
        Mint,
        Buy,
        Sell
    }
}
