import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { rootReducer } from 'engine/store/rootReducer';
import { Game } from 'engine/store/modules/game/slice';

export interface RootState {
  game: Game;
}

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
