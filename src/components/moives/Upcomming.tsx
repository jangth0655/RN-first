import styled from 'styled-components/native';
import {useUpcomming} from '../../hooks/useMovies';
import {FlatList} from 'react-native';
import UpcomingItem from '../renderItem/UpcomingItem';

export default function Upcomming() {
  const {upcomming, upcommingLoading} = useUpcomming();
  return (
    <Container>
      <ListTitle>개봉 영화</ListTitle>
      <FlatList
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
