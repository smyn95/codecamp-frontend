import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "myfont";
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/NanumSquare_acL.ttf");
  }
  html,
  body {
    background: white !important;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    margin: 0;
    margin-bottom: 0;
  }
  ul,
  ol {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  button {
    border: none;
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
  }
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
`;
