import React from 'react';
import ReactDOM from 'react-dom';

import { SettingsProvider } from './contexts/SettingsContext';

import App from './App';

const wrappedApp = (
  <SettingsProvider>
    <App />
  </SettingsProvider>
);

ReactDOM.render(wrappedApp, document.getElementById('root'));
