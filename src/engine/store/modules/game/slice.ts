import { createSlice } from '@reduxjs/toolkit';

export interface Game {
  board: Array<string | null>;
}

export const initialBoard = Array(9).fill(null);

export const initialState: Game = {
  board: initialBoard,
};

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: () => initialState,
    setBoard: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.board = action.payload;
    },
  },
});

export const { resetGame, setBoard } = game.actions;
export default game.reducer;
