import axios from 'axios';
import { API_URL_POPULATION, API_URL_PREF } from '../config';
import { PopulationResponse, Prefecture, PrefectureResponse } from '../types';

export const fetchAllPrefs = () => {
  return axios
    .get(API_URL_PREF, { headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY } })
    .then((res) => {
      return res.data.result as PrefectureResponse;
    });
};

export const fetchPopulationByPrefCode = (prefCode: Prefecture['prefCode']) => {
  return axios
    .get(API_URL_POPULATION, {
      headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY },
      params: {
        prefCode: prefCode,
        cityCode: '-',
      },
    })
    .then((res) => res.data.result.data[0].data as PopulationResponse);
};
