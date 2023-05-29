import {useQuery} from 'react-query';
import {MovieType, fetchNowPlaying} from '../service/movies';
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
