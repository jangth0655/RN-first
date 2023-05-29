import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import useAppReady from './src/hooks/useAppReady';
import RootNav from './src/navigation/RootNav';
import Theme from './src/theme';
import {ThemeProvider} from 'styled-components';
import {QueryClient, QueryClientProvider} from 'react-query';

export const queryClient = new QueryClient();

function App() {
  const {onReady} = useAppReady();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <NavigationContainer onReady={onReady}>
          <RootNav />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
