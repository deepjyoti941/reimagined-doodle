/**
 * @description Application bootstrap.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const app = (
  <BrowserRouter basename={`${window.location.pathname}#`}>
    <App />
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById('lighthouse-ci'));
