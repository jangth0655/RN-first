import styled from 'styled-components/native';
import NowPlaying from './NowPlaying';
import Popular from './Popular';

const Container = styled.View`
  background-color: ${props => props.theme.color.mainDark};
  flex: 1;
`;

export default function MovieList() {
  return (
    <Container>
      <NowPlaying />
      <Popular />
    </Container>
  );
}
