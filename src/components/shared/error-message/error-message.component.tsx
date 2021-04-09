import { ErrorMessagesEnum } from 'core/enums/error-messages.enum';
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './error-message.styles';

type Props = {
  errorType: string;
};

const ErrorMessage: React.FC<Props> = ({ errorType }) => {
  const { t } = useTranslation();
  let errorMessage = '';

  switch (errorType) {
    case ErrorMessagesEnum.WRONG_PASSWORD:
      errorMessage = t('errorMessage.wrongPassword');
      break;
    case ErrorMessagesEnum.MANY_REQUESTS:
      errorMessage = t('errorMessage.userBlocked');
      break;
    case ErrorMessagesEnum.EMAIL_IN_USE:
      errorMessage = t('errorMessage.emailInUse');
      break;
    case ErrorMessagesEnum.USER_NOT_FOUND:
      errorMessage = t('errorMessage.emailNotFound');
      break;

    default:
      errorMessage = t('errorMessage.unknownError');
  }

  return <S.ErrorMessage>{errorMessage}</S.ErrorMessage>;
};

export default ErrorMessage;
