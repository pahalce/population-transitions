import { getAllPrefs as fetchAllPrefs } from '../../../lib/axios';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../common/SectionTitle';
import PrefSelectOptions from './PrefSelectOptions';
import { useState } from 'react';
import { Prefecture } from '../../../types';
const PrefSection = () => {
  const [selectedPrefs, setSelectedPrefs] = useState<Prefecture[]>([]);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['prefectures'],
    queryFn: fetchAllPrefs,
  });

  const handleChangeSelectedPrefs = (pref: Prefecture) => {
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

  if (isLoading) {
    <span>Loading...</span>;
  }
  if (isError && error instanceof Error) {
    <span>Error:{error.message}</span>;
  }
  if (!data?.length) {
    return <span>都道府県が見つかりませんでした</span>;
  }

  return (
    <>
      <SectionTitle title="都道府県を選択" />
      <PrefSelectOptions
        prefs={data}
        selectedPrefs={selectedPrefs}
        onChangeSelectedPrefs={handleChangeSelectedPrefs}
      />
    </>
  );
};

export default PrefSection;
