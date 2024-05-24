/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../../../common";

export interface IRoyaltyPolicyInterface extends utils.Interface {
  functions: {
    "onLicenseMinting(address,bytes,bytes)": FunctionFragment;
    "onLinkToParents(address,address[],bytes[],bytes)": FunctionFragment;
    "onRoyaltyPayment(address,address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "onLicenseMinting"
      | "onLicenseMinting(address,bytes,bytes)"
      | "onLinkToParents"
      | "onLinkToParents(address,address[],bytes[],bytes)"
      | "onRoyaltyPayment"
      | "onRoyaltyPayment(address,address,address,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "onLicenseMinting",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onLicenseMinting(address,bytes,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onLinkToParents",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onLinkToParents(address,address[],bytes[],bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onRoyaltyPayment",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onRoyaltyPayment(address,address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "onLicenseMinting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onLicenseMinting(address,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onLinkToParents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onLinkToParents(address,address[],bytes[],bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onRoyaltyPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onRoyaltyPayment(address,address,address,uint256)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IRoyaltyPolicy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRoyaltyPolicyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    onLicenseMinting(
      ipId: PromiseOrValue<string>,
      licenseData: PromiseOrValue<BytesLike>,
      externalData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "onLicenseMinting(address,bytes,bytes)"(
      ipId: PromiseOrValue<string>,
      licenseData: PromiseOrValue<BytesLike>,
      externalData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onLinkToParents(
      ipId: PromiseOrValue<string>,
      parentIpIds: PromiseOrValue<string>[],
      licenseData: PromiseOrValue<BytesLike>[],
      externalData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "onLinkToParents(address,address[],bytes[],bytes)"(
      ipId: PromiseOrValue<string>,
      parentIpIds: PromiseOrValue<string>[],
      licenseData: PromiseOrValue<BytesLike>[],
      externalData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onRoyaltyPayment(
      caller: PromiseOrValue<string>,
      ipId: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "onRoyaltyPayment(address,address,address,uint256)"(
      caller: PromiseOrValue<string>,
      ipId: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  onLicenseMinting(
    ipId: PromiseOrValue<string>,
    licenseData: PromiseOrValue<BytesLike>,
    externalData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "onLicenseMinting(address,bytes,bytes)"(
    ipId: PromiseOrValue<string>,
    licenseData: PromiseOrValue<BytesLike>,
    externalData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onLinkToParents(
    ipId: PromiseOrValue<string>,
    parentIpIds: PromiseOrValue<string>[],
    licenseData: PromiseOrValue<BytesLike>[],
    externalData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "onLinkToParents(address,address[],bytes[],bytes)"(
    ipId: PromiseOrValue<string>,
    parentIpIds: PromiseOrValue<string>[],
    licenseData: PromiseOrValue<BytesLike>[],
    externalData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onRoyaltyPayment(
    caller: PromiseOrValue<string>,
    ipId: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "onRoyaltyPayment(address,address,address,uint256)"(
    caller: PromiseOrValue<string>,
    ipId: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    onLicenseMinting(
      ipId: PromiseOrValue<string>,
      licenseData: PromiseOrValue<BytesLike>,
      externalData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "onLicenseMinting(address,bytes,bytes)"(
      ipId: PromiseOrValue<string>,
      licenseData: PromiseOrValue<BytesLike>,
      externalData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    onLinkToParents(
      ipId: PromiseOrValue<string>,
      parentIpIds: PromiseOrValue<string>[],
      licenseData: PromiseOrValue<BytesLike>[],
      externalData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "onLinkToParents(address,address[],bytes[],bytes)"(
      ipId: PromiseOrValue<string>,
      parentIpIds: PromiseOrValue<string>[],
      licenseData: PromiseOrValue<BytesLike>[],
      externalData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    onRoyaltyPayment(
      caller: PromiseOrValue<string>,
      ipId: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "onRoyaltyPayment(address,address,address,uint256)"(
      caller: PromiseOrValue<string>,
      ipId: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    onLicenseMinting(
      ipId: PromiseOrValue<string>,
      licenseData: PromiseOrValue<BytesLike>,
      externalData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "onLicenseMinting(address,bytes,bytes)"(
      ipId: PromiseOrValue<string>,
      licenseData: PromiseOrValue<BytesLike>,
      externalData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onLinkToParents(
      ipId: PromiseOrValue<string>,
      parentIpIds: PromiseOrValue<string>[],
      licenseData: PromiseOrValue<BytesLike>[],
      externalData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "onLinkToParents(address,address[],bytes[],bytes)"(
      ipId: PromiseOrValue<string>,
      parentIpIds: PromiseOrValue<string>[],
      licenseData: PromiseOrValue<BytesLike>[],
      externalData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onRoyaltyPayment(
      caller: PromiseOrValue<string>,
      ipId: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "onRoyaltyPayment(address,address,address,uint256)"(
      caller: PromiseOrValue<string>,
      ipId: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onLicenseMinting(
      ipId: PromiseOrValue<string>,
      licenseData: PromiseOrValue<BytesLike>,
      externalData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "onLicenseMinting(address,bytes,bytes)"(
      ipId: PromiseOrValue<string>,
      licenseData: PromiseOrValue<BytesLike>,
      externalData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onLinkToParents(
      ipId: PromiseOrValue<string>,
      parentIpIds: PromiseOrValue<string>[],
      licenseData: PromiseOrValue<BytesLike>[],
      externalData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "onLinkToParents(address,address[],bytes[],bytes)"(
      ipId: PromiseOrValue<string>,
      parentIpIds: PromiseOrValue<string>[],
      licenseData: PromiseOrValue<BytesLike>[],
      externalData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onRoyaltyPayment(
      caller: PromiseOrValue<string>,
      ipId: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "onRoyaltyPayment(address,address,address,uint256)"(
      caller: PromiseOrValue<string>,
      ipId: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}