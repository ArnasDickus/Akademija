import React, { useState } from 'react';
import classes from './register.module.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, createUserProfileDocument, sendEmailVerification } from "../../firebase/firebase.utils";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import TextInput from "../../components/form-input/form-input.component";
import ErrorComponent from "../../components/error-component/error-component";

const Register = () => {
    const [errorType, setErrorType] = useState('');
    const [hasError, setHasError] = useState(false);

    return (
        <div className={classes.register}>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>Neturi prisijungimo? </h2>
                <span>Registracija</span>

                <Formik
                    initialValues={{
                        displayName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}

                    validationSchema={Yup.object({
                        displayName: Yup.string()
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .min(6, 'Password should be at least 6 characters')
                            .required('Required'),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password'), null], "Passwords don't match")
                            .required('Confirm Password is required'),
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
                        <TextInput
                            label="Display Name"
                            name="displayName"
                            type="text"/>

                        <TextInput
                            label="Email"
                            name="email"
                            type="email"/>

                        <TextInput
                            label="Password"
                            name="password"
                            type="password"/>

                        <TextInput
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"/>

                        { hasError && <ErrorComponent errorType={errorType} /> }

                        <CustomButton type="submit">Registruotis</CustomButton>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Register;
