import React, { useState } from 'react';
import classes from './forgot-password.module.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormInput from "../../components/form-input/form-input.component";
import ErrorComponent from "../../components/error-message/error-message.component";
import SuccessComponent from "../../components/success-message/success-message.component";
import { useTranslation } from "react-i18next";
import wrapper from '../../baseScss/components/wrapper.module.scss';

const ForgotPasswordPage: React.FC = () => {
    const [errorType, setErrorType] = useState('');
    const [hasSuccess, setHasSuccess] = useState(false);
    const [hasError, setHasError] = useState(false);
    const { t, i18n } = useTranslation();

    return (
        <div className={classes.forgotPassword}>
            <div className={wrapper.authWrapper}>
                <h2 className={classes.title}>{t('login.forgotPassword')}</h2>

                <Formik
                    initialValues={{
                        email: '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email(i18n.t('errorMessage.invalidEmail'))
                            .required(i18n.t('errorMessage.required')),
                    })}
                    onSubmit= {async (values) => {
                        const  { email } = values;
                        setHasSuccess(false);
                        setHasError(false);

                        auth.languageCode = document.documentElement.lang;
                        auth.sendPasswordResetEmail(email).then(() => {
                            setHasSuccess(true);
                        }).catch((error) => {
                            setErrorType(error.code)
                            setHasError(true);
                        });
                    }}>

                    <Form>
                        <FormInput
                            label={t('login.emailLabel')}
                            name="email"
                            type="email"/>

                        { hasError && <ErrorComponent errorType={errorType} /> }
                        { hasSuccess && <SuccessComponent>{t('login.emailSendSuccess')}</SuccessComponent>}
                        <CustomButton type="submit">{t('login.resetPassword')} </CustomButton>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;
