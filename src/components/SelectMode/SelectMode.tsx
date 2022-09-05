import React, {
  Dispatch, FC, SetStateAction, useState,
} from 'react';
import { AppPreset } from '../../utils/types';
import './SelectMode.css';

type SelectModeProps = {
  appPresets: Array<AppPreset>
  setHoveredCells: Dispatch<SetStateAction<number[]>>
  setAppField: Dispatch<SetStateAction<number | undefined>>
}

const SelectMode: FC<SelectModeProps> = (
  { appPresets, setHoveredCells, setAppField },
) => {
  const [selectValue, setSelectValue] = useState<string>('default');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };
  const handleStartButtonClick = () => {
    const field = appPresets.find(
      (preset) => preset.name === selectValue,
    )?.field;
    setHoveredCells([]);
    setAppField(field);
  };
  return (
    <div className='SelectMode'>
      <select
        className='SelectMode-select'
        value={selectValue}
        onChange={handleChange}
      >
        <option value='default' disabled>Pick mode</option>
        {
          appPresets.map((preset) => (
            <option key={preset.name} value={preset.name}>
              {preset.name}
            </option>
          ))
        }
      </select>
      <button
        className='SelectMode-button'
        type='button'
        disabled={selectValue === 'default'}
        onClick={handleStartButtonClick}
      >
        Start
      </button>
    </div>
  );
};

export default SelectMode;
