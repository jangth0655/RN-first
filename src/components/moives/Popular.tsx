import styled from 'styled-components/native';
import {usePopular} from '../../hooks/useMovies';
import PopularItem from '../renderItem/PopularItem';
import {FlatList} from 'react-native';

export default function Popular() {
  const {popular, popularLoading} = usePopular();
  return (
    <Container>
      <ListTitle>인기 영화</ListTitle>
      <FlatList
        ItemSeparatorComponent={Seperator}
        contentContainerStyle={{
          paddingHorizontal: 30,
        }}
        horizontal
        data={popular}
        renderItem={({item}) => <PopularItem movie={item} />}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  );
}

const Container = styled.View``;

const ListTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 20px;
`;

const Seperator = styled.View`
  width: 20px;
`;
