import styled from 'styled-components/native';
import {useUpcomming} from '../../hooks/useMovies';
import {FlatList} from 'react-native';
import UpcomingItem from '../renderItem/UpcomingItem';

export default function Upcomming() {
  const {upcomming, upcommingLoading, fetchNextPage, hasNextPage} =
    useUpcomming();

  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <Container>
      <ListTitle>개봉 영화</ListTitle>
      <FlatList
        onEndReached={onEndReached}
        onEndReachedThreshold={0.4}
        style={{marginLeft: 30}}
        data={upcomming}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => <UpcomingItem movie={item} />}
      />
    </Container>
  );
}
const Container = styled.View`
  margin-top: 40px;
`;

const ListTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 20px;
`;

const Seperator = styled.View`
  height: 20px;
`;
