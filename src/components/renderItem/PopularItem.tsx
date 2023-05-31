import styled from 'styled-components/native';
import {MovieResult} from '../../service/movies';
import {Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {makeImagePath} from '../../utils/makeImgPath';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  movie?: MovieResult;
};

export default function PopularItem({movie}: Props) {
  return (
    <Pressable>
      <Container>
        <FastImage
          source={{uri: makeImagePath(movie?.backdrop_path)}}
          style={{width: 100, height: 160, borderRadius: 8}}
        />
        <Title>
          {movie?.title.slice(0, 8)}
          {movie?.title && movie?.title?.length > 10 ? '...' : null}
        </Title>
      </Container>
      <VoteContainer>
        <VoteIcon>
          <Icon name="star" size={14} color={'yellow'} />
        </VoteIcon>
        <Vote>{movie?.vote_average}</Vote>
      </VoteContainer>
    </Pressable>
  );
}

const Container = styled.View`
  width: 100%;
`;

const Title = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-size: 13px;
  width: 100px;
  opacity: 0.9;
`;

const VoteContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const VoteIcon = styled.View`
  margin-right: 5px;
`;

const Vote = styled.Text`
  color: #fff;
  opacity: 0.5;
  font-size: 12px;
`;
