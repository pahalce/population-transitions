import { Prefecture } from '../../../types';
import PrefSelectItem from './PrefSelectItem';
type PrefSelectOptionsProps = {
  prefs: Prefecture[];
  selectedPrefs: Prefecture[];
  onChangeSelectedPrefs: (pref: Prefecture) => void;
};
const PrefSelectOptions = ({
  prefs,
  onChangeSelectedPrefs,
  selectedPrefs,
}: PrefSelectOptionsProps) => {
  const checkIsChecked = (prefCode: Prefecture['prefCode']) => {
    return selectedPrefs.some((selectedPref) => selectedPref.prefCode === prefCode);
  };
  return (
    <div className="pref-select-container">
      {prefs?.map((pref) => {
        return (
          <PrefSelectItem
            key={pref.prefCode}
            pref={pref}
            onChangeItem={onChangeSelectedPrefs}
            isChecked={checkIsChecked(pref.prefCode)}
          />
        );
      })}
    </div>
  );
};

export default PrefSelectOptions;
