import { css } from '@emotion/css';
import colors from '../../styles/colors';

export const boardContainerStyle = css`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
`;

export const boardRowStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;

export const boardTileStyle = css`
  height: 57px;
  width: 57px;
  border: 2px solid #d3d6da;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  box-sizing: border-box;
  color: ${colors.key_text};
  text-transform: uppercase;
  user-select: none;
`;
