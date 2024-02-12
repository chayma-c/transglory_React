import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './layout/HomePage';
import { ContextProvider } from './settings/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <HomePage/>
    </ContextProvider>
  </React.StrictMode>
);