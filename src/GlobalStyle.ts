import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    line-height: 1.6;
    position: relative;
    min-height: 100%;
  }

  body {
    font-family: "IBM Plex Sans", sans-serif;
    background-color: #ffffff;
    background-image: url("https://www.transparenttextures.com/patterns/handmade-paper.png");
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #d4d4d4;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #414141;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #2f2f2f;
  }
`;

export default GlobalStyle;