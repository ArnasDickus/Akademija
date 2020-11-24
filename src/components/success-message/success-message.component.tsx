import React from 'react';
import classes from './success-message.module.scss';

const SuccessComponent: React.FC = ({ children }) => {
    return (
        <p className={classes.message}>
            { children }
        </p>
    )
}

export default SuccessComponent;
