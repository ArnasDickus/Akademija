import React from 'react';
import classes from './forgot-password.module.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";

class ForgotPasswordPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        }
    }

    handleSubmit = async event =>  {
        event.preventDefault();
        const  { email } = this.state;
        auth.languageCode = document.documentElement.lang;
        auth.sendPasswordResetEmail(email).then(() => {
            // Email sent.
            console.log('Password reset sent');
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    handleChange = async event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return  (
            <div className={classes.forgotPassword}>
                <div className={classes.wrapper}>
                    <h2 className={classes.title}>Pamiršai slaptažodį?</h2>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name="email"
                            value={this.state.email}
                            handleChange={this.handleChange}
                            label="email"
                            required />
                            <CustomButton type="submit"> Atstatyti slaptažodį </CustomButton>
                    </form>
                </div>
            </div>
        )
    }


}


export default ForgotPasswordPage;
