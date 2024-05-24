/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LicenseNFT,
  LicenseNFTInterface,
} from "../../../contracts/creader-io/LicenseNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "originalNftId",
        type: "uint256",
      },
    ],
    name: "LicenseMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200288038038062002880833981810160405281019062000037919062000348565b33828281600090816200004b919062000618565b5080600190816200005d919062000618565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000d55760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000cc919062000744565b60405180910390fd5b620000e681620000ef60201b60201c565b50505062000761565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200021e82620001d3565b810181811067ffffffffffffffff8211171562000240576200023f620001e4565b5b80604052505050565b600062000255620001b5565b905062000263828262000213565b919050565b600067ffffffffffffffff821115620002865762000285620001e4565b5b6200029182620001d3565b9050602081019050919050565b60005b83811015620002be578082015181840152602081019050620002a1565b60008484015250505050565b6000620002e1620002db8462000268565b62000249565b9050828152602081018484840111156200030057620002ff620001ce565b5b6200030d8482856200029e565b509392505050565b600082601f8301126200032d576200032c620001c9565b5b81516200033f848260208601620002ca565b91505092915050565b60008060408385031215620003625762000361620001bf565b5b600083015167ffffffffffffffff811115620003835762000382620001c4565b5b620003918582860162000315565b925050602083015167ffffffffffffffff811115620003b557620003b4620001c4565b5b620003c38582860162000315565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200042057607f821691505b602082108103620004365762000435620003d8565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000461565b620004ac868362000461565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004f9620004f3620004ed84620004c4565b620004ce565b620004c4565b9050919050565b6000819050919050565b6200051583620004d8565b6200052d620005248262000500565b8484546200046e565b825550505050565b600090565b6200054462000535565b620005518184846200050a565b505050565b5b8181101562000579576200056d6000826200053a565b60018101905062000557565b5050565b601f821115620005c85762000592816200043c565b6200059d8462000451565b81016020851015620005ad578190505b620005c5620005bc8562000451565b83018262000556565b50505b505050565b600082821c905092915050565b6000620005ed60001984600802620005cd565b1980831691505092915050565b6000620006088383620005da565b9150826002028217905092915050565b6200062382620003cd565b67ffffffffffffffff8111156200063f576200063e620001e4565b5b6200064b825462000407565b620006588282856200057d565b600060209050601f8311600181146200069057600084156200067b578287015190505b620006878582620005fa565b865550620006f7565b601f198416620006a0866200043c565b60005b82811015620006ca57848901518255600182019150602085019450602081019050620006a3565b86831015620006ea5784890151620006e6601f891682620005da565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200072c82620006ff565b9050919050565b6200073e816200071f565b82525050565b60006020820190506200075b600083018462000733565b92915050565b61210f80620007716000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb465146102a4578063b88d4fde146102c0578063c87b56dd146102dc578063e985e9c51461030c578063f2fde38b1461033c5761010b565b806370a082311461022e578063715018a61461025e5780638da5cb5b1461026857806395d89b41146102865761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c65780636352211e146101e25780636a627842146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a600480360381019061012591906118e2565b610358565b604051610137919061192a565b60405180910390f35b61014861043a565b60405161015591906119d5565b60405180910390f35b61017860048036038101906101739190611a2d565b6104cc565b6040516101859190611a9b565b60405180910390f35b6101a860048036038101906101a39190611ae2565b6104e8565b005b6101c460048036038101906101bf9190611b22565b6104fe565b005b6101e060048036038101906101db9190611b22565b610600565b005b6101fc60048036038101906101f79190611a2d565b610620565b6040516102099190611a9b565b60405180910390f35b61022c60048036038101906102279190611b75565b610632565b005b61024860048036038101906102439190611b75565b6106a8565b6040516102559190611bb1565b60405180910390f35b610266610762565b005b610270610776565b60405161027d9190611a9b565b60405180910390f35b61028e6107a0565b60405161029b91906119d5565b60405180910390f35b6102be60048036038101906102b99190611bf8565b610832565b005b6102da60048036038101906102d59190611d6d565b610848565b005b6102f660048036038101906102f19190611a2d565b610865565b60405161030391906119d5565b60405180910390f35b61032660048036038101906103219190611df0565b6108ce565b604051610333919061192a565b60405180910390f35b61035660048036038101906103519190611b75565b610962565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104335750610432826109e8565b5b9050919050565b60606000805461044990611e5f565b80601f016020809104026020016040519081016040528092919081815260200182805461047590611e5f565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b5050505050905090565b60006104d782610a52565b506104e182610ada565b9050919050565b6104fa82826104f5610b17565b610b1f565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105705760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016105679190611a9b565b60405180910390fd5b6000610584838361057f610b17565b610b31565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105fa578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016105f193929190611e90565b60405180910390fd5b50505050565b61061b83838360405180602001604052806000815250610848565b505050565b600061062b82610a52565b9050919050565b61063a610d4b565b60006007600081548092919061064f90611ef6565b91905055905061065f8282610dd2565b808273ffffffffffffffffffffffffffffffffffffffff16827f1c4f7e5ec105d4583284909df12eaecb823be2a3bb93c78976f54d04d83ce49260405160405180910390a45050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361071b5760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016107129190611a9b565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61076a610d4b565b6107746000610ecb565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546107af90611e5f565b80601f01602080910402602001604051908101604052809291908181526020018280546107db90611e5f565b80156108285780601f106107fd57610100808354040283529160200191610828565b820191906000526020600020905b81548152906001019060200180831161080b57829003601f168201915b5050505050905090565b61084461083d610b17565b8383610f91565b5050565b6108538484846104fe565b61085f84848484611100565b50505050565b606061087082610a52565b50600061087b6112b7565b9050600081511161089b57604051806020016040528060008152506108c6565b806108a5846112ce565b6040516020016108b6929190611f7a565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61096a610d4b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109dc5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016109d39190611a9b565b60405180910390fd5b6109e581610ecb565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600080610a5e8361139c565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ad157826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610ac89190611bb1565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610b2c83838360016113d9565b505050565b600080610b3d8461139c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610b7f57610b7e81848661159e565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c1057610bc16000856000806113d9565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610c93576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b610d53610b17565b73ffffffffffffffffffffffffffffffffffffffff16610d71610776565b73ffffffffffffffffffffffffffffffffffffffff1614610dd057610d94610b17565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610dc79190611a9b565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e445760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610e3b9190611a9b565b60405180910390fd5b6000610e5283836000610b31565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ec65760006040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401610ebd9190611a9b565b60405180910390fd5b505050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361100257816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610ff99190611a9b565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110f3919061192a565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b11156112b1578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02611144610b17565b8685856040518563ffffffff1660e01b81526004016111669493929190611ff3565b6020604051808303816000875af19250505080156111a257506040513d601f19601f8201168201806040525081019061119f9190612054565b60015b611226573d80600081146111d2576040519150601f19603f3d011682016040523d82523d6000602084013e6111d7565b606091505b50600081510361121e57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016112159190611a9b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146112af57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016112a69190611a9b565b60405180910390fd5b505b50505050565b606060405180602001604052806000815250905090565b6060600060016112dd84611662565b01905060008167ffffffffffffffff8111156112fc576112fb611c42565b5b6040519080825280601f01601f19166020018201604052801561132e5781602001600182028036833780820191505090505b509050600082602001820190505b600115611391578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161138557611384612081565b5b0494506000850361133c575b819350505050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806114125750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b1561154657600061142284610a52565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561148d57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156114a0575061149e81846108ce565b155b156114e257826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016114d99190611a9b565b60405180910390fd5b811561154457838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6115a98383836117b5565b61165d57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361161e57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016116159190611bb1565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016116549291906120b0565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106116c0577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816116b6576116b5612081565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106116fd576d04ee2d6d415b85acef810000000083816116f3576116f2612081565b5b0492506020810190505b662386f26fc10000831061172c57662386f26fc10000838161172257611721612081565b5b0492506010810190505b6305f5e1008310611755576305f5e100838161174b5761174a612081565b5b0492506008810190505b612710831061177a5761271083816117705761176f612081565b5b0492506004810190505b6064831061179d576064838161179357611792612081565b5b0492506002810190505b600a83106117ac576001810190505b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561186d57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061182e575061182d84846108ce565b5b8061186c57508273ffffffffffffffffffffffffffffffffffffffff1661185483610ada565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118bf8161188a565b81146118ca57600080fd5b50565b6000813590506118dc816118b6565b92915050565b6000602082840312156118f8576118f7611880565b5b6000611906848285016118cd565b91505092915050565b60008115159050919050565b6119248161190f565b82525050565b600060208201905061193f600083018461191b565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561197f578082015181840152602081019050611964565b60008484015250505050565b6000601f19601f8301169050919050565b60006119a782611945565b6119b18185611950565b93506119c1818560208601611961565b6119ca8161198b565b840191505092915050565b600060208201905081810360008301526119ef818461199c565b905092915050565b6000819050919050565b611a0a816119f7565b8114611a1557600080fd5b50565b600081359050611a2781611a01565b92915050565b600060208284031215611a4357611a42611880565b5b6000611a5184828501611a18565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a8582611a5a565b9050919050565b611a9581611a7a565b82525050565b6000602082019050611ab06000830184611a8c565b92915050565b611abf81611a7a565b8114611aca57600080fd5b50565b600081359050611adc81611ab6565b92915050565b60008060408385031215611af957611af8611880565b5b6000611b0785828601611acd565b9250506020611b1885828601611a18565b9150509250929050565b600080600060608486031215611b3b57611b3a611880565b5b6000611b4986828701611acd565b9350506020611b5a86828701611acd565b9250506040611b6b86828701611a18565b9150509250925092565b600060208284031215611b8b57611b8a611880565b5b6000611b9984828501611acd565b91505092915050565b611bab816119f7565b82525050565b6000602082019050611bc66000830184611ba2565b92915050565b611bd58161190f565b8114611be057600080fd5b50565b600081359050611bf281611bcc565b92915050565b60008060408385031215611c0f57611c0e611880565b5b6000611c1d85828601611acd565b9250506020611c2e85828601611be3565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c7a8261198b565b810181811067ffffffffffffffff82111715611c9957611c98611c42565b5b80604052505050565b6000611cac611876565b9050611cb88282611c71565b919050565b600067ffffffffffffffff821115611cd857611cd7611c42565b5b611ce18261198b565b9050602081019050919050565b82818337600083830152505050565b6000611d10611d0b84611cbd565b611ca2565b905082815260208101848484011115611d2c57611d2b611c3d565b5b611d37848285611cee565b509392505050565b600082601f830112611d5457611d53611c38565b5b8135611d64848260208601611cfd565b91505092915050565b60008060008060808587031215611d8757611d86611880565b5b6000611d9587828801611acd565b9450506020611da687828801611acd565b9350506040611db787828801611a18565b925050606085013567ffffffffffffffff811115611dd857611dd7611885565b5b611de487828801611d3f565b91505092959194509250565b60008060408385031215611e0757611e06611880565b5b6000611e1585828601611acd565b9250506020611e2685828601611acd565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611e7757607f821691505b602082108103611e8a57611e89611e30565b5b50919050565b6000606082019050611ea56000830186611a8c565b611eb26020830185611ba2565b611ebf6040830184611a8c565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f01826119f7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611f3357611f32611ec7565b5b600182019050919050565b600081905092915050565b6000611f5482611945565b611f5e8185611f3e565b9350611f6e818560208601611961565b80840191505092915050565b6000611f868285611f49565b9150611f928284611f49565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b6000611fc582611f9e565b611fcf8185611fa9565b9350611fdf818560208601611961565b611fe88161198b565b840191505092915050565b60006080820190506120086000830187611a8c565b6120156020830186611a8c565b6120226040830185611ba2565b81810360608301526120348184611fba565b905095945050505050565b60008151905061204e816118b6565b92915050565b60006020828403121561206a57612069611880565b5b60006120788482850161203f565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006040820190506120c56000830185611a8c565b6120d26020830184611ba2565b939250505056fea26469706673582212208098cdcbc0703fa156c836ea5df492412c7a4a0a46f4d1e9b48c615a2157b86964736f6c63430008170033";

type LicenseNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LicenseNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LicenseNFT__factory extends ContractFactory {
  constructor(...args: LicenseNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LicenseNFT> {
    return super.deploy(name, symbol, overrides || {}) as Promise<LicenseNFT>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): LicenseNFT {
    return super.attach(address) as LicenseNFT;
  }
  override connect(signer: Signer): LicenseNFT__factory {
    return super.connect(signer) as LicenseNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LicenseNFTInterface {
    return new utils.Interface(_abi) as LicenseNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LicenseNFT {
    return new Contract(address, _abi, signerOrProvider) as LicenseNFT;
  }
}