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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface IBodhiInterface extends utils.Interface {
  functions: {
    "buy(uint256,uint256)": FunctionFragment;
    "checkIfUserHasShares(address,uint256)": FunctionFragment;
    "create(string)": FunctionFragment;
    "getAssetIdsByAddress(address)": FunctionFragment;
    "getBuyPrice(uint256,uint256)": FunctionFragment;
    "getBuyPriceAfterFee(uint256,uint256)": FunctionFragment;
    "getSellPrice(uint256,uint256)": FunctionFragment;
    "getSellPriceAfterFee(uint256,uint256)": FunctionFragment;
    "hasShares(address,uint256)": FunctionFragment;
    "remove(uint256)": FunctionFragment;
    "sell(uint256,uint256)": FunctionFragment;
    "uri(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buy"
      | "buy(uint256,uint256)"
      | "checkIfUserHasShares"
      | "checkIfUserHasShares(address,uint256)"
      | "create"
      | "create(string)"
      | "getAssetIdsByAddress"
      | "getAssetIdsByAddress(address)"
      | "getBuyPrice"
      | "getBuyPrice(uint256,uint256)"
      | "getBuyPriceAfterFee"
      | "getBuyPriceAfterFee(uint256,uint256)"
      | "getSellPrice"
      | "getSellPrice(uint256,uint256)"
      | "getSellPriceAfterFee"
      | "getSellPriceAfterFee(uint256,uint256)"
      | "hasShares"
      | "hasShares(address,uint256)"
      | "remove"
      | "remove(uint256)"
      | "sell"
      | "sell(uint256,uint256)"
      | "uri"
      | "uri(uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buy",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "buy(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "checkIfUserHasShares",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "checkIfUserHasShares(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "create(string)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetIdsByAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetIdsByAddress(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuyPrice",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuyPrice(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuyPriceAfterFee",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuyPriceAfterFee(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSellPrice",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSellPrice(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSellPriceAfterFee",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSellPriceAfterFee(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasShares",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasShares(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "remove(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "sell",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "sell(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "uri",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "uri(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buy(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkIfUserHasShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkIfUserHasShares(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "create(string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetIdsByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetIdsByAddress(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuyPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuyPrice(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuyPriceAfterFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuyPriceAfterFee(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSellPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSellPrice(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSellPriceAfterFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSellPriceAfterFee(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasShares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasShares(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remove(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sell", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sell(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uri(uint256)",
    data: BytesLike
  ): Result;

  events: {
    "Create(uint256,address,string)": EventFragment;
    "Remove(uint256,address)": EventFragment;
    "Trade(uint8,uint256,address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Create"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Create(uint256,address,string)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Remove"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Remove(uint256,address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Trade"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Trade(uint8,uint256,address,uint256,uint256,uint256)"
  ): EventFragment;
}

export interface CreateEventObject {
  assetId: BigNumber;
  sender: string;
  arTxId: string;
}
export type CreateEvent = TypedEvent<
  [BigNumber, string, string],
  CreateEventObject
>;

export type CreateEventFilter = TypedEventFilter<CreateEvent>;

export interface RemoveEventObject {
  assetId: BigNumber;
  sender: string;
}
export type RemoveEvent = TypedEvent<[BigNumber, string], RemoveEventObject>;

export type RemoveEventFilter = TypedEventFilter<RemoveEvent>;

export interface TradeEventObject {
  tradeType: number;
  assetId: BigNumber;
  sender: string;
  tokenAmount: BigNumber;
  ethAmount: BigNumber;
  creatorFee: BigNumber;
}
export type TradeEvent = TypedEvent<
  [number, BigNumber, string, BigNumber, BigNumber, BigNumber],
  TradeEventObject
>;

export type TradeEventFilter = TypedEventFilter<TradeEvent>;

export interface IBodhi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBodhiInterface;

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
    buy(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "buy(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checkIfUserHasShares(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "checkIfUserHasShares(address,uint256)"(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    create(
      arTxId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "create(string)"(
      arTxId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAssetIdsByAddress(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "getAssetIdsByAddress(address)"(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getBuyPrice(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getBuyPrice(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBuyPriceAfterFee(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getBuyPriceAfterFee(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSellPrice(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getSellPrice(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSellPriceAfterFee(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getSellPriceAfterFee(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hasShares(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "hasShares(address,uint256)"(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    remove(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "remove(uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sell(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "sell(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uri(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "uri(uint256)"(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  buy(
    assetId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "buy(uint256,uint256)"(
    assetId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checkIfUserHasShares(
    user: PromiseOrValue<string>,
    assetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "checkIfUserHasShares(address,uint256)"(
    user: PromiseOrValue<string>,
    assetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  create(
    arTxId: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "create(string)"(
    arTxId: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAssetIdsByAddress(
    addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getAssetIdsByAddress(address)"(
    addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getBuyPrice(
    assetId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getBuyPrice(uint256,uint256)"(
    assetId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBuyPriceAfterFee(
    assetId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getBuyPriceAfterFee(uint256,uint256)"(
    assetId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSellPrice(
    assetId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getSellPrice(uint256,uint256)"(
    assetId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSellPriceAfterFee(
    assetId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getSellPriceAfterFee(uint256,uint256)"(
    assetId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hasShares(
    user: PromiseOrValue<string>,
    assetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasShares(address,uint256)"(
    user: PromiseOrValue<string>,
    assetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  remove(
    assetId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "remove(uint256)"(
    assetId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sell(
    assetId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "sell(uint256,uint256)"(
    assetId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uri(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "uri(uint256)"(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    buy(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "buy(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    checkIfUserHasShares(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "checkIfUserHasShares(address,uint256)"(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    create(
      arTxId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "create(string)"(
      arTxId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAssetIdsByAddress(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getAssetIdsByAddress(address)"(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getBuyPrice(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBuyPrice(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBuyPriceAfterFee(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBuyPriceAfterFee(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellPrice(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSellPrice(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellPriceAfterFee(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSellPriceAfterFee(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasShares(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasShares(address,uint256)"(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    remove(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "remove(uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    sell(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "sell(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    uri(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "uri(uint256)"(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Create(uint256,address,string)"(
      assetId?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null,
      arTxId?: null
    ): CreateEventFilter;
    Create(
      assetId?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null,
      arTxId?: null
    ): CreateEventFilter;

    "Remove(uint256,address)"(
      assetId?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null
    ): RemoveEventFilter;
    Remove(
      assetId?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null
    ): RemoveEventFilter;

    "Trade(uint8,uint256,address,uint256,uint256,uint256)"(
      tradeType?: PromiseOrValue<BigNumberish> | null,
      assetId?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null,
      tokenAmount?: null,
      ethAmount?: null,
      creatorFee?: null
    ): TradeEventFilter;
    Trade(
      tradeType?: PromiseOrValue<BigNumberish> | null,
      assetId?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null,
      tokenAmount?: null,
      ethAmount?: null,
      creatorFee?: null
    ): TradeEventFilter;
  };

  estimateGas: {
    buy(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "buy(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checkIfUserHasShares(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkIfUserHasShares(address,uint256)"(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    create(
      arTxId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "create(string)"(
      arTxId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAssetIdsByAddress(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAssetIdsByAddress(address)"(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBuyPrice(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBuyPrice(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBuyPriceAfterFee(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBuyPriceAfterFee(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellPrice(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSellPrice(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellPriceAfterFee(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSellPriceAfterFee(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasShares(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasShares(address,uint256)"(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remove(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "remove(uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sell(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "sell(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uri(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "uri(uint256)"(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buy(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "buy(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checkIfUserHasShares(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkIfUserHasShares(address,uint256)"(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    create(
      arTxId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "create(string)"(
      arTxId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAssetIdsByAddress(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAssetIdsByAddress(address)"(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBuyPrice(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBuyPrice(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBuyPriceAfterFee(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBuyPriceAfterFee(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSellPrice(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSellPrice(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSellPriceAfterFee(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSellPriceAfterFee(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasShares(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasShares(address,uint256)"(
      user: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remove(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "remove(uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sell(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "sell(uint256,uint256)"(
      assetId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uri(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "uri(uint256)"(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}