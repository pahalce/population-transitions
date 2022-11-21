import SectionTitle from '../../common/SectionTitle';
import PrefSelectOptions from './PrefSelectOptions';
import usePrefs from '../../../hooks/usePrefs';
const PrefSelectSection = () => {
  const { isLoading, isError, error, prefs, selectedPrefs, toggleSelectedPrefs } = usePrefs();
  let content;
  if (isLoading) {
    content = <span className="status status-message">Loading...</span>;
  } else if (isError && error instanceof Error) {
    content = <span className="status status-error">Error:{error.message}</span>;
  } else if (!prefs || prefs.length === 0) {
    content = <span className="status status-error">都道府県が見つかりませんでした</span>;
  } else {
    content = (
      <PrefSelectOptions
        prefs={prefs}
        selectedPrefs={selectedPrefs}
        onChangeSelectedPrefs={toggleSelectedPrefs}
      />
    );
  }

  return (
    <div>
      <SectionTitle title="都道府県を選択" />
      {content}
    </div>
  );
};

export default PrefSelectSection;
