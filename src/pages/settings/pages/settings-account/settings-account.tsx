import React, { useState } from 'react';
import wrapper from 'baseScss/components/wrapper.module.scss';
import ButtonLink from 'components/shared/button-link/button-link';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Formik, Form, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import classes from './settings-account.module.scss';

const SettingsAccount: React.FC = () => {
  const [displayEmail, setDisplayEmail] = useState(false);
  const { i18n } = useTranslation();
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
        <h2 className={classes.title}>Email Address</h2>
        <p className={classes.subtitle}>Add or remove email adresses on your accont</p>
        <p>Email addresses you added:</p>
        <div className={classes.row}>
          <p className={classes.email}>Email address</p>
          <p className={classes.email}>Primary</p>
        </div>
        {!displayEmail ? (
          <div className={classes.buttonContainer} onClick={() => openEmail()}>
            <ButtonLink>Add Email Address</ButtonLink>
          </div>
        ) : (
          <div>
            <Formik
              initialValues={{
                email: '',
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email(i18n.t('errorMessage.invalidEmail'))
                  .required(i18n.t('errorMessage.required')),
                password: Yup.string().required(i18n.t('errorMessage.required')),
              })}
              onSubmit={(values) => {
                setVerficationSent(true);

                setTimeout(() => {
                  setVerficationSent(false);
                }, 5000);
                console.log(values, 'values');
              }}
            >
              {({ setFieldValue, resetForm, isValid }) => (
                <Form className={classes.formContainer}>
                  <TextField
                    className={classes.InputEmail}
                    label="Email address"
                    name="email"
                    onChange={(event) => setFieldValue('email', event.target.value)}
                  />
                  <ErrorMessage className={classes.invalidFeedback} component="div" name="email" />
                  <p className={classes.securityWarning}>
                    For your security, enter your password to make this change
                  </p>
                  <TextField
                    className={classes.InputEmail}
                    label="Current password"
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
                      Cancel
                    </Button>
                    <Button color="primary" disabled={!isValid} type="submit" variant="contained">
                      Send verification
                    </Button>

                    {verificationSent ? <p>Check your email</p> : ''}
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

export default SettingsAccount;
