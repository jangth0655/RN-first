import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import useAppReady from './src/hooks/useAppReady';
import RootNav from './src/navigation/RootNav';

function App() {
  const {onReady} = useAppReady();

  return (
    <NavigationContainer onReady={onReady}>
      <RootNav />
    </NavigationContainer>
  );
}

export default App;
