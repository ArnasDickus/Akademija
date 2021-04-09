import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonLink from 'components/shared/button-link/button-link';
import { ErrorMessage, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileSettingsWrapper } from 'styles/components/wrapper';
import * as Yup from 'yup';

import * as S from './settings-account.styles';

const SettingsAccountPage: React.FC = () => {
  const [displayEmail, setDisplayEmail] = useState(false);
  const { t } = useTranslation();
  const [verificationSent, setVerficationSent] = useState(false);

  const openEmail = () => {
    setDisplayEmail(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleEmail = (resetForm: any) => {
    setDisplayEmail(!displayEmail);
    resetForm();
  };

  return (
    <S.Container>
      <ProfileSettingsWrapper>
        <h2 className="title">{t('profile.emailAddress')}</h2>
        <p className="subtitle">{t('profile.addRemoveEmail')}</p>
        <p>{t('profile.addedEmails')}</p>
        <div className="row">
          <p className="email">{t('profile.emailAddress')}</p>
          <p className="email">{t('profile.primary')}</p>
        </div>
        {!displayEmail ? (
          <div className="buttonContainer" onClick={() => openEmail()}>
            <ButtonLink>{t('profile.addEmail')}</ButtonLink>
          </div>
        ) : (
          <S.FormContainer>
            <Formik
              initialValues={{
                email: '',
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email(t('errorMessage.invalidEmail'))
                  .required(t('errorMessage.required')),
                password: Yup.string().required(t('errorMessage.required')),
              })}
              onSubmit={(values) => {
                setVerficationSent(true);
                // eslint-disable-next-line no-console
                console.log(values);
                setTimeout(() => {
                  setVerficationSent(false);
                }, 5000);
              }}
            >
              {({ setFieldValue, resetForm, isValid }) => (
                <Form className="formContainer">
                  <TextField
                    className="InputEmail"
                    label={t('profile.emailAddress')}
                    name="email"
                    onChange={(event) => setFieldValue('email', event.target.value)}
                  />
                  <ErrorMessage className="invalidFeedback" component="div" name="email" />
                  <p className="securityWarning">{t('profile.securityMsg')}</p>
                  <TextField
                    className="InputEmail"
                    label={t('profile.currentPassword')}
                    name="password"
                    type="password"
                    onChange={(event) => setFieldValue('password', event.target.value)}
                  />
                  <ErrorMessage className="invalidFeedback" component="div" name="email" />

                  <div className="formButtons">
                    <Button
                      className="cancel"
                      type="button"
                      variant="contained"
                      onClick={() => toggleEmail(resetForm)}
                    >
                      {t('profile.cancel')}
                    </Button>
                    <Button color="primary" disabled={!isValid} type="submit" variant="contained">
                      {t('profile.sendVerification')}
                    </Button>

                    {verificationSent ? <p>{t('profile.checkEmail')}</p> : ''}
                  </div>
                </Form>
              )}
            </Formik>
          </S.FormContainer>
        )}
      </ProfileSettingsWrapper>
    </S.Container>
  );
};

export default SettingsAccountPage;
