import { useField } from 'formik';
import React from 'react';

import * as S from './form-input.styles';

type Props = {
  label: string;
  name: string;
  type: string;
};

const FormInput: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <S.Group>
      <input className="formInput" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}

      {label ? (
        <label
          className={`${field.value.length ? `shrink` : ''} 
                formInputLabel`}
        >
          {label}
        </label>
      ) : null}
    </S.Group>
  );
};

export default FormInput;
