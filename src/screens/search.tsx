import styled from 'styled-components/native';

export default function Search() {
  return (
    <Container>
      <SearchInput />
    </Container>
  );
}

const Container = styled.View`
  background-color: ${props => props.theme.color.mainDark};
  flex: 1;
`;
const SearchInput = styled.TextInput``;
