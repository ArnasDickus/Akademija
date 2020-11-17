import React from 'react';
import classes from './custom-button.module.scss';

const CustomButton = ({
      children,
      isGoogleSignIn,
      inverted,
      ...otherProps
  }) => (
    <button
        className={`${inverted ? `${classes.inverted}` : ''} ${
            isGoogleSignIn ? `${classes.googleSignIn}` : ''
        } ${classes.customButton}`}
        {...otherProps}>
            {children}
    </button>
);

export default CustomButton;
