import React from 'react';
import classes from './register.module.scss';

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

    render() {
        return (
            <div>
                Register page
            </div>
        )
    }
}

export default Register;
