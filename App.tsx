import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import useAppReady from './src/hooks/useAppReady';

function App() {
  const {onReady} = useAppReady();

  return (
    <NavigationContainer onReady={onReady}>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
