import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from '../screens/movie';
import TV from '../screens/tv';
import Search from '../screens/search';
import Icon from 'react-native-vector-icons/FontAwesome';

export type TabParamlist = {
  Movies: undefined;
  TV: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator<TabParamlist>();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
      }}>
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: () => <Icon name="film" size={25} />,
        }}
      />
      <Tab.Screen
        name="TV"
        component={TV}
        options={{
          tabBarIcon: () => <Icon name="tv" size={25} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => <Icon name="search" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
}
