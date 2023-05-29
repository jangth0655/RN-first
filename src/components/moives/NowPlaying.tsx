import {Dimensions, Text} from 'react-native';
import styled from 'styled-components/native';
import {useNowPlaying} from '../../hooks/useMovies';

const Container = styled.View`
  border: 1px solid red;
`;

export default function NowPlaying() {
  const containerHeight = Dimensions.get('window').height / 4;
  const {nowPlaying} = useNowPlaying();
  return (
    <Container style={{height: containerHeight}}>
      <Text>Movie item</Text>
    </Container>
  );
}
