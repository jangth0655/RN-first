import api from './httpClient';

export const fetchNowPlaying = async (page = 1) => {
  const result = await (await api.get(`/movie/now_playing?page=${page}`)).data;
  console.log(result);
  return result;
};
