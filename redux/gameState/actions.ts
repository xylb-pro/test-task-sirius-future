import { STAR, UPDATE_DELAY } from '../../utils/globalConstants';
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
    let store = getState().state;
    let starsStorage = store.starsStorage
      .filter((el) => {
        if (el.y >= STAR.yMax && !store.activeGameMode) {
          dispatch(changeScore(el.value));
          dispatch(increaseStarsCount());
        }
        return el.y < STAR.yMax;
      })
      .map((el) => {
        return { ...el, y: el.y + el.step };
      });

    dispatch({
      type: types.CHANGE_STARS_STORAGE,
      payload: { starsStorage },
    });
    ``;
    if (starsStorage.length < store.maxStarCount) {
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
    const x: number = Math.floor(Math.random() * STAR.xMax);
    const y: number = Math.floor(
      Math.random() * (STAR.ySpawnMax - STAR.ySpawnMin + 1) + STAR.ySpawnMin,
    );
    const step: number = Math.floor(
      Math.random() * (STAR.stepMax - STAR.stepMin + 1) + STAR.stepMin,
    );
    let value: number = STAR.valueWithout;
    while (value === STAR.valueWithout) {
      value = Math.floor(
        Math.random() * (STAR.valueMax - STAR.valueMin + 1) + STAR.valueMin,
      );
    }
    starsStorage.push({ x, y, value, step });
    dispatch({
      type: types.CREATE_STAR,
      payload: { starsStorage },
    });
  };
};

export const dropStarsStorage = (): types.GameActionsType => {
  return { type: types.DROP_STARS_STORAGE, payload: { starsStorage: [] } };
};

export const onClickRestart = (): types.AsyncActionType => {
  return (dispatch, getState) => {
    const store = getState().state;

    clearInterval(store.starsSpawnInterval);
    clearInterval(store.timerInterval);

    dispatch(setPause(true));
    dispatch(setScore(0));
    dispatch(changeTimer(0));
    dispatch(dropStarsStorage());
    dispatch(setTimerStartValue(0));
    dispatch(setIsFirstGame(true));
    dispatch(setStarsCount(0));

    dispatch({
      type: types.ON_CLICK_RESTART,
    });
  };
};

export const onClickStart = (): types.AsyncActionType => {
  return (dispatch, getState) => {
    let startTime: number = Date.now();

    let store = getState().state;

    const temp = setInterval(() => {
      dispatch(changeTimer(store.timerStartValue + Date.now() - startTime));
    }, 1000);

    dispatch(updateTimerInterval(temp));

    if (store.starsStorage.length === 0) {
      dispatch(setIsFirstGame(false));
      for (let i = 0; i < store.maxStarCount; i++) {
        dispatch(createStar());
      }
    }

    dispatch(onClickPause());

    dispatch({ type: types.ON_CLICK_START });
  };
};

export const onClickPause = (): types.AsyncActionType => {
  return (dispatch, getState) => {
    const store = getState().state;

    if (store.isOnPause) {
      dispatch(setPause(false));
      const temp = setInterval(() => {
        dispatch(changeStarsStorage());
      }, UPDATE_DELAY);
      dispatch(updateStarsSpawnInterval(temp));
    } else {
      clearInterval(store.timerInterval);
      clearInterval(store.starsSpawnInterval);
      dispatch(setTimerStartValue(store.timer));
      dispatch(setPause(true));
    }

    dispatch({ type: types.ON_CLICK_PAUSE });
  };
};

export const changeActiveGameMode = (): types.AsyncActionType => {
  return (dispatch, getState) => {
    dispatch(onClickRestart());
    dispatch({
      type: types.CHANGE_ACTIVE_GAME_MODE,
      payload: { activeGameMode: !getState().state.activeGameMode },
    });
  };
};

export const deleteStar = (id: number): types.AsyncActionType => {
  return (dispatch, getState) => {
    let starsStorage = getState().state.starsStorage;
    dispatch(changeScore(starsStorage[id].value));
    dispatch(increaseStarsCount());
    starsStorage = starsStorage.filter((el, idx) => {
      return idx !== id;
    });
    dispatch({ type: types.DELETE_STAR, payload: { starsStorage } });
  };
};

export const setMaxStarCount = (
  maxStarCount: number,
): types.GameActionsType => {
  return { type: types.SET_MAX_STAR_COUNT, payload: { maxStarCount } };
};
