import React from 'react';
import { useField } from 'formik';
import classes from './text-input.module.scss';

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={classes.group}>
            <input className={classes.formInput} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}

            { label ? (<label
                className={`${field.value.length ? `${classes.shrink}` : ''} 
                ${classes.formInputLabel}`}>{label}</label>)
                : null}
        </div>
    );

};

export default TextInput;
