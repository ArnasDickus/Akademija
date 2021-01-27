import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { useField } from 'formik';

type Props = {
  options: string[];
  name: string;
};

const SelectComponent: React.FC<Props> = ({ options, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="gender-native-simple">Gender</InputLabel>
        <Select {...field} {...props} native>
          {options.map((category: string) => (
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
