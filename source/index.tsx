import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { dark, light } from './constants';
import { RootNavigation } from './screens/navigation/RootNavigation';

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <NavigationContainer theme={isDarkMode ? dark : light}>
        <RootNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
