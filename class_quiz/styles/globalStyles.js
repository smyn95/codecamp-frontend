import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    box-sizing: border-box;
    font-size: 30px;
    margin: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  @font-face {
    font-family: 'myfont';
    src: url('/fonts/scifibit.ttf');
  }
`;
