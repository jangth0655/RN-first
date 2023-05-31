import {useQuery} from 'react-query';
import {
  MovieType,
  NOW_PLAYING,
  POPULAR,
  UP_COMING,
  fetchNowPlaying,
  fetchPopular,
  fetchUpcomming,
} from '../service/movies';
import {useEffect} from 'react';

export const useNowPlaying = () => {
  const {data, isLoading, error} = useQuery<MovieType>(
    ['movies', NOW_PLAYING],
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
    ['movies', POPULAR],
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

export const useUpcomming = () => {
  const {data, isLoading, error} = useQuery<MovieType>(
    ['movies', UP_COMING],
    () => fetchUpcomming(),
  );

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return {
    upcomming: data?.results,
    upcommingLoading: isLoading,
  };
};
