// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

interface ICreaderToken is IERC20 {
    function mint(address to, uint256 amount) external;
}
