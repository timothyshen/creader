// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

import "@story-protocol/protocol-core/contracts/registries/IPAssetRegistry.sol";
import "@story-protocol/protocol-core/contracts/modules/licensing/LicensingModule.sol";
import "@story-protocol/protocol-core/contracts/modules/licensing/PILicenseTemplate.sol";

import "./LicenseNFT.sol";
import "../shares/interface/IBodhi.sol";

/// @notice Mint a License Token from Programmable IP License Terms attached to an IP Account.
contract IPALicenseToken {
    IPAssetRegistry public immutable IP_ASSET_REGISTRY;
    LicensingModule public immutable LICENSING_MODULE;
    PILicenseTemplate public immutable PIL_TEMPLATE;
    IBodhi public immutable BODHI;

    constructor(
        address ipAssetRegistry,
        address licensingModule,
        address pilTemplate,
        address bodhi
    ) {
        IP_ASSET_REGISTRY = IPAssetRegistry(ipAssetRegistry);
        LICENSING_MODULE = LicensingModule(licensingModule);
        PIL_TEMPLATE = PILicenseTemplate(pilTemplate);
        BODHI = IBodhi(bodhi);
    }

    modifier onlyAssetMoreThanFive(address user, uint256 assetId) {
        require(
            BODHI.checkIfUserHasShares(user, assetId),
            "Asset must have more than 5 tokens"
        );
        _;
    }

    function mintLicenseToken(
        uint256 assetId,
        address ipId,
        uint8 licenseTermsId,
        address ltRecipient
    )
        external
        onlyAssetMoreThanFive(msg.sender, assetId)
        returns (uint256 tokenId, uint256 startLicenseTokenId)
    {
        LICENSING_MODULE.attachLicenseTerms(
            ipId,
            address(PIL_TEMPLATE),
            licenseTermsId
        );

        // Then, mint a License Token from the attached license terms.
        // Note that the License Token is minted to the ltRecipient.
        startLicenseTokenId = LICENSING_MODULE.mintLicenseTokens({
            licensorIpId: ipId,
            licenseTemplate: address(PIL_TEMPLATE),
            licenseTermsId: licenseTermsId,
            amount: 1,
            receiver: ltRecipient,
            royaltyContext: "" // for PIL, royaltyContext is empty string
        });

        //TODO: need to double check on the license token id
        uint256[] memory carl_license_from_root_alice = new uint256[](
            licenseTermsId
        );

        LICENSING_MODULE.registerDerivativeWithLicenseTokens(
            ipId,
            carl_license_from_root_alice,
            "" // for PIL, royaltyContext is empty string
        );
    }
}
