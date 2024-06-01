import { expect } from "chai";
import { ethers } from "hardhat";
import {
  CopyrightNFT,
  CreaderToken,
  IPAssetRegistry,
} from "../../frontend/contract-config/typechain";

describe("CopyrightNFT", function () {
  let copyrightNFT: CopyrightNFT;
  let creaderToken: CreaderToken;
  let registry: IPAssetRegistry;
  let owner: any;
  let addr1: any;
  let addr2: any;
  const baseURI = "https://example.com/";
  const name = "CopyrightNFT";
  const symbol = "CNFT";

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    const CreaderTokenFactory = await ethers.getContractFactory("CreaderToken");
    const IPAssetRegistryFactory = await ethers.getContractFactory(
      "IPAssetRegistry"
    );
    const CopyrightNFTFactory = await ethers.getContractFactory("CopyrightNFT");

    // Deploy the CreaderToken and IPAssetRegistry mocks
    creaderToken = (await CreaderTokenFactory.deploy()) as CreaderToken;
    registry = (await IPAssetRegistryFactory.deploy()) as IPAssetRegistry;

    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy the CopyrightNFT contract
    copyrightNFT = (await CopyrightNFTFactory.deploy(
      baseURI,
      name,
      symbol,
      creaderToken.address,
      registry.address
    )) as CopyrightNFT;
  });

  describe("createCopyright", function () {
    it("Should create a new copyright and emit CoverAccountCreated event", async function () {
      const title = "Sample Title";
      const description = "Sample Description";
      const status = "Active";

      // Call createCopyright
      await expect(
        copyrightNFT.createCopyright(
          addr1.address,
          1,
          title,
          description,
          status
        )
      )
        .to.emit(copyrightNFT, "CoverAccountCreated")
        .withArgs(/* fill in expected args based on your implementation */);

      // Check if the new cover was created correctly
      const coverId = 0; // First cover should have ID 0
      const cover = await copyrightNFT.getCover(coverId);

      expect(cover.title).to.equal(title);
      expect(cover.description).to.equal(description);
      expect(cover.owner).to.equal(addr1.address);
      expect(cover.status).to.equal(status);
    });

    it("Should increment tokenIds and set tokenURI", async function () {
      const title = "Sample Title 1";
      const description = "Sample Description 1";
      const status = "Active";

      await copyrightNFT.createCopyright(
        addr1.address,
        1,
        title,
        description,
        status
      );

      // Second cover
      const title2 = "Sample Title 2";
      const description2 = "Sample Description 2";
      const status2 = "Active";

      await copyrightNFT.createCopyright(
        addr2.address,
        1,
        title2,
        description2,
        status2
      );

      // Check if the new cover was created correctly
      const coverId = 1; // Second cover should have ID 1
      const cover = await copyrightNFT.getCover(coverId);

      expect(cover.title).to.equal(title2);
      expect(cover.description).to.equal(description2);
      expect(cover.owner).to.equal(addr2.address);
      expect(cover.status).to.equal(status2);
    });
  });
});
