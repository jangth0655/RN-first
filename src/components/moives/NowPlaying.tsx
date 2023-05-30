import {Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {useNowPlaying} from '../../hooks/useMovies';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import {makeImagePath} from '../../utils/makeImgPath';
import {BlurView} from '@react-native-community/blur';

export default function NowPlaying() {
  const SCREEN_HEIGHT = Dimensions.get('window').height / 3;
  const {nowPlaying} = useNowPlaying();

  return (
    <Container style={{height: SCREEN_HEIGHT}}>
      {nowPlaying && (
        <Swiper
          loop
          showsButtons={false}
          autoplay
          autoplayTimeout={2.5}
          showsPagination={false}
          containerStyle={{
            marginBottom: 40,
            width: '100%',
          }}>
          {nowPlaying?.map(data => (
            <DataContainer key={data.id}>
              <ImageLayerContainer style={StyleSheet.absoluteFill}>
                <FastImage
                  source={{
                    uri: makeImagePath(data.backdrop_path),
                  }}
                  style={StyleSheet.absoluteFill}
                />
              </ImageLayerContainer>
              <BlurView style={StyleSheet.absoluteFill} blurType="dark" />

              <ViewContainer>
                <ImageWrapper>
                  <FastImage
                    source={{uri: makeImagePath(data.poster_path)}}
                    style={{width: '100%', height: '100%'}}
                  />
                </ImageWrapper>
                <ItemInfo>
                  <TitleContainer>
                    <Title>{data.title}</Title>
                  </TitleContainer>
                  <OverView>{`${data.overview.slice(0, 120)}......`}</OverView>
                </ItemInfo>
              </ViewContainer>
            </DataContainer>
          ))}
        </Swiper>
      )}
    </Container>
  );
}

const Container = styled.View``;

const ImageLayerContainer = styled.View``;

const DataContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const ViewContainer = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

const ImageWrapper = styled.View`
  object-fit: cover;
  width: 100px;
  border-radius: 8px;
`;

const ItemInfo = styled.View`
  margin-left: 20px;
`;

const TitleContainer = styled.View``;

const Title = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

const OverView = styled.Text`
  font-size: 13px;
  color: #fff;
  opacity: 0.7;
  margin-top: 10px;
  width: 220px;
`;
