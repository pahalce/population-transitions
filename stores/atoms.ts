import { atom } from 'recoil';
import { DataForPopulationGraph, Prefecture } from '../types';

export const selectedPrefsState = atom<Prefecture[]>({
  key: 'selectedPrefs',
  default: [],
});

export const DataForPopulationGraphState = atom<DataForPopulationGraph[]>({
  key: 'dataForPopulationGraph',
  default: [],
});
