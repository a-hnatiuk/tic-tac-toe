import { combineReducers } from '@reduxjs/toolkit';
import game from 'engine/store/modules/game/slice';

export const rootReducer = combineReducers({
  game,
});
