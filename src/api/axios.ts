import axios from 'axios';
import { BASE_URL } from '~src/constants';

export const CountriesAPi = axios.create({
  baseURL: BASE_URL,
});
