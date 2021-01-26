import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

type Props = {
  onGenderUpdate: (curentGender: string) => void;
} & {
  genderOptions: string[];
  name: string;
};

const SelectComponent: React.FC<Props> = ({ genderOptions, name, onGenderUpdate }) => {
  const [currentGender, setCurrentGender] = useState<string>('Male');

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    // const value = event.target.name as keyof typeof state;
    setCurrentGender(event.target.value as string);
    onGenderUpdate(currentGender);
  };

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="gender-native-simple">Gender</InputLabel>
        <Select
          inputProps={{
            name: { name },
            id: 'gender-native-simple',
          }}
          name={name}
          native
          onChange={handleChange}
        >
          {genderOptions.map((category: string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
