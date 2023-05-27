import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Pressable, Text} from 'react-native';

export type StackParamList = {
  one: undefined;
  two: undefined;
  three: undefined;
};

const StackNav = createNativeStackNavigator<StackParamList>();

type ScreenOneProps = NativeStackScreenProps<StackParamList, 'one'>;
type ScreenTwoProps = NativeStackScreenProps<StackParamList, 'two'>;
type ScreenThreeProps = NativeStackScreenProps<StackParamList, 'three'>;

const ScreenOne = ({navigation: {navigate}}: ScreenOneProps) => (
  <Pressable onPress={() => navigate('two')}>
    <Text>One</Text>
  </Pressable>
);

const ScreenTwo = ({navigation: {navigate}}: ScreenTwoProps) => (
  <Pressable onPress={() => navigate('three')}>
    <Text>Two</Text>
  </Pressable>
);
const ScreenThree = ({navigation: {goBack}}: ScreenThreeProps) => (
  <Pressable onPress={() => goBack()}>
    <Text>Three</Text>
  </Pressable>
);

export default function Stack() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="one" component={ScreenOne} />
      <StackNav.Screen name="two" component={ScreenTwo} />
      <StackNav.Screen name="three" component={ScreenThree} />
    </StackNav.Navigator>
  );
}
