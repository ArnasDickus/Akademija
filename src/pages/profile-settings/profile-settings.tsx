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

const ProfileSettings: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [errorType, setErrorType] = useState('');
  const [hasError, setHasError] = useState(false);

  return (
    <React.Fragment>
      <CategoryTitle title="Profile Settings" />
      <div className={wrapper.headerWrapper}>
        <h2>Basics</h2>
        <Formik
          initialValues={{
            nickName: '',
            userName: '',
            gender: '',
            birthdate: '',
            bio: '',
          }}
          validationSchema={Yup.object({
            nickName: Yup.string()
              .min(6, i18n.t('errorMessage.passwordMin'))
              .required(i18n.t('errorMessage.required')),
            userName: Yup.string().required(i18n.t('errorMessage.required')),
            gender: Yup.string().required(i18n.t('errorMessage.required')),
            birthdate: Yup.string().required(i18n.t('errorMessage.required')),
            bio: Yup.string().required(i18n.t('errorMessage.required')),
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
          <Form>
            <FormInput label="Nickname" name="nickName" type="text" />
            <FormInput label="User Name" name="userName" type="text" />
            <SelectComponent name="gender" />

            {hasError && <ErrorComponent errorType={errorType} />}

            <div>
              <CustomButton type="submit"> {t('login.login')} </CustomButton>
            </div>
          </Form>
        </Formik>
      </div>
    </React.Fragment>
  );
};

export default ProfileSettings;
