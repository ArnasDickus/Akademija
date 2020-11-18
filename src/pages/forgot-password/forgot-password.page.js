import React, { useState } from 'react';
import classes from './forgot-password.module.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormInput from "../../components/form-input/form-input.component";
import ErrorComponent from "../../components/error-component/error-component";
import SuccessComponent from "../../components/success-component/success-component";

const ForgotPasswordPage = () => {
    const [errorType, setErrorType] = useState('');
    const [hasSuccess, setHasSuccess] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={classes.forgotPassword}>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>Pamiršai slaptažodį?</h2>

                <Formik
                    initialValues={{
                        email: '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
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
                            label="Email Address"
                            name="email"
                            type="email"/>

                        { hasError && <ErrorComponent errorType={errorType} /> }
                        { hasSuccess && <SuccessComponent >Laiškas išsiųstas sėkmingai</SuccessComponent>}
                        <CustomButton type="submit"> Atstatyti slaptažodį </CustomButton>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;
