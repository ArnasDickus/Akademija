import React from 'react';
import classes from './login.module.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    render () {
        return (
            <div>
                Sign In page.
            </div>
        )
    }
}

export default Login;
