import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileSettingsWrapper } from 'styles/components/wrapper';
import * as Yup from 'yup';

import * as S from './settings-close-account.styles';
const CloseAccountPage: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <S.Container>
      <ProfileSettingsWrapper>
        <p>{t('profile.profileCloseAccountTitle')}</p>
        <p>
          <span className="warn">{t('profile.warning')}: </span>
          {t('profile.warnMsg')}
        </p>
        <div onClick={handleOpen}>
          <Button color="secondary" variant="contained">
            {t('profile.profileCloseAccountTitle')}
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
            <div className="modal">
              <Formik
                initialValues={{
                  password: '',
                }}
                validationSchema={Yup.object({
                  password: Yup.string().required(t('errorMessage.required')),
                })}
                onSubmit={(values) => {
                  // eslint-disable-next-line no-console
                  console.log(values);
                }}
              >
                {({ setFieldValue, isValid }) => (
                  <Form>
                    <h2 className="title">{t('profile.profileCloseAccountTitle')}</h2>
                    <p>{t('profile.securityMsg')}</p>
                    <TextField
                      className="InputEmail"
                      label={t('profile.currentPassword')}
                      name="password"
                      type="password"
                      onChange={(event) => setFieldValue('password', event.target.value)}
                    />
                    <ErrorMessage className="invalidFeedback" component="div" name="email" />

                    <div className="formButtons">
                      <Button type="button" variant="contained" onClick={handleClose}>
                        {t('profile.cancel')}
                      </Button>
                      <Button
                        color="secondary"
                        disabled={!isValid}
                        type="submit"
                        variant="contained"
                      >
                        {t('profile.profileCloseAccountTitle')}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Fade>
        </Modal>
      </ProfileSettingsWrapper>
    </S.Container>
  );
};

export default CloseAccountPage;
