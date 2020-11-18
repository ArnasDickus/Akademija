import React from 'react';
import classes from './login.module.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from "../../components/text-input/text-input.component";

const LoginPage = () => {
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
                            .min(6, 'Must be 6 characters or more')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                    })}
                    onSubmit= {async (values) => {
                        const { email, password } = values
                        try {
                            await auth.signInWithEmailAndPassword(email, password);
                        } catch (error) {
                            // TODO Add better validation.
                            console.log(error);
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
