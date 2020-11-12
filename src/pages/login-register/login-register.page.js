import React from 'react';
import Login from "../../components/login/login.page";
import Register from "../../components/register/register.page";
import classes from './login-register.module.scss';

const LoginRegister = () => {
    return (
        <div className={classes.loginRegister}>
            <Login />
            <Register />
        </div>
    )
}

export default LoginRegister;
