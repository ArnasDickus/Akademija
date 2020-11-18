import React from 'react';
import classes from './succes.module.scss';

const SuccessComponent = ({ children }) => {
    return (
        <p className={classes.message}>
            { children }
        </p>
    )
}

export default SuccessComponent;
