import React from 'react';
import { useField } from 'formik';
import classes from './form-input.module.scss';

const FormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={classes.group}>
            <input className={classes.formInput} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}

            { label ? (<label
                className={`${field.value.length ? `${classes.shrink}` : ''} 
                ${classes.formInputLabel}`}>{label}</label>)
                : null}
        </div>
    );

};

export default FormInput;
