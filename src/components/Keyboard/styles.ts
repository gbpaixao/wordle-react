import { css } from '@emotion/css';
import colors from '../../styles/colors';

export const keyboardStyle = css`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  
`;

export const keyStyle = css`
  height: 58px;
  min-width: 43px;
  border: 0px;
  border-radius: 4px;
  margin: 5px 4px;
  font-weight: bold;
  background-color: ${colors.key_bg};
`;

export const gridRowStyle = css`
  display: flex;
  align-items: center;
`;
