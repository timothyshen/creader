// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

import "@story-protocol/protocol-core/contracts/registries/IPAssetRegistry.sol";
import "@story-protocol/protocol-core/contracts/modules/licensing/LicensingModule.sol";
import "@story-protocol/protocol-core/contracts/modules/licensing/PILicenseTemplate.sol";
import "../shares/interface/IBodhi.sol";
import {SimpleNFT} from "./SimpleNFT.sol";

/// @title IPALicenseToken
/// @notice Mint a License Token from Programmable IP License Terms attached to an IP Account.
contract IPALicenseToken {
    IPAssetRegistry public immutable IP_ASSET_REGISTRY;
    LicensingModule public immutable LICENSING_MODULE;
    PILicenseTemplate public immutable PIL_TEMPLATE;
    IBodhi public immutable BODHI;
    SimpleNFT public immutable SNFT;

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
        address ipAssetRegistry,
        address licensingModule,
        address pilTemplate
    ) {
        IP_ASSET_REGISTRY = IPAssetRegistry(ipAssetRegistry);
        LICENSING_MODULE = LicensingModule(licensingModule);
        PIL_TEMPLATE = PILicenseTemplate(pilTemplate);
    }

    // function mintLicenseTokenCopyright(
    //     address ipId,
    //     uint8 licenseTermsId,
    //     address ltRecipient,
    //     uint256 remixType
    // ) external returns (uint256 tokenId, uint256 startLicenseTokenId) {
    //     require(remixType <= uint256(RemixType.SOUND), "Invalid RemixType");
    //     tokenId = SNFT.mint(address(this));

    //     LICENSING_MODULE.attachLicenseTerms(ipId, address(PIL_TEMPLATE), 1);

    //     // Mint a License Token from the attached license terms.
    //     // Note that the License Token is minted to the ltRecipient.
    //     startLicenseTokenId = LICENSING_MODULE.mintLicenseTokens({
    //         licensorIpId: ipId,
    //         licenseTemplate: address(PIL_TEMPLATE),
    //         licenseTermsId: licenseTermsId,
    //         amount: 1,
    //         receiver: ltRecipient,
    //         royaltyContext: ""
    //     });

    //     // Adding remix mapping
    //     remixTypes[ltRecipient][startLicenseTokenId] = RemixType(remixType);

    //     // TODO: need to double check on the license token id
    //     uint256[] memory licenseId = new uint256[](licenseTermsId);

    //     LICENSING_MODULE.registerDerivativeWithLicenseTokens(
    //         ipId,
    //         licenseId,
    //         ""
    //     );

    //     return (startLicenseTokenId, startLicenseTokenId);
    // }

    function mintLicenseTokenCopyright(
        address ipId,
        uint8 licenseTermsId,
        address ltRecipient,
        uint256 ltAmount
    ) external returns (address, uint256) {
        LICENSING_MODULE.attachLicenseTerms(ipId, address(PIL_TEMPLATE), 2);

        uint256 startLicenseTokenId = LICENSING_MODULE.mintLicenseTokens({
            licensorIpId: ipId,
            licenseTemplate: address(PIL_TEMPLATE),
            licenseTermsId: 2,
            amount: ltAmount,
            receiver: ltRecipient,
            royaltyContext: "" // for PIL, royaltyContext is empty string
        });

        return (ipId, startLicenseTokenId);
    }
}
