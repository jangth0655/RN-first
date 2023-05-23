import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
