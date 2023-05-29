import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${props => props.theme.color.mainDark};
`;

export default function MovieList() {
  return (
    <Container>
      <Text>Movie List</Text>
    </Container>
  );
}
