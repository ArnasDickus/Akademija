import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import wrapper from 'baseScss/components/wrapper.module.scss';
import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import classes from './settings-close-account.module.scss';
const CloseAccount: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <div className={wrapper.profileSettingsWrapper}>
        <p>{i18n.t('profile.profileCloseAccountTitle')}</p>
        <p>
          <span className={classes.warn}>{i18n.t('profile.warning')}: </span>
          {i18n.t('profile.warnMsg')}
        </p>
        <div onClick={handleOpen}>
          <Button color="secondary" variant="contained">
            {i18n.t('profile.profileCloseAccountTitle')}
          </Button>
        </div>

        <Modal
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          open={open}
          closeAfterTransition
          onClose={handleClose}
        >
          <Fade in={open}>
            <div className={classes.modal}>
              <Formik
                initialValues={{
                  password: '',
                }}
                validationSchema={Yup.object({
                  password: Yup.string().required(i18n.t('errorMessage.required')),
                })}
                onSubmit={(values) => {
                  // eslint-disable-next-line no-console
                  console.log(values);
                }}
              >
                {({ setFieldValue, isValid }) => (
                  <Form>
                    <h2 className={classes.title}>{i18n.t('profile.profileCloseAccountTitle')}</h2>
                    <p>{i18n.t('profile.securityMsg')}</p>
                    <TextField
                      className={classes.InputEmail}
                      label={i18n.t('profile.currentPassword')}
                      name="password"
                      type="password"
                      onChange={(event) => setFieldValue('password', event.target.value)}
                    />
                    <ErrorMessage
                      className={classes.invalidFeedback}
                      component="div"
                      name="email"
                    />

                    <div className={classes.formButtons}>
                      <Button type="button" variant="contained" onClick={handleClose}>
                        {i18n.t('profile.cancel')}
                      </Button>
                      <Button
                        color="secondary"
                        disabled={!isValid}
                        type="submit"
                        variant="contained"
                      >
                        {i18n.t('profile.profileCloseAccountTitle')}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default CloseAccount;
