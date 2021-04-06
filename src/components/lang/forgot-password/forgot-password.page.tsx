import CustomButton from 'components/shared/custom-button/custom-button.component';
import ErrorComponent from 'components/shared/error-message/error-message.component';
import FormInput from 'components/shared/form-input/form-input.component';
import SuccessComponent from 'components/ui/success-message/success-message.component';
import { auth } from 'firebase/firebase.utils';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthWrapper } from 'styles/components/wrapper';
import * as Yup from 'yup';

import * as S from './forgot-password.styles';

const ForgotPasswordPage: React.FC = () => {
  const [errorType, setErrorType] = useState('');
  const [hasSuccess, setHasSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { t } = useTranslation();

  return (
    <S.Container>
      <AuthWrapper>
        <h2 className="title">{t('login.forgotPassword')}</h2>

        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email(t('errorMessage.invalidEmail'))
              .required(t('errorMessage.required')),
          })}
          onSubmit={async (values) => {
            const { email } = values;
            setHasSuccess(false);
            setHasError(false);

            auth.languageCode = document.documentElement.lang;
            auth
              .sendPasswordResetEmail(email)
              .then(() => {
                setHasSuccess(true);
              })
              .catch((error) => {
                setErrorType(error.code);
                setHasError(true);
              });
          }}
        >
          <Form>
            <FormInput label={t('login.emailLabel')} name="email" type="email" />

            {hasError && <ErrorComponent errorType={errorType} />}
            {hasSuccess && <SuccessComponent>{t('login.emailSendSuccess')}</SuccessComponent>}
            <CustomButton type="submit">{t('login.resetPassword')} </CustomButton>
          </Form>
        </Formik>
      </AuthWrapper>
    </S.Container>
  );
};

export default ForgotPasswordPage;
