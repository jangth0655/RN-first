import {useCallback, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

export default function useAppReady() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resovle: any) => setTimeout(resovle, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hide();
      }
    }
    prepare();
  }, []);

  const onReady = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
    if (!appIsReady) return null;
  }, [appIsReady]);

  return {onReady};
}
