/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { MdOutlineBackspace } from 'react-icons/md';
import { gridRowStyle, keyboardStyle, keyStyle } from './styles';

interface Props {
  parentCallback: (key: string) => void;
}

export default function Keyboard({ parentCallback }: Props) {
  const possibleKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'];

  function getKey(key: string) {
    parentCallback(key);
    // eslint-disable-next-line no-console
    console.log(`Tecla pressionada: ${key}`);
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();

    if (possibleKeys.includes(key)) { getKey(event.key.toUpperCase()); }
  };

  /** Create and remove eventListener */
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown); // creates event when component mounts

    return () => {
      window.removeEventListener('keydown', handleKeyDown); // remove event when component unmounts
    };
  }, []);

  return (
    <div className={keyboardStyle}>
      <div id="top-row" className={gridRowStyle}>
        {possibleKeys.slice(0, 10).map((key) => <button type="button" key={key} className={keyStyle} onClick={() => getKey(key)}>{key}</button>)}
      </div>

      <div id="middle-row" className={gridRowStyle}>
        {possibleKeys.slice(10, 19).map((key) => <button type="button" key={key} className={keyStyle} onClick={() => getKey(key)}>{key}</button>)}
      </div>

      <div id="bottom-row" className={gridRowStyle}>
        <button type="button" key={possibleKeys[19]} className={keyStyle} style={{ width: '65px' }} onClick={() => getKey(possibleKeys[19])}>{possibleKeys[19]}</button>
        {possibleKeys.slice(20, 27).map((key) => (<button type="button" key={key} className={keyStyle} onClick={() => getKey(key)}>{key}</button>))}
        <button type="button" key={possibleKeys[27]} className={keyStyle} style={{ width: '65px' }} onClick={() => getKey(possibleKeys[27])} aria-label="Backspace button"><MdOutlineBackspace size={20} /></button>
      </div>
    </div>
  );
}
