/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleNFT,
  SimpleNFTInterface,
} from "../../../contracts/creader-io/SimpleNFT";

const _abi = [
  {
    inputs: [],
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
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f53696d706c654e465400000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f534e46540000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000324565b508060019081620000a1919062000324565b5050506200040b565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012c57607f821691505b602082108103620001425762000141620000e4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200016d565b620001b886836200016d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000205620001ff620001f984620001d0565b620001da565b620001d0565b9050919050565b6000819050919050565b6200022183620001e4565b6200023962000230826200020c565b8484546200017a565b825550505050565b600090565b6200025062000241565b6200025d81848462000216565b505050565b5b8181101562000285576200027960008262000246565b60018101905062000263565b5050565b601f821115620002d4576200029e8162000148565b620002a9846200015d565b81016020851015620002b9578190505b620002d1620002c8856200015d565b83018262000262565b50505b505050565b600082821c905092915050565b6000620002f960001984600802620002d9565b1980831691505092915050565b6000620003148383620002e6565b9150826002028217905092915050565b6200032f82620000aa565b67ffffffffffffffff8111156200034b576200034a620000b5565b5b62000357825462000113565b6200036482828562000289565b600060209050601f8311600181146200039c576000841562000387578287015190505b62000393858262000306565b86555062000403565b601f198416620003ac8662000148565b60005b82811015620003d657848901518255600182019150602085019450602081019050620003af565b86831015620003f65784890151620003f2601f891682620002e6565b8355505b6001600288020188555050505b505050505050565b611e99806200041b6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636a6278421161008c578063a22cb46511610066578063a22cb4651461026f578063b88d4fde1461028b578063c87b56dd146102a7578063e985e9c5146102d7576100ea565b80636a627842146101f157806370a082311461022157806395d89b4114610251576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b6101096004803603810190610104919061166c565b610307565b60405161011691906116b4565b60405180910390f35b6101276103e9565b604051610134919061175f565b60405180910390f35b610157600480360381019061015291906117b7565b61047b565b6040516101649190611825565b60405180910390f35b6101876004803603810190610182919061186c565b610497565b005b6101a3600480360381019061019e91906118ac565b6104ad565b005b6101bf60048036038101906101ba91906118ac565b6105af565b005b6101db60048036038101906101d691906117b7565b6105cf565b6040516101e89190611825565b60405180910390f35b61020b600480360381019061020691906118ff565b6105e1565b604051610218919061193b565b60405180910390f35b61023b600480360381019061023691906118ff565b610609565b604051610248919061193b565b60405180910390f35b6102596106c3565b604051610266919061175f565b60405180910390f35b61028960048036038101906102849190611982565b610755565b005b6102a560048036038101906102a09190611af7565b61076b565b005b6102c160048036038101906102bc91906117b7565b610788565b6040516102ce919061175f565b60405180910390f35b6102f160048036038101906102ec9190611b7a565b6107f1565b6040516102fe91906116b4565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e257506103e182610885565b5b9050919050565b6060600080546103f890611be9565b80601f016020809104026020016040519081016040528092919081815260200182805461042490611be9565b80156104715780601f1061044657610100808354040283529160200191610471565b820191906000526020600020905b81548152906001019060200180831161045457829003601f168201915b5050505050905090565b6000610486826108ef565b5061049082610977565b9050919050565b6104a982826104a46109b4565b6109bc565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361051f5760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016105169190611825565b60405180910390fd5b6000610533838361052e6109b4565b6109ce565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105a9578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016105a093929190611c1a565b60405180910390fd5b50505050565b6105ca8383836040518060200160405280600081525061076b565b505050565b60006105da826108ef565b9050919050565b600080600090506105f28382610be8565b80806105fd90611c80565b91505080915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361067c5760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016106739190611825565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546106d290611be9565b80601f01602080910402602001604051908101604052809291908181526020018280546106fe90611be9565b801561074b5780601f106107205761010080835404028352916020019161074b565b820191906000526020600020905b81548152906001019060200180831161072e57829003601f168201915b5050505050905090565b6107676107606109b4565b8383610c06565b5050565b6107768484846104ad565b61078284848484610d75565b50505050565b6060610793826108ef565b50600061079e610f2c565b905060008151116107be57604051806020016040528060008152506107e9565b806107c884610f43565b6040516020016107d9929190611d04565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000806108fb83611011565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361096e57826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610965919061193b565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b6109c9838383600161104e565b505050565b6000806109da84611011565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610a1c57610a1b818486611213565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610aad57610a5e60008560008061104e565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610b30576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b610c028282604051806020016040528060008152506112d7565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c7757816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610c6e9190611825565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610d6891906116b4565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115610f26578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02610db96109b4565b8685856040518563ffffffff1660e01b8152600401610ddb9493929190611d7d565b6020604051808303816000875af1925050508015610e1757506040513d601f19601f82011682018060405250810190610e149190611dde565b60015b610e9b573d8060008114610e47576040519150601f19603f3d011682016040523d82523d6000602084013e610e4c565b606091505b506000815103610e9357836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610e8a9190611825565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610f2457836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610f1b9190611825565b60405180910390fd5b505b50505050565b606060405180602001604052806000815250905090565b606060006001610f52846112f3565b01905060008167ffffffffffffffff811115610f7157610f706119cc565b5b6040519080825280601f01601f191660200182016040528015610fa35781602001600182028036833780820191505090505b509050600082602001820190505b600115611006578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581610ffa57610ff9611e0b565b5b04945060008503610fb1575b819350505050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806110875750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156111bb576000611097846108ef565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561110257508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611115575061111381846107f1565b155b1561115757826040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815260040161114e9190611825565b60405180910390fd5b81156111b957838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b61121e838383611446565b6112d257600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361129357806040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161128a919061193b565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016112c9929190611e3a565b60405180910390fd5b505050565b6112e18383611507565b6112ee6000848484610d75565b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611351577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161134757611346611e0b565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061138e576d04ee2d6d415b85acef8100000000838161138457611383611e0b565b5b0492506020810190505b662386f26fc1000083106113bd57662386f26fc1000083816113b3576113b2611e0b565b5b0492506010810190505b6305f5e10083106113e6576305f5e10083816113dc576113db611e0b565b5b0492506008810190505b612710831061140b57612710838161140157611400611e0b565b5b0492506004810190505b6064831061142e576064838161142457611423611e0b565b5b0492506002810190505b600a831061143d576001810190505b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156114fe57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806114bf57506114be84846107f1565b5b806114fd57508273ffffffffffffffffffffffffffffffffffffffff166114e583610977565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036115795760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016115709190611825565b60405180910390fd5b6000611587838360006109ce565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146115fb5760006040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016115f29190611825565b60405180910390fd5b505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61164981611614565b811461165457600080fd5b50565b60008135905061166681611640565b92915050565b6000602082840312156116825761168161160a565b5b600061169084828501611657565b91505092915050565b60008115159050919050565b6116ae81611699565b82525050565b60006020820190506116c960008301846116a5565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156117095780820151818401526020810190506116ee565b60008484015250505050565b6000601f19601f8301169050919050565b6000611731826116cf565b61173b81856116da565b935061174b8185602086016116eb565b61175481611715565b840191505092915050565b600060208201905081810360008301526117798184611726565b905092915050565b6000819050919050565b61179481611781565b811461179f57600080fd5b50565b6000813590506117b18161178b565b92915050565b6000602082840312156117cd576117cc61160a565b5b60006117db848285016117a2565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061180f826117e4565b9050919050565b61181f81611804565b82525050565b600060208201905061183a6000830184611816565b92915050565b61184981611804565b811461185457600080fd5b50565b60008135905061186681611840565b92915050565b600080604083850312156118835761188261160a565b5b600061189185828601611857565b92505060206118a2858286016117a2565b9150509250929050565b6000806000606084860312156118c5576118c461160a565b5b60006118d386828701611857565b93505060206118e486828701611857565b92505060406118f5868287016117a2565b9150509250925092565b6000602082840312156119155761191461160a565b5b600061192384828501611857565b91505092915050565b61193581611781565b82525050565b6000602082019050611950600083018461192c565b92915050565b61195f81611699565b811461196a57600080fd5b50565b60008135905061197c81611956565b92915050565b600080604083850312156119995761199861160a565b5b60006119a785828601611857565b92505060206119b88582860161196d565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611a0482611715565b810181811067ffffffffffffffff82111715611a2357611a226119cc565b5b80604052505050565b6000611a36611600565b9050611a4282826119fb565b919050565b600067ffffffffffffffff821115611a6257611a616119cc565b5b611a6b82611715565b9050602081019050919050565b82818337600083830152505050565b6000611a9a611a9584611a47565b611a2c565b905082815260208101848484011115611ab657611ab56119c7565b5b611ac1848285611a78565b509392505050565b600082601f830112611ade57611add6119c2565b5b8135611aee848260208601611a87565b91505092915050565b60008060008060808587031215611b1157611b1061160a565b5b6000611b1f87828801611857565b9450506020611b3087828801611857565b9350506040611b41878288016117a2565b925050606085013567ffffffffffffffff811115611b6257611b6161160f565b5b611b6e87828801611ac9565b91505092959194509250565b60008060408385031215611b9157611b9061160a565b5b6000611b9f85828601611857565b9250506020611bb085828601611857565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611c0157607f821691505b602082108103611c1457611c13611bba565b5b50919050565b6000606082019050611c2f6000830186611816565b611c3c602083018561192c565b611c496040830184611816565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c8b82611781565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611cbd57611cbc611c51565b5b600182019050919050565b600081905092915050565b6000611cde826116cf565b611ce88185611cc8565b9350611cf88185602086016116eb565b80840191505092915050565b6000611d108285611cd3565b9150611d1c8284611cd3565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b6000611d4f82611d28565b611d598185611d33565b9350611d698185602086016116eb565b611d7281611715565b840191505092915050565b6000608082019050611d926000830187611816565b611d9f6020830186611816565b611dac604083018561192c565b8181036060830152611dbe8184611d44565b905095945050505050565b600081519050611dd881611640565b92915050565b600060208284031215611df457611df361160a565b5b6000611e0284828501611dc9565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000604082019050611e4f6000830185611816565b611e5c602083018461192c565b939250505056fea2646970667358221220d8683ecffe4969c854ce79b6d748f02d5ab1f80638c9b3fd7f6b22189307be7364736f6c63430008170033";

type SimpleNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleNFT__factory extends ContractFactory {
  constructor(...args: SimpleNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleNFT> {
    return super.deploy(overrides || {}) as Promise<SimpleNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SimpleNFT {
    return super.attach(address) as SimpleNFT;
  }
  override connect(signer: Signer): SimpleNFT__factory {
    return super.connect(signer) as SimpleNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleNFTInterface {
    return new utils.Interface(_abi) as SimpleNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleNFT {
    return new Contract(address, _abi, signerOrProvider) as SimpleNFT;
  }
}