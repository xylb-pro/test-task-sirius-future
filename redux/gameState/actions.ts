import {
  MAX_STAR_COUNT,
  MAX_X_POSITION,
  MAX_Y_POSITION,
  SPAWN_AREA,
  STAR_STEP,
  VALUE,
} from '../../utils/globalConstants';
import * as types from './types';

//ok
export const setPause = (payload: boolean): types.GameActionsType => {
  return { type: types.SET_PAUSE, payload: { isOnPause: payload } };
};

//ok
export const setIsFirstGame = (payload: boolean): types.GameActionsType => {
  return { type: types.SET_IS_FIRST_GAME, payload: { isFirstGame: payload } };
};

export const changeStarsStorage = (): types.AsyncActionType => {
  return (dispatch, getState) => {
    let starsStorage = getState().state.starsStorage;
    starsStorage = starsStorage
      .filter((el) => {
        if (el.y >= MAX_Y_POSITION) {
          dispatch(changeScore(el.value));
          dispatch(increaseStarsCount());
        }
        return el.y < MAX_Y_POSITION;
      })
      .map((el) => {
        return { ...el, y: el.y + STAR_STEP };
      });

    dispatch({
      type: types.CHANGE_STARS_STORAGE,
      payload: { starsStorage },
    });
    ``;
    if (starsStorage.length < MAX_STAR_COUNT) {
      dispatch(createStar());
    }
  };
};

export const changeScore = (payload: number): types.AsyncActionType => {
  return (dispatch, getState) => {
    dispatch({
      type: types.CHANGE_SCORE,
      payload: { score: getState().state.score + payload },
    });
  };
};

export const setScore = (payload: number): types.GameActionsType => {
  return {
    type: types.SET_SCORE,
    payload: { score: payload },
  };
};

export const changeTimer = (payload: number): types.GameActionsType => {
  return { type: types.CHANGE_TIMER, payload: { timer: payload } };
};

export const setTimerStartValue = (payload: number): types.GameActionsType => {
  return {
    type: types.SET_TIMER_START_VALUE,
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

//ok
export const increaseStarsCount = (): types.AsyncActionType => {
  return (dispatch, getState) => {
    dispatch({
      type: types.INCREASE_STARS_COUNT,
      payload: { starsCount: getState().state.starsCount + 1 },
    });
  };
};
//ok
export const setStarsCount = (payload: number): types.GameActionsType => {
  return { type: types.SET_STARS_COUNT, payload: { starsCount: payload } };
};

export const createStar = (): types.AsyncActionType => {
  return (dispatch, getState) => {
    let starsStorage = getState().state.starsStorage;
    const x: number = Math.floor(Math.random() * MAX_X_POSITION);
    const y: number = Math.floor(
      Math.random() * (SPAWN_AREA.max - SPAWN_AREA.min + 1) + SPAWN_AREA.min,
    );
    let value: number = VALUE.without;
    while (value === VALUE.without) {
      value = Math.floor(
        Math.random() * (VALUE.max - VALUE.min + 1) + VALUE.min,
      );
    }
    // if (starsStorage.length < MAX_STAR_COUNT) {
    starsStorage.push({ x, y, value });
    // }
    dispatch({
      type: types.CREATE_STAR,
      payload: { starsStorage },
    });
  };
};

export const dropStarsStorage = (): types.GameActionsType => {
  return { type: types.DROP_STARS_STORAGE, payload: { starsStorage: [] } };
};