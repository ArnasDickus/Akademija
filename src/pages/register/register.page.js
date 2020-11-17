import React from 'react';
import classes from './register.module.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, createUserProfileDocument, sendEmailVerification } from "../../firebase/firebase.utils";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        const { displayName, email, password, confirmPassword } = this.state;
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            sendEmailVerification();

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className={classes.register}>
                <div className={classes.wrapper}>
                    <h2 className={classes.title}>Neturi prisijungimo? </h2>
                    <span>Registracija</span>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            type="text"
                            name="displayName"
                            value={displayName}
                            onChange={this.handleChange}
                            label="Display Name"
                            required>
                        </FormInput>

                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            label="Email"
                            required>
                        </FormInput>

                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            label="Password"
                            required>
                        </FormInput>

                        <FormInput
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={this.handleChange}
                            label="ConfirmPassword"
                            required>
                        </FormInput>

                        <CustomButton type="submit">Registruotis</CustomButton>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;
