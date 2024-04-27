import "@story-protocol/core/interfaces/licensing/LicensingModule.sol"
import { StoryProtocolGateway } from "@story-protocol/periphery/StoryProtocolGateway.sol";
import { PILPolicy } from "@story-protocol/core/modules/licensing/PILPolicyFrameworkManager.sol";
import { IPAssetRegistry } from "@story-protocol/core/IPAssetRegistry.sol";

contract ExampleIPALicenseCreation {
   
	bytes ROYALTY_CONTEXT = "";
    StoryProtocolGateway public SPG;
    address public ROYALTY_POLICY;
    uint256 public MINTING_FEE;
    address public MINTING_FEE_TOKEN;
    
    constructor(address spg, address royaltyPolicy, uint256 mintingFee, uint256 mintingFeeToken) {
        SPG = spg;
        ROYALTY_POLICY = royaltyPolicy;
        MINTING_FEE = mintingFee;
        MINTING_FEE_TOKEN = mintingFeeToken;
    }
    
    function createLicense(
        PILPolicy memory. pilPolicy,
        address licensorIpId
    ) {
        spg.mintLicensePIL(pilPolicy, licensorIpId, 1, ROYATY_CONTEXT, MINTING_FEE, MINTING_FEE_TOKNE);
    }
}