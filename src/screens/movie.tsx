import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Pressable, Text, View} from 'react-native';
import {TabParamlist} from '../navigation/Tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../navigation/RootNav';

type MovieProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamlist, 'Movies'>,
  NativeStackScreenProps<RootParamList, 'Stack'>
>;

export default function Movies({navigation}: MovieProps) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable
        onPress={() => navigation.navigate('Stack', {screen: 'three'})}>
        <Text>Go to Stack</Text>
      </Pressable>
    </View>
  );
}
