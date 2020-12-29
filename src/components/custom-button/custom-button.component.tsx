import React from 'react';

import classes from './custom-button.module.scss';

type Props = {
    isGoogleSignIn?: boolean,
    inverted?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: any
}

const CustomButton: React.FC<Props> = ({
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
