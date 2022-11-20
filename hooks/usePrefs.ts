import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchAllPrefs } from '../lib/axios';
import { Prefecture } from '../types';

const usePrefs = () => {
  const [selectedPrefs, setSelectedPrefs] = useState<Prefecture[]>([]);
  const {
    isLoading,
    isError,
    data: prefs,
    error,
  } = useQuery({
    queryKey: ['prefectures'],
    queryFn: fetchAllPrefs,
  });

  const toggleSelectedPrefs = (pref: Prefecture) => {
    const foundPref = selectedPrefs.find((selectedPref) => selectedPref.prefCode === pref.prefCode);
    // add to selected pref list
    if (!foundPref) {
      setSelectedPrefs((selectedPrefs) => [...selectedPrefs, pref]);
      return;
    }
    // remove from selected list
    setSelectedPrefs(
      selectedPrefs.filter((selectedPref) => selectedPref.prefCode !== pref.prefCode),
    );
  };

  return { isLoading, isError, prefs, selectedPrefs, error, toggleSelectedPrefs };
};

export default usePrefs;
