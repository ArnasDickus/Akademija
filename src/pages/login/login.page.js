import React, {useState} from 'react';
import classes from './login.module.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from "../../components/text-input/text-input.component";
import ErrorComponent from "../../components/error-component/error-component";

const LoginPage = () => {
    const [errorType, setErrorType] = useState('');
    const [hasError, setHasError] = useState(false);

    return (
        <div className={classes.login}>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>Turi prisijungimą</h2>
                <span>Prisijunk čia.</span>

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object({
                        password: Yup.string()
                            .min(6, 'Password should be at least 6 characters')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                    })}
                    onSubmit= {async (values) => {
                        setHasError(false);
                        const { email, password } = values
                        try {
                            await auth.signInWithEmailAndPassword(email, password);
                        } catch (error) {
                            setErrorType(error.code)
                            console.log(error);
                            setHasError(true);
                        }
                    }}>

                    <Form>
                        <TextInput
                            label="Email Address"
                            name="email"
                            type="email"/>
                        <TextInput
                            label="Password"
                            name="password"
                            type="password"/>

                        { hasError && <ErrorComponent errorType={errorType} /> }

                        <div className={classes.buttons}>
                            <CustomButton type="submit"> Prisijungti </CustomButton>
                            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                                Prisijungti su "Google"
                            </CustomButton>
                        </div>

                        <div className={classes.linkContainer}>
                            <Link className={classes.link}  to="forgot-password">Pamiršai slaptažodį?</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default LoginPage;
