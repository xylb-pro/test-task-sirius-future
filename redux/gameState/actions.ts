import * as types from './types';

export const setPause = (payload: boolean): types.GameActionsType => {
  return { type: types.SET_PAUSE, payload: { isOnPause: payload } };
};

export const setIsFirstGame = (payload: boolean): types.GameActionsType => {
  return { type: types.SET_IS_FIRST_GAME, payload: { isFirstGame: payload } };
};

export const changeStarsStorage = (
  payload: types.starsStorageType,
): types.GameActionsType => {
  return {
    type: types.CHANGE_STARS_STORAGE,
    payload: { starsStorage: payload },
  };
};

export const changeScore = (payload: number): types.GameActionsType => {
  return { type: types.CHANGE_SCORE, payload: { score: payload } };
};

export const changeTimer = (payload: number): types.GameActionsType => {
  return { type: types.CHANGE_TIMER, payload: { timer: payload } };
};

export const changeTimerStartValue = (
  payload: number,
): types.GameActionsType => {
  return {
    type: types.CHANGE_TIMER_START_VALUE,
    payload: { timerStartValue: payload },
  };
};

export const updateTimerInterval = (
  payload: NodeJS.Timeout,
): types.GameActionsType => {
  return {
    type: types.UPDATE_TIMER_INTERVAL,
    payload: { timerInterval: payload },
  };
};

export const updateStarsSpawnInterval = (
  payload: NodeJS.Timeout,
): types.GameActionsType => {
  return {
    type: types.UPDATE_STARS_SPAWN_INTERVAL,
    payload: { starsSpawnInterval: payload },
  };
};

export const increaseStarsCount = (payload: number): types.GameActionsType => {
  return { type: types.INCREASE_STARS_COUNT, payload: { starsCount: payload } };
};
