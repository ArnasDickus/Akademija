import React from 'react';
import classes from './form-input.module.scss'

const FormInput = ({ handleChange, label,  ...otherProps }) => (
    <div className={classes.group}>
        <input className={classes.formInput} onChange={ handleChange } {...otherProps} ref={register} />
        {
            label ? (<label className={`${otherProps.value.length ? `${classes.shrink}` : ''} ${classes.formInputLabel}`}>
                { label }</label>) : null
        }
    </div>
)

export default FormInput;
