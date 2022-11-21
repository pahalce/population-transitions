import React from 'react';
import { Prefecture } from '../../../types';
type PrefSelectItemProps = {
  pref: Prefecture;
  onChangeItem: (pref: Prefecture) => void;
  isChecked: boolean;
};
const PrefSelectItem = ({ pref, onChangeItem, isChecked }: PrefSelectItemProps) => {
  const handleOnChange = () => {
    onChangeItem(pref);
  };

  return (
    <div className="pref-select-item">
      <input
        type="checkbox"
        id={pref.prefCode.toString()}
        value={pref.prefCode}
        checked={isChecked}
        onChange={handleOnChange}
        name={pref.prefName}
      />
      <label htmlFor={pref.prefCode.toString()}>{pref.prefName}</label>
    </div>
  );
};

export default PrefSelectItem;
