import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import wrapper from 'baseScss/components/wrapper.module.scss';
import ButtonLink from 'components/shared/button-link/button-link';
import { ErrorMessage, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import classes from './settings-account.module.scss';

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
    <div className={classes.container}>
      <div className={wrapper.profileSettingsWrapper}>
        <h2 className={classes.title}>{t('profile.emailAddress')}</h2>
        <p className={classes.subtitle}>{t('profile.addRemoveEmail')}</p>
        <p>{t('profile.addedEmails')}</p>
        <div className={classes.row}>
          <p className={classes.email}>{t('profile.emailAddress')}</p>
          <p className={classes.email}>{t('profile.primary')}</p>
        </div>
        {!displayEmail ? (
          <div className={classes.buttonContainer} onClick={() => openEmail()}>
            <ButtonLink>{t('profile.addEmail')}</ButtonLink>
          </div>
        ) : (
          <div>
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
                <Form className={classes.formContainer}>
                  <TextField
                    className={classes.InputEmail}
                    label={t('profile.emailAddress')}
                    name="email"
                    onChange={(event) => setFieldValue('email', event.target.value)}
                  />
                  <ErrorMessage className={classes.invalidFeedback} component="div" name="email" />
                  <p className={classes.securityWarning}>{t('profile.securityMsg')}</p>
                  <TextField
                    className={classes.InputEmail}
                    label={t('profile.currentPassword')}
                    name="password"
                    type="password"
                    onChange={(event) => setFieldValue('password', event.target.value)}
                  />
                  <ErrorMessage className={classes.invalidFeedback} component="div" name="email" />

                  <div className={classes.formButtons}>
                    <Button
                      className={classes.cancel}
                      type="button"
                      variant="contained"
                      onClick={() => toggleEmail(resetForm)}
                    >
                      {t('profile.cancel')}
                    </Button>
                    <Button
                      className={classes.submit}
                      color="primary"
                      disabled={!isValid}
                      type="submit"
                      variant="contained"
                    >
                      {t('profile.sendVerification')}
                    </Button>

                    {verificationSent ? <p>{t('profile.checkEmail')}</p> : ''}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsAccountPage;
