import React from 'react';
import classes from './login.module.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event =>  {
        event.preventDefault();
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render () {
        return (
            <div className={classes.login}>
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
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton type="button" isGoogleSignIn> Sign In with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
