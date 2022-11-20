import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchAllPrefs, fetchPopulationByPrefCode } from '../lib/axios';
import { DataForPopulationGraph, Prefecture } from '../types';

const usePrefs = () => {
  const [selectedPrefs, setSelectedPrefs] = useState<Prefecture[]>([]);
  const [populationData, setPopulationData] = useState<DataForPopulationGraph[]>([]);
  const {
    isLoading,
    isError,
    data: prefs,
    error,
  } = useQuery({
    queryKey: ['prefectures'],
    queryFn: fetchAllPrefs,
  });

  const toggleSelectedPrefs = async (pref: Prefecture) => {
    const foundPref = selectedPrefs.find((selectedPref) => selectedPref.prefCode === pref.prefCode);
    // add to selected pref list
    if (!foundPref) {
      setSelectedPrefs((selectedPrefs) => [...selectedPrefs, pref]);
      const popData = await fetchPopulationByPrefCode(pref.prefCode);

      setPopulationData([...populationData, { pref, data: popData }]);
      return;
    }
    // remove from selected list
    setSelectedPrefs(
      selectedPrefs.filter((selectedPref) => selectedPref.prefCode !== pref.prefCode),
    );
  };
  return { isLoading, isError, prefs, selectedPrefs, error, toggleSelectedPrefs, populationData };
};

export default usePrefs;
