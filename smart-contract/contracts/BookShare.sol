// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import {ERC1155} from 'solmate/src/tokens/ERC1155.sol';
import "./IBookShare.sol";
//6909 need to check
error Unauthorized();

contract BookShare is ERC1155, IBookShare {
    
    uint256 public assetIndex;
    mapping(uint256 => Asset) public assets;
    mapping(address => uint256[]) public userAssets;
    mapping(string => uint256) public txToAssetId;
    mapping(uint256 => uint256) public totalSupply;
    mapping(uint256 => uint256) public pool;

    uint256 public constant CREATOR_PREMINT = 1 ether; // 1e18
    uint256 public constant CREATOR_FEE_PERCENT = 0.05 ether; // 5%

    function create(string calldata _title, string calldata arTxId) public {
        require(txToAssetId[arTxId] == 0, 'Asset already exists');
        uint256 newAssetId = assetIndex;
        assets[newAssetId] = Asset(newAssetId, _title, arTxId, msg.sender);
        userAssets[msg.sender].push(newAssetId);
        txToAssetId[arTxId] = newAssetId;
        totalSupply[newAssetId] += CREATOR_PREMINT;
        assetIndex = newAssetId + 1;
        _mint(msg.sender, newAssetId, CREATOR_PREMINT, '');
        emit Create(newAssetId, msg.sender, arTxId);
        emit Trade(TradeType.Mint, newAssetId, msg.sender, CREATOR_PREMINT, 0, 0);
    }


    function checkUserShareIsLagerThanOne(uint256 assetId) public view returns (bool) {
        return balanceOf[msg.sender][assetId] > 1;
    }

    function _curve(uint256 x) private pure returns (uint256) {
        return x <= CREATOR_PREMINT ? 0 : ((x - CREATOR_PREMINT) * (x - CREATOR_PREMINT) * (x - CREATOR_PREMINT));
    }

    function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) {
        return (_curve(supply + amount) - _curve(supply)) / 1 ether / 1 ether / 50_000;
    }

    function getBuyPrice(uint256 assetId, uint256 amount) public view returns (uint256) {
        return getPrice(totalSupply[assetId], amount);
    }

    function getSellPrice(uint256 assetId, uint256 amount) public view returns (uint256) {
        return getPrice(totalSupply[assetId] - amount, amount);
    }

    function getBuyPriceAfterFee(uint256 assetId, uint256 amount) public view returns (uint256) {
        uint256 price = getBuyPrice(assetId, amount);
        uint256 creatorFee = (price * CREATOR_FEE_PERCENT) / 1 ether;
        return price + creatorFee;
    }

    function getSellPriceAfterFee(uint256 assetId, uint256 amount) public view returns (uint256) {
        uint256 price = getSellPrice(assetId, amount);
        uint256 creatorFee = (price * CREATOR_FEE_PERCENT) / 1 ether;
        return price - creatorFee;
    }

    function buy(uint256 assetId, uint256 amount) public payable {
        require(assetId < assetIndex, 'Asset does not exist');
        uint256 price = getBuyPrice(assetId, amount);
        uint256 creatorFee = (price * CREATOR_FEE_PERCENT) / 1 ether;
        require(msg.value >= price + creatorFee, 'Insufficient payment');
        totalSupply[assetId] += amount;
        pool[assetId] += price;
        _mint(msg.sender, assetId, amount, '');
        emit Trade(TradeType.Buy, assetId, msg.sender, amount, price, creatorFee);
        (bool creatorFeeSent, ) = payable(assets[assetId].creator).call{value: creatorFee}('');
        require(creatorFeeSent, 'Failed to send Ether');
    }

    function sell(uint256 assetId, uint256 amount) public {
        require(assetId < assetIndex, 'Asset does not exist');
        require(balanceOf[msg.sender][assetId] >= amount, 'Insufficient balance');
        uint256 supply = totalSupply[assetId];
        require(supply - amount >= CREATOR_PREMINT, 'Supply not allowed below premint amount');
        uint256 price = getSellPrice(assetId, amount);
        uint256 creatorFee = (price * CREATOR_FEE_PERCENT) / 1 ether;
        _burn(msg.sender, assetId, amount);
        totalSupply[assetId] = supply - amount;
        pool[assetId] -= price;
        emit Trade(TradeType.Sell, assetId, msg.sender, amount, price, creatorFee);
        (bool sent, ) = payable(msg.sender).call{value: price - creatorFee}('');
        (bool creatorFeeSent, ) = payable(assets[assetId].creator).call{value: creatorFee}('');
        require(sent && creatorFeeSent, 'Failed to send Ether');
    }

    function uri(uint256 id) public view override returns (string memory) {
        return assets[id].arTxId;
    }
}
