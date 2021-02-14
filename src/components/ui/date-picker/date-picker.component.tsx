import React, { useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useField, FormikProps } from 'formik';
import { ProfileSettingsFormValuesEnum } from 'core/enums/profile-form-values.enum';

type Props = {
  label: string;
  name: string;
  FormikProps: FormikProps<ProfileSettingsFormValuesEnum>;
};

const DatePicker: React.FC<Props> = ({ label, FormikProps, ...props }) => {
  const [field] = useField(props);
  const selectedDate: Date | null = new Date('2000-02-18T21:11:54');

  useEffect(() => {
    FormikProps.setFieldValue('birthdate', selectedDate);
  }, []);

  const handleDateChange = (date: Date | null) => {
    FormikProps.setFieldValue('birthdate', date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...field}
        {...props}
        format="MM/dd/yyyy"
        label={label}
        margin="normal"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
