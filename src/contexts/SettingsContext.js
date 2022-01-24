import { createContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

const initialState = {
  themeMode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
};

export const SettingsContext = createContext(initialState);

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useLocalStorage('settings', initialState);

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onToggleMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
