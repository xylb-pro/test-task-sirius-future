import {
  CHANGE_ACTIVE_GAME_MODE,
  CHANGE_SCORE,
  CHANGE_STARS_STORAGE,
  CHANGE_TIMER,
  CREATE_STAR,
  DELETE_STAR,
  DROP_STARS_STORAGE,
  GameActionsType,
  IGameState,
  INCREASE_STARS_COUNT,
  ON_CLICK_PAUSE,
  ON_CLICK_RESTART,
  ON_CLICK_START,
  SET_IS_FIRST_GAME,
  SET_MAX_STAR_COUNT,
  SET_PAUSE,
  SET_SCORE,
  SET_STARS_COUNT,
  SET_TIMER_START_VALUE,
  UPDATE_STARS_SPAWN_INTERVAL,
  UPDATE_TIMER_INTERVAL,
} from './types';

const initialState: IGameState = {
  starsStorage: [],
  starsCount: 0,
  isOnPause: true,
  isFirstGame: true,
  score: 0,
  timer: 0,
  timerStartValue: 0,
  timerInterval: null,
  starsSpawnInterval: null,
  activeGameMode: false,
  maxStarCount: 3,
};

export const gameReducer = (
  state: IGameState = initialState,
  action: GameActionsType,
): IGameState => {
  switch (action.type) {
    case SET_PAUSE:
      return { ...state, ...action.payload };
    case SET_IS_FIRST_GAME:
      return { ...state, ...action.payload };
    case CHANGE_STARS_STORAGE:
      return { ...state, ...action.payload };
    case CHANGE_SCORE:
      return { ...state, ...action.payload };
    case SET_SCORE:
      return { ...state, ...action.payload };
    case CHANGE_TIMER:
      return { ...state, ...action.payload };
    case SET_TIMER_START_VALUE:
      return { ...state, ...action.payload };
    case UPDATE_TIMER_INTERVAL:
      return { ...state, ...action.payload };
    case UPDATE_STARS_SPAWN_INTERVAL:
      return { ...state, ...action.payload };
    case INCREASE_STARS_COUNT:
      return { ...state, ...action.payload };
    case SET_STARS_COUNT:
      return { ...state, ...action.payload };
    case CREATE_STAR:
      return { ...state, ...action.payload };
    case DROP_STARS_STORAGE:
      return { ...state, ...action.payload };
    case ON_CLICK_RESTART:
      return state;
    case ON_CLICK_START:
      return state;
    case ON_CLICK_PAUSE:
      return state;
    case CHANGE_ACTIVE_GAME_MODE:
      return { ...state, ...action.payload };
    case DELETE_STAR:
      return { ...state, ...action.payload };
    case SET_MAX_STAR_COUNT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
