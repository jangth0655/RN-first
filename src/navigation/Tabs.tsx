import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from '../screens/movie';
import TV from '../screens/tv';
import Search from '../screens/search';
import {useColorScheme} from 'react-native';

type TabParamlist = {
  Movies: undefined;
  TV: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator<TabParamlist>();

export default function Tabs() {
  const isDark = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? '#1e272e' : '#fff',
        },
        tabBarActiveTintColor: isDark ? '#ffa801' : 'black',
        tabBarInactiveTintColor: isDark ? '#d2dae2' : '#808e9b',
        headerStyle: {
          backgroundColor: isDark ? '#1e272e' : '#fff',
        },
        headerTitleStyle: {
          color: isDark ? '#fff' : 'black',
        },
      }}>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="TV" component={TV} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
