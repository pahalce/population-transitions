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
    // add the prefecture to the selected pref list & graph
    if (!foundPref) {
      setSelectedPrefs((selectedPrefs) => [...selectedPrefs, pref]);
      const popData = await fetchPopulationByPrefCode(pref.prefCode);

      setPopulationData([...populationData, { pref, valueSeries: popData }]);
      return;
    }
    // remove the prefecture from selected list & graph
    setSelectedPrefs(
      selectedPrefs.filter((selectedPref) => selectedPref.prefCode !== pref.prefCode),
    );
    setPopulationData(
      populationData.filter((popData) => popData.pref.prefCode !== foundPref.prefCode),
    );
  };
  return { isLoading, isError, prefs, selectedPrefs, error, toggleSelectedPrefs, populationData };
};

export default usePrefs;
