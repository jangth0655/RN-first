import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    language: 'ko',
    region: 'KR',
    api_key: Config.API_KEY!,
  },
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Config.TOKEN!}`,
  },
});

export default api;
