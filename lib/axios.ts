import axios from 'axios';
import { API_URL_PREF } from '../config';
import { PrefectureResponse } from '../types';

export const getAllPrefs = () => {
  return axios
    .get(API_URL_PREF, { headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY } })
    .then((res) => {
      return res.data.result as PrefectureResponse;
    });
};
