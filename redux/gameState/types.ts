import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../rootReducer';

export const SET_PAUSE = 'SET_PAUSE';
export const SET_IS_FIRST_GAME = 'SET_IS_FIRST_GAME';
export const CHANGE_STARS_STORAGE = 'CHANGE_STARS_STORAGE';
export const CHANGE_SCORE = 'CHANGE_SCORE';
export const SET_SCORE = 'SET_SCORE';
export const CHANGE_TIMER = 'CHANGE_TIMER';
export const SET_TIMER_START_VALUE = 'SET_TIMER_START_VALUE';
export const UPDATE_TIMER_INTERVAL = 'UPDATE_TIMER_INTERVAL';
export const UPDATE_STARS_SPAWN_INTERVAL = 'UPDATE_STARS_SPAWN_INTERVAL';
export const INCREASE_STARS_COUNT = 'INCREASE_STARS_COUNT';
export const SET_STARS_COUNT = 'SET_STARS_COUNT';
export const CREATE_STAR = 'CREATE_STAR';
export const DROP_STARS_STORAGE = 'DROP_STARS_STORAGE';
export const ON_CLICK_RESTART = 'ON_CLICK_RESTART';
export const ON_CLICK_START = 'ON_CLICK_START';
export const ON_CLICK_PAUSE = 'ON_CLICK_PAUSE';
export const CHANGE_ACTIVE_GAME_MODE = 'CHANGE_ACTIVE_GAME_MODE';
export const DELETE_STAR = 'DELETE_STAR';
export const SET_MAX_STAR_COUNT = 'SET_MAX_STAR_COUNT';

export type AsyncActionType = ThunkAction<
  void,
  RootState,
  unknown,
  Action<String>
>;

export type starType = { x: number; y: number; value: number; step: number };
export interface IGameState {
  starsStorage: starType[];
  starsCount: number;
  isOnPause: boolean;
  isFirstGame: boolean;
  score: number;
  timer: number;
  timerStartValue: number;
  timerInterval: NodeJS.Timeout;
  starsSpawnInterval: NodeJS.Timeout;
  activeGameMode: boolean;
  maxStarCount: number;
}

interface setPause {
  type: typeof SET_PAUSE;
  payload: { isOnPause: boolean };
}

interface setIsFirstGame {
  type: typeof SET_IS_FIRST_GAME;
  payload: { isFirstGame: boolean };
}

interface changeStarsStorage {
  type: typeof CHANGE_STARS_STORAGE;
  payload: { starsStorage: starType[] };
}
interface changeScore {
  type: typeof CHANGE_SCORE;
  payload: { score: number };
}

interface setScore {
  type: typeof SET_SCORE;
  payload: { score: number };
}

interface changeTimer {
  type: typeof CHANGE_TIMER;
  payload: { timer: number };
}

interface setTimerStartValue {
  type: typeof SET_TIMER_START_VALUE;
  payload: { timerStartValue: number };
}

interface updateTimerInterval {
  type: typeof UPDATE_TIMER_INTERVAL;
  payload: { timerInterval: NodeJS.Timeout };
}

interface updateStarsSpawnInterval {
  type: typeof UPDATE_STARS_SPAWN_INTERVAL;
  payload: { starsSpawnInterval: NodeJS.Timeout };
}

interface increaseStarsCount {
  type: typeof INCREASE_STARS_COUNT;
  payload: { starsCount: number };
}

interface setStarsCount {
  type: typeof SET_STARS_COUNT;
  payload: { starsCount: number };
}

interface createStar {
  type: typeof CREATE_STAR;
  payload: { starsStorage: starType[] };
}

interface dropStarsStorage {
  type: typeof DROP_STARS_STORAGE;
  payload: { starsStorage: starType[] };
}

interface onClickRestart {
  type: typeof ON_CLICK_RESTART;
}
interface onClickStart {
  type: typeof ON_CLICK_START;
}
interface onClickPause {
  type: typeof ON_CLICK_PAUSE;
}

interface changeActiveGameMode {
  type: typeof CHANGE_ACTIVE_GAME_MODE;
  payload: { activeGameMode: boolean };
}

interface deleteStar {
  type: typeof DELETE_STAR;
  payload: { starsStorage: starType[] };
}

interface setMaxStarCount {
  type: typeof SET_MAX_STAR_COUNT;
  payload: { maxStarCount: number };
}

export type GameActionsType =
  | setPause
  | setIsFirstGame
  | changeStarsStorage
  | changeScore
  | setScore
  | changeTimer
  | setTimerStartValue
  | updateTimerInterval
  | updateStarsSpawnInterval
  | increaseStarsCount
  | setStarsCount
  | createStar
  | dropStarsStorage
  | onClickRestart
  | onClickStart
  | onClickPause
  | changeActiveGameMode
  | deleteStar
  | setMaxStarCount;
