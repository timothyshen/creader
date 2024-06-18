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

    /**
     * @dev Initializes the contract by setting the required module addresses.
     * @param ipAssetRegistry The address of the IP Asset Registry contract.
     * @param licensingModule The address of the Licensing Module contract.
     * @param pilTemplate The address of the PI License Template contract.
     * @param bodhi The address of the Bodhi contract.
     */
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
        SNFT = new SimpleNFT();
    }

    /**
     * @dev Modifier to ensure the user has more than 5 tokens of a given asset.
     * @param user The address of the user.
     * @param assetId The ID of the asset.
     */
    modifier onlyAssetMoreThanFive(address user, uint256 assetId) {
        require(
            BODHI.checkIfUserHasShares(user, assetId),
            "Asset must have more than 5 tokens"
        );
        _;
    }

    /**
     * @notice Mints a License Token from attached license terms.
     * @dev Attaches license terms to an IP, then mints a License Token to the recipient.
     * @param ipId The IP ID to which the license terms will be attached.
     * @param licenseTermsId The ID of the license terms.
     * @param ltRecipient The address to receive the License Token.
     * @param remixType The type of remix as an integer.
     * @return tokenId The minted License Token ID.
     * @return startLicenseTokenId The starting License Token ID.
     */
    function mintLicenseToken(
        address ipId,
        uint8 licenseTermsId,
        address ltRecipient,
        uint256 remixType
    ) external returns (uint256 tokenId, uint256 startLicenseTokenId) {
        require(remixType <= uint256(RemixType.SOUND), "Invalid RemixType");
        tokenId = SNFT.mint(address(this));

        LICENSING_MODULE.attachLicenseTerms(ipId, address(SNFT), tokenId);

        // Mint a License Token from the attached license terms.
        // Note that the License Token is minted to the ltRecipient.
        startLicenseTokenId = LICENSING_MODULE.mintLicenseTokens({
            licensorIpId: ipId,
            licenseTemplate: address(PIL_TEMPLATE),
            licenseTermsId: licenseTermsId,
            amount: 1,
            receiver: ltRecipient,
            royaltyContext: ""
        });

        // Adding remix mapping
        remixTypes[ltRecipient][startLicenseTokenId] = RemixType(remixType);

        // TODO: need to double check on the license token id
        uint256[] memory licenseId = new uint256[](licenseTermsId);

        LICENSING_MODULE.registerDerivativeWithLicenseTokens(
            ipId,
            licenseId,
            ""
        );

        return (startLicenseTokenId, startLicenseTokenId);
    }
}
