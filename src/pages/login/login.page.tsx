import React, {useState} from 'react';
import CustomButton from "components/custom-button/custom-button.component";
import {auth} from "firebase/firebase.utils";
import {Link} from "react-router-dom";
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormInput from "components/form-input/form-input.component";
import ErrorComponent from "components/error-message/error-message.component";
import {useTranslation} from "react-i18next";
import AllRoutesEnum from "core/enums/allRoutes.enum";
import wrapper from 'baseScss/components/wrapper.module.scss';

import classes from './login.module.scss';

const LoginPage: React.FC = () => {
    const [errorType, setErrorType] = useState('');
    const [hasError, setHasError] = useState(false);
    const {t, i18n} = useTranslation();

    return (
        <div className={classes.login}>
            <div className={wrapper.authWrapper}>
                <h2 className={classes.title}>{t('login.title')}</h2>
                <span>{t('login.subtitle')}</span>

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object({
                        password: Yup.string()
                            .min(6, i18n.t('errorMessage.passwordMin'))
                            .required(i18n.t('errorMessage.required')),
                        email: Yup.string()
                            .email(i18n.t('errorMessage.invalidEmail'))
                            .required(i18n.t('errorMessage.required')),
                    })}
                    onSubmit={async (values) => {
                        setHasError(false);
                        const {email, password} = values

                        try {
                            await auth.signInWithEmailAndPassword(email, password);
                        } catch (error) {
                            setErrorType(error.code)
                            setHasError(true);
                        }
                    }}>

                    <Form>
                        <FormInput
                            label={t('login.emailLabel')}
                            name="email"
                            type="email"/>
                        <FormInput
                            label={t('login.passwordLabel')}
                            name="password"
                            type="password"/>

                        {hasError && <ErrorComponent errorType={errorType}/>}

                        <div className={classes.buttons}>
                            <CustomButton type="submit"> {t('login.login')} </CustomButton>
                            {/* <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>
                                {t('login.loginGoogle')}
                            </CustomButton> */}
                        </div>

                        <div className={classes.linkContainer}>
                            <Link className={classes.link}
                                  to={`${AllRoutesEnum.FORGOT_PASSWORD}`}>{t('login.forgotPassword')}</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default LoginPage;
