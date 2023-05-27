import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs, {TabParamlist} from './Tabs';
import Stack, {StackParamList} from './Stack';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootParamList = {
  Tabs: NavigatorScreenParams<TabParamlist>;
  Stack: NavigatorScreenParams<StackParamList>;
};

const Nav = createNativeStackNavigator<RootParamList>();

export default function RootNav() {
  return (
    <Nav.Navigator screenOptions={{headerShown: false}}>
      <Nav.Screen name="Tabs" component={Tabs} />
      <Nav.Screen name="Stack" component={Stack} />
    </Nav.Navigator>
  );
}
