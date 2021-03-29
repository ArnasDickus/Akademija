import React, { useState } from 'react';
import CustomButton from 'components/shared/custom-button/custom-button.component';
import { auth, createUserProfileDocument, sendEmailVerification } from 'firebase/firebase.utils';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormInput from 'components/shared/form-input/form-input.component';
import ErrorComponent from 'components/shared/error-message/error-message.component';
import { useTranslation } from 'react-i18next';
import wrapper from 'baseScss/components/wrapper.module.scss';

import classes from './register.module.scss';

const Register: React.FC = () => {
  const [errorType, setErrorType] = useState('');
  const [hasError, setHasError] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.register}>
      <div className={wrapper.authWrapper}>
        <h2 className={classes.title}>{t('login.cantLogin')} </h2>
        <span>{t('login.register')}</span>

        <Formik
          initialValues={{
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={Yup.object({
            displayName: Yup.string().required(i18n.t('errorMessage.required')),
            email: Yup.string()
              .email(i18n.t('errorMessage.invalidEmail'))
              .required(i18n.t('errorMessage.required')),
            password: Yup.string()
              .min(6, i18n.t('errorMessage.passwordMin'))
              .required(i18n.t('errorMessage.required')),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), undefined], i18n.t('errorMessage.passwordsNoMatch'))
              .required(i18n.t('errorMessage.required')),
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
      </div>
    </div>
  );
};

export default Register;
