import React from 'react';
import { resetGame } from 'engine/store/modules/game/slice';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';
import { counterSelectors } from 'engine/store/modules/game/selectors';

export const GameControls = () => {
  const dispatch = useAppDispatch();
  const winner = useAppSelector(counterSelectors.winner);

  const resetGameHandler = () => {
    dispatch(resetGame());
  };

  return (
    <div className="game-control">
      {winner && <p>Won: {winner}</p>}
      <button type="button" onClick={resetGameHandler}>
        Reset
      </button>
    </div>
  );
};
