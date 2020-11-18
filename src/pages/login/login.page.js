import React from 'react';
import classes from './login.module.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from "../../components/text-input/text-input.component";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async event =>  {
        event.preventDefault();
        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = async event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render () {
        return (
            <div className={classes.login}>
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
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form>
                        <TextInput
                            label="Email Address"
                            name="email"
                            type="email"
                        />
                        <TextInput
                            label="Password"
                            name="password"
                            type="password"
                        />

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>


                <div className={classes.wrapper}>
                    <h2 className={classes.title}>Turi prisijungimą</h2>
                    <span>Prisijunk čia.</span>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name="email"
                            value={this.state.email}
                            handleChange={this.handleChange}
                            label="email"
                            required />

                        <FormInput name="password"
                                   type="password"
                                   value={this.state.password}
                                   handleChange={this.handleChange}
                                   label="password"
                                   required />
                        <div className={classes.buttons}>
                            <CustomButton type="submit"> Prisijungti </CustomButton>
                            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                                Prisijungti su "Google"
                            </CustomButton>
                        </div>

                        <div className={classes.linkContainer}>
                            <Link className={classes.link}  to="forgot-password">Pamiršai slaptažodį?</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
