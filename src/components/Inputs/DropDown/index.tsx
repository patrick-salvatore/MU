import React from 'react';
import RDropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Register, SetValue } from '@components/form/_form';

import './styles.scss';

interface DropDownProps {
  options: any;
  defaultOption?: string;
  placeholder?: string;
  setValue: SetValue;
  register: Register;
  name: string;
  errorMessage?: string;
  required: boolean;
}

export const DropDown = ({
  options,
  defaultOption,
  placeholder,
  register,
  setValue,
  name,
}: DropDownProps) => {
  React.useEffect(() => {
    register({
      name,
    });
  }, [register]);

  const selectOption = ({ value }) => {
    setValue(name, value);
  };

  return (
    <RDropdown
      options={options}
      onChange={selectOption}
      value={defaultOption}
      placeholder={placeholder || 'Select...'}
      controlClassName="dropDownInput"
    />
  );
};
