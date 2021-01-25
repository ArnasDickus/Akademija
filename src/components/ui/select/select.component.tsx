import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SelectComponent: React.FC<any> = () => {
  const [state, setState] = useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
          native
          onChange={handleChange}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
