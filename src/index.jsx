import React from 'react';
import ReactDOM from 'react-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { SettingsProvider } from './contexts/SettingsContext';

import App from './App';

const wrappedApp = (
  <SettingsProvider>
    <App />
  </SettingsProvider>
);

AOS.init();

ReactDOM.render(wrappedApp, document.getElementById('root'));
