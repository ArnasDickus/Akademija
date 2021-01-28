import React, { useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useField, FormikProps } from 'formik';

type FormValues = {
  nickName: string;
  userName: string;
  gender: string;
  birthdate: string;
  bio: string;
};

type Props = {
  label: string;
  name: string;
  FormikProps: FormikProps<FormValues>;
};

const DatePicker: React.FC<Props> = ({ label, FormikProps, ...props }) => {
  const [field] = useField(props);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  useEffect(() => {
    FormikProps.setFieldValue('birthdate', selectedDate);
  }, []);

  const handleDateChange = (date: Date | null) => {
    FormikProps.setFieldValue('birthdate', date);
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...field}
        {...props}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        format="MM/dd/yyyy"
        id="date-picker-dialog"
        label="Date picker dialog"
        margin="normal"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
