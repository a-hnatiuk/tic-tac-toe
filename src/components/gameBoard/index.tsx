import React, { useState } from 'react';
import uuid from 'react-uuid';
import { counterSelectors } from 'engine/store/modules/game/selectors';
import { setBoard } from 'engine/store/modules/game/slice';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';
import { BoardCell } from 'components/BoardCell';
import { GameControls } from 'components/gameControls';
import './index.scss';

export const GameBoard = () => {
  const dispatch = useAppDispatch();
  const [xIsNext, setXisNext] = useState(true);
  const board = useAppSelector(counterSelectors.board);
  const winner = useAppSelector(counterSelectors.winner);

  const cellClickHandler = (cellNumber: number) => {
    const boardCopy = [...board];
    if (winner || boardCopy[cellNumber]) return;

    boardCopy[cellNumber] = xIsNext ? 'X' : 'O';
    dispatch(setBoard(boardCopy));
    setXisNext(!xIsNext);
  };

  return (
    <div>
      <div className="board-wrapper">
        <div className="board">
          {board.map((square, i) => (
            <BoardCell
              cellClickHandler={cellClickHandler}
              icon={square}
              cellNumber={i}
              key={uuid()}
            />
          ))}
        </div>
      </div>
      <GameControls />
    </div>
  );
};
