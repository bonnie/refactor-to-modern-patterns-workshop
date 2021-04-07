import React from 'react';
import { Text, Code } from '@chakra-ui/react';
import Button from './Button';
import Hero from './Hero';
import { useTheme } from './ThemeProvider';

const ThemedApp = () => {
  /*
   Here we need to use our hook to access the toggleTheme function and 
   pass it to the onClick of our Button
  */
  const toggleTheme = useTheme();
  return (
    <>
      <Hero>
        <Button onClick={toggleTheme}>Theme Switcher</Button>
      </Hero>
    </>
  );
};

export default ThemedApp;
