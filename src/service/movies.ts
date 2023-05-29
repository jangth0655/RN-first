import {BaseType} from '../types/baseType';
import api from './httpClient';

export type MovieType = {
  results: {
    backdrop_path?: string;
    poster_path?: string;
    original_title: string;
    vote_average: number;
    vote_count: number;
    overview: string;
    title: string;
    id: number;
  };
  page: number;
} & BaseType;

export const fetchNowPlaying = async (page = 1) => {
  const result = await (await api.get(`/movie/now_playing?page=${page}`)).data;
  console.log(result);
  return result;
};
