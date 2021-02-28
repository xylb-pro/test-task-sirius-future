export const SET_PAUSE = 'SET_PAUSE';
export const SET_IS_FIRST_GAME = 'SET_IS_FIRST_GAME';
export const CHANGE_STARS_STORAGE = 'CHANGE_STARS_STORAGE';
export const CHANGE_SCORE = 'CHANGE_SCORE';
export const CHANGE_TIMER = 'CHANGE_TIMER';
export const CHANGE_TIMER_START_VALUE = 'CHANGE_TIMER_START_VALUE';
export const UPDATE_TIMER_INTERVAL = 'UPDATE_TIMER_INTERVAL';
export const UPDATE_STARS_SPAWN_INTERVAL = 'UPDATE_STARS_SPAWN_INTERVAL';
export const INCREASE_STARS_COUNT = 'INCREASE_STARS_COUNT';

export type starsStorageType = { x: number; y: number; value: number }[];

export interface IGameState {
  starsStorage: starsStorageType;
  starsCount: number;
  isOnPause: boolean;
  isFirstGame: boolean;
  score: number;
  timer: number;
  timerStartValue: number;
  timerInterval: NodeJS.Timeout;
  starsSpawnInterval: NodeJS.Timeout;
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
  payload: { starsStorage: starsStorageType };
}
interface changeScore {
  type: typeof CHANGE_SCORE;
  payload: { score: number };
}

interface changeTimer {
  type: typeof CHANGE_TIMER;
  payload: { timer: number };
}

interface changeTimerStartValue {
  type: typeof CHANGE_TIMER_START_VALUE;
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

export type GameActionsType =
  | setPause
  | setIsFirstGame
  | changeStarsStorage
  | changeScore
  | changeTimer
  | changeTimerStartValue
  | updateTimerInterval
  | updateStarsSpawnInterval
  | increaseStarsCount;
