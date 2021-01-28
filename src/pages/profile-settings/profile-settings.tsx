import React, { useState } from 'react';
import wrapper from 'baseScss/components/wrapper.module.scss';
import CategoryTitle from 'components/category-title/category-title';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import CustomButton from 'components/custom-button/custom-button.component';
import FormInput from 'components/form-input/form-input.component';
import ErrorComponent from 'components/error-message/error-message.component';
import SelectComponent from 'components/ui/select/select.component';
import DatePicker from 'components/ui/date-picker/date-picker.component';
import TextField from '@material-ui/core/TextField';

import classes from './profile.module.scss';

const ProfileSettings: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [errorType, setErrorType] = useState('');
  const [hasError, setHasError] = useState(false);
  const genderOptions = [i18n.t('gender.male'), i18n.t('gender.female'), i18n.t('gender.other')];

  return (
    <React.Fragment>
      <CategoryTitle title={t('profile.profileSettings')} />
      <div className={wrapper.profileSettingsWrapper}>
        <h2>{t('profile.basicsSection')}</h2>
        <Formik
          initialValues={{
            nickName: '',
            gender: i18n.t('gender.male'),
            birthdate: '',
            bio: '',
          }}
          validationSchema={Yup.object({
            nickName: Yup.string().min(2, i18n.t('errorMessage.displayName')),
          })}
          onSubmit={async (values) => {
            setHasError(false);

            try {
              // eslint-disable-next-line no-console
              console.log(values);
            } catch (error) {
              setErrorType(error.code);
              setHasError(true);
            }
          }}
        >
          {(props) => (
            <Form>
              <FormInput label={i18n.t('login.displayName')} name="nickName" type="text" />
              <div className={classes.textField}>
                <TextField
                  defaultValue=""
                  label={t('profile.bio')}
                  name="bio"
                  rows={4}
                  variant="outlined"
                  multiline
                  onChange={(event) => props.setFieldValue('bio', event.target.value)}
                />
              </div>
              <SelectComponent name="gender" options={genderOptions} />
              <DatePicker FormikProps={props} label="Birthdate" name="birthdate" />

              {hasError && <ErrorComponent errorType={errorType} />}

              <div>
                <CustomButton type="submit"> {t('profile.saveChanges')} </CustomButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};

export default ProfileSettings;
