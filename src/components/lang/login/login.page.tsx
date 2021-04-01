import CustomButton from 'components/shared/custom-button/custom-button.component';
import ErrorComponent from 'components/shared/error-message/error-message.component';
import FormInput from 'components/shared/form-input/form-input.component';
import AllRoutesEnum from 'core/enums/allRoutes.enum';
import { auth, signInWithGoogle } from 'firebase/firebase.utils';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthWrapper } from 'styles/components/wrapper';
import * as Yup from 'yup';

import * as S from './login.styled';

const LoginPage: React.FC = () => {
  const [errorType, setErrorType] = useState('');
  const [hasError, setHasError] = useState(false);
  const { t } = useTranslation();

  return (
    <S.Container>
      <AuthWrapper>
        <h2 className="title">{t('login.title')}</h2>
        <span>{t('login.subtitle')}</span>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(6, t('errorMessage.passwordMin'))
              .required(t('errorMessage.required')),
            email: Yup.string()
              .email(t('errorMessage.invalidEmail'))
              .required(t('errorMessage.required')),
          })}
          onSubmit={async (values) => {
            setHasError(false);
            const { email, password } = values;

            try {
              await auth.signInWithEmailAndPassword(email, password);
            } catch (error) {
              setErrorType(error.code);
              setHasError(true);
            }
          }}
        >
          <Form>
            <FormInput label={t('login.emailLabel')} name="email" type="email" />
            <FormInput label={t('login.passwordLabel')} name="password" type="password" />

            {hasError && <ErrorComponent errorType={errorType} />}

            <div className="buttons">
              <CustomButton type="submit"> {t('login.login')} </CustomButton>
              <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>
                {t('login.loginGoogle')}
              </CustomButton>
            </div>

            <div className="linkContainer">
              <Link href={`${AllRoutesEnum.FORGOT_PASSWORD}`}>
                <span className="link">{t('login.forgotPassword')} </span>
              </Link>
            </div>
          </Form>
        </Formik>
      </AuthWrapper>
    </S.Container>
  );
};

export default LoginPage;
