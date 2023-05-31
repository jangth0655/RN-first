import {BaseType} from '../types/baseType';
import api from './httpClient';

export const NOW_PLAYING = 'nowPlaying';
export const POPULAR = 'popular';
export const UP_COMING = 'upcomming';

export type MovieResult = {
  backdrop_path?: string;
  poster_path?: string;
  original_title: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  title: string;
  id: number;
};

export type MovieType = {
  results: MovieResult[];
  page: number;
} & BaseType;

export const fetchNowPlaying = async (page = 1) => {
  const result = await (await api.get(`/movie/now_playing?page=${page}`)).data;

  return result;
};

export const fetchPopular = async (page = 1) => {
  const result = await (await api.get(`/movie/popular?page=${page}`)).data;

  return result;
};

export const fetchUpcomming = async (page = 1) => {
  const result = await (await api.get(`/movie/upcoming?page=${page}`)).data;

  return result;
};
