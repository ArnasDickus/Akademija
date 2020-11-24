import React, { useState } from 'react';
import classes from './register.module.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, createUserProfileDocument, sendEmailVerification } from "../../firebase/firebase.utils";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormInput from "../../components/form-input/form-input.component";
import ErrorComponent from "../../components/error-message/error-message.component";
import { useTranslation } from "react-i18next";

const Register = () => {
    const [errorType, setErrorType] = useState('');
    const [hasError, setHasError] = useState(false);
    const { t, i18n } = useTranslation();

    return (
        <div className={classes.register}>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>{t('login.cantLogin')} </h2>
                <span>{t('login.register')}</span>

                <Formik
                    initialValues={{
                        displayName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}

                    validationSchema={Yup.object({
                        displayName: Yup.string()
                            .required(i18n.t('errorMessage.required')),
                        email: Yup.string()
                            .email(i18n.t('errorMessage.invalidEmail'))
                            .required(i18n.t('errorMessage.required')),
                        password: Yup.string()
                            .min(6, i18n.t('errorMessage.passwordMin'))
                            .required(i18n.t('errorMessage.required')),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password'), null], i18n.t('errorMessage.passwordsNoMatch'))
                            .required(i18n.t('errorMessage.required')),
                    })}

                    onSubmit= { async (values) => {
                            const { displayName, email, password } = values

                            try {
                                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                                await createUserProfileDocument(user, {displayName});
                                sendEmailVerification();

                            } catch(error) {
                                setErrorType(error.code)
                                setHasError(true);
                            }
                        }
                    }>

                    <Form>
                        <FormInput
                            label={t('login.displayName')}
                            name="displayName"
                            type="text"/>

                        <FormInput
                            label={t('login.emailLabel')}
                            name="email"
                            type="email"/>

                        <FormInput
                            label={t('login.passwordLabel')}
                            name="password"
                            type="password"/>

                        <FormInput
                            label={t('login.confirmPasswordLabel')}
                            name="confirmPassword"
                            type="password"/>

                        { hasError && <ErrorComponent errorType={errorType} /> }

                        <CustomButton type="submit">{t('login.register')}</CustomButton>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Register;
