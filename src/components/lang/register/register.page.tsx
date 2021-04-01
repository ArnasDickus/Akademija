import CustomButton from 'components/shared/custom-button/custom-button.component';
import ErrorComponent from 'components/shared/error-message/error-message.component';
import FormInput from 'components/shared/form-input/form-input.component';
import { auth, createUserProfileDocument, sendEmailVerification } from 'firebase/firebase.utils';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthWrapper } from 'styles/components/wrapper';
import * as Yup from 'yup';

import * as S from './register.styled';

const Register: React.FC = () => {
  const [errorType, setErrorType] = useState('');
  const [hasError, setHasError] = useState(false);
  const { t } = useTranslation();

  return (
    <S.Container>
      <AuthWrapper>
        <h2 className="title">{t('login.cantLogin')} </h2>
        <span>{t('login.register')}</span>

        <Formik
          initialValues={{
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={Yup.object({
            displayName: Yup.string().required(t('errorMessage.required')),
            email: Yup.string()
              .email(t('errorMessage.invalidEmail'))
              .required(t('errorMessage.required')),
            password: Yup.string()
              .min(6, t('errorMessage.passwordMin'))
              .required(t('errorMessage.required')),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), undefined], t('errorMessage.passwordsNoMatch'))
              .required(t('errorMessage.required')),
          })}
          onSubmit={async (values) => {
            const { displayName, email, password } = values;

            try {
              const { user } = await auth.createUserWithEmailAndPassword(email, password);
              await createUserProfileDocument(user, { displayName });
              sendEmailVerification();
            } catch (error) {
              setErrorType(error.code);
              setHasError(true);
            }
          }}
        >
          <Form>
            <FormInput label={t('login.displayName')} name="displayName" type="text" />

            <FormInput label={t('login.emailLabel')} name="email" type="email" />

            <FormInput label={t('login.passwordLabel')} name="password" type="password" />

            <FormInput
              label={t('login.confirmPasswordLabel')}
              name="confirmPassword"
              type="password"
            />

            {hasError && <ErrorComponent errorType={errorType} />}

            <CustomButton type="submit">{t('login.register')}</CustomButton>
          </Form>
        </Formik>
      </AuthWrapper>
    </S.Container>
  );
};

export default Register;
