/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import initialBoard from '../../constants/initialBoard';
import { boardContainerStyle, boardRowStyle, boardTileStyle } from './styles';

interface Props {
  board: string[][];
}

export default function Board(props: Props) {
  const [board, setBoard] = useState<string[][]>(initialBoard);
  const { board: boardProps } = props;

  useEffect(() => {
    setBoard(boardProps);
  }, [boardProps]);

  return (
    <div className={boardContainerStyle}>
      {board.map(
        (row, i) => (
          <div id={`row+${i}`} key={i} className={boardRowStyle}>
            {row.map(
              (tile, j) => <div id={`tile+${String(i) + String(j)}`} key={String(i) + String(j)} className={boardTileStyle}>{tile}</div>,
            )}
          </div>
        ),
      )}
    </div>
  );
}
