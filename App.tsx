import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import useAppReady from './src/hooks/useAppReady';
import RootNav from './src/navigation/RootNav';
import Theme from './src/theme';
import {ThemeProvider} from 'styled-components';

function App() {
  const {onReady} = useAppReady();

  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer onReady={onReady}>
        <RootNav />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
