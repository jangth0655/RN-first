import styled from 'styled-components/native';
import NowPlaying from './NowPlaying';
import Popular from './Popular';
import {NOW_PLAYING, POPULAR, UP_COMING} from '../../service/movies';
import {FlatList, ListRenderItemInfo} from 'react-native';
import Upcomming from './Upcomming';

const Container = styled.View`
  background-color: ${props => props.theme.color.mainDark};
  flex: 1;
`;

type ListItemsType = {
  id: string;
  type: string;
};

export default function MovieList() {
  const listItems: ListItemsType[] = [
    {id: '1', type: NOW_PLAYING},
    {id: '2', type: POPULAR},
    {id: '3', type: UP_COMING},
  ];

  const renderItem = ({item}: ListRenderItemInfo<ListItemsType>) => {
    switch (item.type) {
      case NOW_PLAYING:
        return <NowPlaying />;
      case POPULAR:
        return <Popular />;
      case UP_COMING:
        return <Upcomming />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <FlatList
        data={listItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}
