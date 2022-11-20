import { useRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPrefs, fetchPopulationByPrefCode } from '../lib/axios';
import { Prefecture } from '../types';
import { DataForPopulationGraphState, selectedPrefsState } from '../stores/atoms';

const usePrefs = () => {
  const [selectedPrefs, setSelectedPrefs] = useRecoilState(selectedPrefsState);
  const [populationData, setPopulationData] = useRecoilState(DataForPopulationGraphState);
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

      setPopulationData([...populationData, { pref, valueSeries: popData }]);
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
