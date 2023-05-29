import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamlist} from '../navigation/Tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../navigation/RootNav';
import MovieList from '../components/moives/List';

type MovieProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamlist, 'Movies'>,
  NativeStackScreenProps<RootParamList, 'Stack'>
>;

export default function Movies({}: MovieProps) {
  return <MovieList />;
}
