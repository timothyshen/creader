// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

import "@story-protocol/protocol-core/contracts/modules/licensing/LicensingModule.sol";
import "@story-protocol/protocol-core/contracts/modules/licensing/PILicenseTemplate.sol";
import "@story-protocol/protocol-core/contracts/access/AccessController.sol";

/// @title IPALicenseToken
/// @notice Mint a License Token from Programmable IP License Terms attached to an IP Account.
contract IPALicenseToken {
    LicensingModule public immutable LICENSING_MODULE;
    PILicenseTemplate public immutable PIL_TEMPLATE;
    AccessController public immutable ACCESS_CONTROLLER;

    /// @notice Enum to represent the type of remix.
    enum RemixType {
        OBJECT,
        CHARACTER,
        SCENE,
        SOUND
    }

    /// @notice Mapping to store the RemixType for each token ID owned by an address.
    mapping(address => mapping(uint256 => RemixType)) public remixTypes;

    constructor(
        address licensingModule,
        address pilTemplate,
        address accessController
    ) {
        LICENSING_MODULE = LicensingModule(licensingModule);
        PIL_TEMPLATE = PILicenseTemplate(pilTemplate);
        ACCESS_CONTROLLER = AccessController(accessController);
    }

    function mintLicenseTokenCopyright(
        address ipId
    ) external returns (address) {
        ACCESS_CONTROLLER.setPermission(
            ipId,
            address(this),
            address(LICENSING_MODULE),
            bytes4(0x2A4130C0),
            1
        );

        LICENSING_MODULE.attachLicenseTerms(ipId, address(PIL_TEMPLATE), 1);

        return ipId;
    }
}