import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import {MovieResult} from '../../service/movies';
import FastImage from 'react-native-fast-image';
import {makeImagePath} from '../../utils/makeImgPath';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  movie?: MovieResult;
};

export default function UpcomingItem({movie}: Props) {
  return (
    <Pressable>
      <Container>
        <FastImage
          source={{uri: makeImagePath(movie?.backdrop_path)}}
          style={{width: 100, height: 160, borderRadius: 8}}
        />
        <TextWithVoteContainer>
          <Title>{movie?.title}</Title>
          <VoteContainer>
            <VoteIconContainer>
              <Icon name="star" size={14} color={'yellow'} />
            </VoteIconContainer>
            <Vote>{movie?.vote_average}</Vote>
          </VoteContainer>
        </TextWithVoteContainer>
      </Container>
    </Pressable>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

const TextWithVoteContainer = styled.View`
  margin-left: 10px;
`;

const Title = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-size: 13px;
  opacity: 0.9;
`;

const VoteContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const VoteIconContainer = styled.View``;

const Vote = styled.Text`
  color: #fff;
  opacity: 0.5;
  font-size: 12px;
  margin-left: 5px;
`;
