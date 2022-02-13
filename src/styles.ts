import { css } from '@emotion/css';
import colors from './styles/colors';

// eslint-disable-next-line import/prefer-default-export
export const backgroundStyles = css`
  height: 100vh;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
