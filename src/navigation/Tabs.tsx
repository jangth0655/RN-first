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
        tabBarActiveTintColor: 'rgb(251 191 36)',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'rgb(17 24 39)',
          height: 50,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'rgb(17 24 39)',
          height: 40,
        },
      }}>
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({color}) => <Icon name="film" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="TV"
        component={TV}
        options={{
          tabBarIcon: ({color}) => <Icon name="tv" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
