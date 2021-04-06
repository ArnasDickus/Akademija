import TextField from '@material-ui/core/TextField';
import CustomButton from 'components/shared/custom-button/custom-button.component';
import ErrorComponent from 'components/shared/error-message/error-message.component';
import FormInput from 'components/shared/form-input/form-input.component';
import DatePicker from 'components/ui/date-picker/date-picker.component';
import SelectComponent from 'components/ui/select/select.component';
import SuccessComponent from 'components/ui/success-message/success-message.component';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileSettingsWrapper } from 'styles/components/wrapper';
import * as Yup from 'yup';

import * as S from './settings-profile.styles';

const SettingsProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const [errorType, setErrorType] = useState('');
  const [hasError, setHasError] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const genderOptions = [t('gender.male'), t('gender.female'), t('gender.other')];

  return (
    <S.Container>
      <ProfileSettingsWrapper>
        <Formik
          initialValues={{
            nickName: '',
            gender: t('gender.male'),
            birthdate: '',
            bio: '',
          }}
          validationSchema={Yup.object({
            nickName: Yup.string().min(2, t('errorMessage.displayName')),
          })}
          onSubmit={async (values) => {
            setHasError(false);
            setSaveSuccess(true);

            setTimeout(() => {
              setSaveSuccess(false);
            }, 3000);

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
              <FormInput label={t('login.displayName')} name="nickName" type="text" />
              <div className="textField">
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
              {saveSuccess ? (
                <SuccessComponent>{t('profile.successMessage')}</SuccessComponent>
              ) : (
                ''
              )}
            </Form>
          )}
        </Formik>
      </ProfileSettingsWrapper>
    </S.Container>
  );
};

export default SettingsProfilePage;
