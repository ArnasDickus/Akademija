import React from 'react';
import classes from './login.module.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

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
                            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Prisijungti su "Google" </CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
