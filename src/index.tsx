import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { GlobalStyle } from './global-style';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
