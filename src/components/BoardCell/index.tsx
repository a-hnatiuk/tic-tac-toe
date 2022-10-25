import React, { FC } from 'react';
import './index.scss';

interface BoardCellProps {
  cellNumber: number;
  cellClickHandler: (cellNumber: number) => void;
  icon: string | null;
}

export const BoardCell: FC<BoardCellProps> = ({
  cellNumber,
  cellClickHandler,
  icon,
}) => {
  const clickHandler = () => {
    cellClickHandler(cellNumber);
  };

  return (
    <button type="button" className="boardCell" onClick={clickHandler}>
      {icon}
    </button>
  );
};
