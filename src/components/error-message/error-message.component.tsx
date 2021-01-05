import React from 'react';
import {useTranslation} from "react-i18next";
import {ErrorMessagesEnum} from "core/enums/error-messages.enum";

import classes from './error-message.module.scss';

type Props = {
    errorType: string;
}

const ErrorMessage: React.FC<Props> = ({errorType}) => {
    const {i18n} = useTranslation();
    let errorMessage = '';

    switch (errorType) {
        case ErrorMessagesEnum.WRONG_PASSWORD:
            errorMessage = i18n.t('errorMessage.wrongPassword');
            break;
        case ErrorMessagesEnum.MANY_REQUESTS:
            errorMessage = i18n.t('errorMessage.userBlocked');
            break;
        case ErrorMessagesEnum.EMAIL_IN_USE:
            errorMessage = i18n.t('errorMessage.emailInUse');
            break;
        case ErrorMessagesEnum.USER_NOT_FOUND:
            errorMessage = i18n.t('errorMessage.emailNotFound');
            break;

        default:
            errorMessage = i18n.t('errorMessage.unknownError');
    }

    return (
        <p className={classes.error}>
            {errorMessage}
        </p>
    )
}

export default ErrorMessage;
