import SectionTitle from '../../common/SectionTitle';
import PrefSelectOptions from './PrefSelectOptions';
import usePrefs from '../../../hooks/usePrefs';
const PrefSelectSection = () => {
  const { isLoading, isError, error, prefs, selectedPrefs, toggleSelectedPrefs } = usePrefs();
  if (isLoading) {
    return (
      <>
        <SectionTitle title="都道府県を選択" />
        <span className="status status-message">Loading...</span>
      </>
    );
  }
  if (isError && error instanceof Error) {
    return (
      <>
        <SectionTitle title="都道府県を選択" />
        <span className="status status-error">Error:{error.message}</span>
      </>
    );
  }
  if (!prefs || prefs.length === 0) {
    return (
      <>
        <SectionTitle title="都道府県を選択" />
        <span className="status status-error">都道府県が見つかりませんでした</span>
      </>
    );
  }

  return (
    <>
      <SectionTitle title="都道府県を選択" />
      <PrefSelectOptions
        prefs={prefs}
        selectedPrefs={selectedPrefs}
        onChangeSelectedPrefs={toggleSelectedPrefs}
      />
    </>
  );
};

export default PrefSelectSection;
