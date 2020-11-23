import React from 'react';
import classes from './error-message.module.scss';
import { useTranslation } from "react-i18next";

const ErrorMessage = ({ errorType }) => {
    const { i18n } = useTranslation();
    let errorMessage = '';

    switch (errorType) {
        case 'auth/wrong-password':

            errorMessage = i18n.t('errorMessage.wrongPassword');
            break;
        case 'auth/too-many-requests':
            errorMessage = i18n.t('errorMessage.userBlocked');
            break;
        case 'auth/email-already-in-use':
            errorMessage = i18n.t('errorMessage.emailInUse');
            break;
        case 'auth/user-not-found':
            errorMessage = i18n.t('errorMessage.emailNotFound');
            break;

        default:
        errorMessage = i18n.t('errorMessage.unknownError');
    }

    return (
        <p className={classes.error}>
            { errorMessage }
        </p>
        )
}

export default ErrorMessage;
