import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@mui/material';

import theme from './styles/theme';

import App from './App';

const wrappedApp = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(wrappedApp, document.getElementById('root'));
