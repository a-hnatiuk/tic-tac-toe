import type { RootState } from 'engine/store/index';
import { calculateWinner } from '../../../../helpers/calculateWiner';

export const counterSelectors = {
  board: (state: RootState) => state.game.board,
  winner: (state: RootState) => calculateWinner(state.game.board),
};
