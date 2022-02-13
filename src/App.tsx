import { useEffect, useState } from 'react';
import Board from './components/Board/Board';
import Keyboard from './components/Keyboard/keyboard';
import initialBoard from './constants/initialBoard';
import validWords from './constants/validWords';
import { backgroundStyles } from './styles';

function App() {
  const [pressedKey, setPressedKey] = useState<{key: string}>({ key: '' });
  const [board, setBoard] = useState<string[][]>(initialBoard);
  const [currentRow, setCurrentRow] = useState<number>(0);
  const [currentLetter, setCurrentLetter] = useState<number | undefined>(0);
  const [rightWord, setRightWord] = useState('');

  function generateWord(): string {
    return validWords[0];
  }

  useEffect(() => { setRightWord(generateWord()); }, []);

  useEffect(() => {
    const newBoard = board.map((arr) => arr.slice());

    switch (pressedKey.key) {
      case 'ENTER': {
        // checar se tem as 5 letras -> não tendo, gerar animação de erro
        // checar se é a palavra correta -> se for, gerar animação de vitória
        // checar se é uma palavra válida
        //  -> não sendo, gerar toast dizendo
        //  -> sendo, dizer as letras corretas e pintar no keyboard e no board

        setCurrentLetter(0);
        setCurrentRow(currentRow + 1);
        return;
      }
      case 'BACKSPACE': {
        if (currentLetter === undefined) {
          setCurrentLetter(4);
          newBoard[currentRow][4] = '';
        } else if (currentLetter >= 1) {
          setCurrentLetter(currentLetter - 1);
          newBoard[currentRow][currentLetter - 1] = '';
        }
        break;
      }
      default: {
        if (currentLetter === undefined) return; // se está aguardando resposta

        newBoard[currentRow][currentLetter] = pressedKey.key;

        if (JSON.stringify(newBoard) !== JSON.stringify(board)) {
          if (currentLetter < 4) setCurrentLetter(currentLetter + 1);
          else if (currentLetter === 4) setCurrentLetter(undefined);
        }
      }
    }

    setBoard(newBoard);
  }, [pressedKey]);

  const handleChild = (childKey: string) => {
    setPressedKey({ key: childKey });
  };

  return (
    <div className={backgroundStyles}>
      <h1>Wordle</h1>

      <Board board={board} />
      <Keyboard parentCallback={handleChild} />

      A palavra é:
      {' '}
      {rightWord}

      <footer><small>Made by @gbpaixao</small></footer>
    </div>
  );
}

export default App;
