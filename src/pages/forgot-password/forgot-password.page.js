import React, { useState } from 'react';
import classes from './forgot-password.module.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import TextInput from "../../components/text-input/text-input.component";
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
                        <TextInput
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

// class ForgotPasswordPage extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             email: ''
//         }
//     }
//
//     handleSubmit = async event =>  {
//         event.preventDefault();
//         const  { email } = this.state;
//         auth.languageCode = document.documentElement.lang;
//         auth.sendPasswordResetEmail(email).then(() => {
//             // Email sent.
//             console.log('Password reset sent');
//         }).catch((error) => {
//             // An error happened.
//             console.log(error);
//         });
//     }
//
//     handleChange = async event => {
//         const {value, name} = event.target;
//         this.setState({[name]: value});
//     }
//
//     render() {
//         return  (
//             <div className={classes.forgotPassword}>
//                 <div className={classes.wrapper}>
//                     <h2 className={classes.title}>Pamiršai slaptažodį?</h2>
//
//                     <form onSubmit={this.handleSubmit}>
//                         <FormInput
//                             name="email"
//                             value={this.state.email}
//                             handleChange={this.handleChange}
//                             label="email"
//                             required />
//                             <CustomButton type="submit"> Atstatyti slaptažodį </CustomButton>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default ForgotPasswordPage;
