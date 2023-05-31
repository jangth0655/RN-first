import {useQuery} from 'react-query';
import {MovieType, fetchNowPlaying, fetchPopular} from '../service/movies';
import {useEffect} from 'react';

export const useNowPlaying = () => {
  const {data, isLoading, error} = useQuery<MovieType>(
    ['movies', 'nowPlaying'],
    () => fetchNowPlaying(),
  );

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return {
    nowPlaying: data?.results,
    nowPlayingLoading: isLoading,
  };
};

export const usePopular = () => {
  const {data, isLoading, error} = useQuery<MovieType>(
    ['movies', 'popular'],
    () => fetchPopular(),
  );

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return {
    popular: data?.results,
    popularLoading: isLoading,
  };
};
