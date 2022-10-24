import { css } from '@emotion/react';

export const GlobalStyles = css`
  body[data-theme='light'] {
    --priymary-color: #06c;
    --bg-color: white;
  }

  body[data-theme='dark'] {
    --priymary-color: white;
    --bg-color: #06c;
  }
`;
