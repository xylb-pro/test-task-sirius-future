import { combineReducers } from 'redux';
import { gameReducer } from './gameState/reducer';

export const rootReducer = combineReducers({
  state: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
