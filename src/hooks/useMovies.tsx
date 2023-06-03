import {useInfiniteQuery, useQuery} from 'react-query';
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
  const {data, isLoading, error, hasNextPage, fetchNextPage} =
    useInfiniteQuery<MovieType>(['movies', UP_COMING], fetchUpcomming, {
      getNextPageParam: lastPage => {
        const nextPage = lastPage.page + 1;
        return nextPage > lastPage.total_pages ? null : nextPage;
      },
    });

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  //console.log('has next page', hasNextPage);

  return {
    upcomming: data?.pages.flatMap(item => item.results),
    upcommingLoading: isLoading,
    hasNextPage,
    fetchNextPage,
  };
};
