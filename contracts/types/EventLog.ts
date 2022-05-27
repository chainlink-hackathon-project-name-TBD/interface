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
} from 'ethers';
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common';

export declare namespace EventLog {
  export type EventStruct = {
    eventGameAddress: string;
    eventOwner: string;
    eventName: string;
    numberOfTickets: BigNumberish;
    ticketPrice: BigNumberish;
    totalUsers: BigNumberish;
    status: BigNumberish;
  };

  export type EventStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    number
  ] & {
    eventGameAddress: string;
    eventOwner: string;
    eventName: string;
    numberOfTickets: BigNumber;
    ticketPrice: BigNumber;
    totalUsers: BigNumber;
    status: number;
  };
}

export interface EventLogInterface extends utils.Interface {
  functions: {
    '_addCreatedEvent(address,uint256)': FunctionFragment;
    '_addRegisteredEvent(address,uint256)': FunctionFragment;
    '_addWinner(uint256,address)': FunctionFragment;
    '_gameEnd(uint256)': FunctionFragment;
    '_gameStart(uint256)': FunctionFragment;
    '_isWinner(uint256,address)': FunctionFragment;
    '_logEvent(uint256,address,address,string,uint256,uint256)': FunctionFragment;
    '_updateName(uint256,string)': FunctionFragment;
    '_updatePrice(uint256,uint256)': FunctionFragment;
    '_updateTickets(uint256,uint256)': FunctionFragment;
    'getCreatedEvents(address)': FunctionFragment;
    'getEvent(uint256)': FunctionFragment;
    'getEventAddress(uint256)': FunctionFragment;
    'getEventName(uint256)': FunctionFragment;
    'getNumberOfTickets(uint256)': FunctionFragment;
    'getOpenEvents()': FunctionFragment;
    'getRegisteredEvents(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | '_addCreatedEvent'
      | '_addRegisteredEvent'
      | '_addWinner'
      | '_gameEnd'
      | '_gameStart'
      | '_isWinner'
      | '_logEvent'
      | '_updateName'
      | '_updatePrice'
      | '_updateTickets'
      | 'getCreatedEvents'
      | 'getEvent'
      | 'getEventAddress'
      | 'getEventName'
      | 'getNumberOfTickets'
      | 'getOpenEvents'
      | 'getRegisteredEvents'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: '_addCreatedEvent',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: '_addRegisteredEvent',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: '_addWinner',
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: '_gameEnd',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: '_gameStart',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: '_isWinner',
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: '_logEvent',
    values: [BigNumberish, string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: '_updateName',
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: '_updatePrice',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: '_updateTickets',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getCreatedEvents',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'getEvent',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getEventAddress',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getEventName',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getNumberOfTickets',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getOpenEvents',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getRegisteredEvents',
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: '_addCreatedEvent',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: '_addRegisteredEvent',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: '_addWinner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: '_gameEnd', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: '_gameStart', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: '_isWinner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: '_logEvent', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: '_updateName',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: '_updatePrice',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: '_updateTickets',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getCreatedEvents',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'getEvent', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getEventAddress',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getEventName',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getNumberOfTickets',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getOpenEvents',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getRegisteredEvents',
    data: BytesLike
  ): Result;

  events: {
    'GameEnded(address,address,uint256)': EventFragment;
    'GameStarted(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'GameEnded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'GameStarted'): EventFragment;
}

export interface GameEndedEventObject {
  gameAddress: string;
  owner: string;
  timeStarted: BigNumber;
}
export type GameEndedEvent = TypedEvent<
  [string, string, BigNumber],
  GameEndedEventObject
>;

export type GameEndedEventFilter = TypedEventFilter<GameEndedEvent>;

export interface GameStartedEventObject {
  gameAddress: string;
  owner: string;
  timeStarted: BigNumber;
}
export type GameStartedEvent = TypedEvent<
  [string, string, BigNumber],
  GameStartedEventObject
>;

export type GameStartedEventFilter = TypedEventFilter<GameStartedEvent>;

export interface EventLog extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventLogInterface;

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
    _addCreatedEvent(
      _userAddress: string,
      _eventId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _addRegisteredEvent(
      _userAddress: string,
      _eventId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _addWinner(
      _eventId: BigNumberish,
      _winner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _gameEnd(
      _eventId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _gameStart(
      _eventId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _isWinner(
      _eventId: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    _logEvent(
      _eventId: BigNumberish,
      _eventGameAddress: string,
      _eventOwner: string,
      _eventName: string,
      _numberOfTickets: BigNumberish,
      _ticketPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _updateName(
      _eventId: BigNumberish,
      _newName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _updatePrice(
      _eventId: BigNumberish,
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _updateTickets(
      _eventId: BigNumberish,
      _newTickets: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCreatedEvents(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[EventLog.EventStructOutput[]]>;

    getEvent(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[EventLog.EventStructOutput]>;

    getEventAddress(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getEventName(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getNumberOfTickets(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOpenEvents(
      overrides?: CallOverrides
    ): Promise<[EventLog.EventStructOutput[]]>;

    getRegisteredEvents(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[EventLog.EventStructOutput[]]>;
  };

  _addCreatedEvent(
    _userAddress: string,
    _eventId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _addRegisteredEvent(
    _userAddress: string,
    _eventId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _addWinner(
    _eventId: BigNumberish,
    _winner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _gameEnd(
    _eventId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _gameStart(
    _eventId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _isWinner(
    _eventId: BigNumberish,
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  _logEvent(
    _eventId: BigNumberish,
    _eventGameAddress: string,
    _eventOwner: string,
    _eventName: string,
    _numberOfTickets: BigNumberish,
    _ticketPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _updateName(
    _eventId: BigNumberish,
    _newName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _updatePrice(
    _eventId: BigNumberish,
    _newPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _updateTickets(
    _eventId: BigNumberish,
    _newTickets: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCreatedEvents(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<EventLog.EventStructOutput[]>;

  getEvent(
    _eventId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<EventLog.EventStructOutput>;

  getEventAddress(
    _eventId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getEventName(
    _eventId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getNumberOfTickets(
    _eventId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOpenEvents(
    overrides?: CallOverrides
  ): Promise<EventLog.EventStructOutput[]>;

  getRegisteredEvents(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<EventLog.EventStructOutput[]>;

  callStatic: {
    _addCreatedEvent(
      _userAddress: string,
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _addRegisteredEvent(
      _userAddress: string,
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _addWinner(
      _eventId: BigNumberish,
      _winner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    _gameEnd(_eventId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    _gameStart(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _isWinner(
      _eventId: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    _logEvent(
      _eventId: BigNumberish,
      _eventGameAddress: string,
      _eventOwner: string,
      _eventName: string,
      _numberOfTickets: BigNumberish,
      _ticketPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _updateName(
      _eventId: BigNumberish,
      _newName: string,
      overrides?: CallOverrides
    ): Promise<void>;

    _updatePrice(
      _eventId: BigNumberish,
      _newPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _updateTickets(
      _eventId: BigNumberish,
      _newTickets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getCreatedEvents(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<EventLog.EventStructOutput[]>;

    getEvent(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<EventLog.EventStructOutput>;

    getEventAddress(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getEventName(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getNumberOfTickets(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOpenEvents(
      overrides?: CallOverrides
    ): Promise<EventLog.EventStructOutput[]>;

    getRegisteredEvents(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<EventLog.EventStructOutput[]>;
  };

  filters: {
    'GameEnded(address,address,uint256)'(
      gameAddress?: string | null,
      owner?: string | null,
      timeStarted?: null
    ): GameEndedEventFilter;
    GameEnded(
      gameAddress?: string | null,
      owner?: string | null,
      timeStarted?: null
    ): GameEndedEventFilter;

    'GameStarted(address,address,uint256)'(
      gameAddress?: string | null,
      owner?: string | null,
      timeStarted?: null
    ): GameStartedEventFilter;
    GameStarted(
      gameAddress?: string | null,
      owner?: string | null,
      timeStarted?: null
    ): GameStartedEventFilter;
  };

  estimateGas: {
    _addCreatedEvent(
      _userAddress: string,
      _eventId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _addRegisteredEvent(
      _userAddress: string,
      _eventId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _addWinner(
      _eventId: BigNumberish,
      _winner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _gameEnd(
      _eventId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _gameStart(
      _eventId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _isWinner(
      _eventId: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _logEvent(
      _eventId: BigNumberish,
      _eventGameAddress: string,
      _eventOwner: string,
      _eventName: string,
      _numberOfTickets: BigNumberish,
      _ticketPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _updateName(
      _eventId: BigNumberish,
      _newName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _updatePrice(
      _eventId: BigNumberish,
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _updateTickets(
      _eventId: BigNumberish,
      _newTickets: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCreatedEvents(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEvent(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEventAddress(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEventName(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfTickets(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOpenEvents(overrides?: CallOverrides): Promise<BigNumber>;

    getRegisteredEvents(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _addCreatedEvent(
      _userAddress: string,
      _eventId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _addRegisteredEvent(
      _userAddress: string,
      _eventId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _addWinner(
      _eventId: BigNumberish,
      _winner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _gameEnd(
      _eventId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _gameStart(
      _eventId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _isWinner(
      _eventId: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _logEvent(
      _eventId: BigNumberish,
      _eventGameAddress: string,
      _eventOwner: string,
      _eventName: string,
      _numberOfTickets: BigNumberish,
      _ticketPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _updateName(
      _eventId: BigNumberish,
      _newName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _updatePrice(
      _eventId: BigNumberish,
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _updateTickets(
      _eventId: BigNumberish,
      _newTickets: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCreatedEvents(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEvent(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEventAddress(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEventName(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumberOfTickets(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOpenEvents(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRegisteredEvents(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
