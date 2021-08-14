import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./GlobalStyle";
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement!.hasChildNodes()) {
  hydrate([ <GlobalStyle />, <App /> ], rootElement);
} else {
  render([ <GlobalStyle />, <App /> ], rootElement);
}
