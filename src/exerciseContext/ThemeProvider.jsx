import React, { useContext, createContext, useState } from 'react';
import themes from './theme';
import { ThemeProvider as StyledProvider } from 'styled-components';

// First you need to create your `ThemeContext` (use React.CreateContext());
// you need to export this also..
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // You should heep track of a state to toggle the theme from `light` to `dark`
  // (see the themes.js file)
  const [theme, setTheme] = useState(themes['light']);

  // Once you have some state, define a toggleTheme function that sets the theme based on the value or 'theme' (it's either 'light' or 'dark')
  // You'll need to set this function on the value of the context provider

  const toggleTheme = () =>
    setTheme(theme === themes['light'] ? themes['dark'] : themes['light']);

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;

// Finally you'll need to wrap your app with the ThemeProvider, you can do this in src/index.js where the other providers are.
