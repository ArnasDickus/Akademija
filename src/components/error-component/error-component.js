import React from 'react';
import classes from './error-component.module.scss';

const ErrorComponent = ({errorType}) => {
    let errorMessage = '';

    switch (errorType) {
        case 'auth/wrong-password':
            errorMessage = 'Slaptažodis neteisingas';
            break;
        case 'auth/too-many-requests':
            errorMessage = 'Vartotojas laikinai užblokuotas pamėginkite po 5 minučių';
            break;
        case 'auth/email-already-in-use':
            errorMessage = 'Šis emailas jau yra naudojamas'
            break;

        default:
        errorMessage = 'Nežinoma klaida'
    }

    return (
        <p className={classes.error}>
            { errorMessage }
        </p>
        )
}

export default ErrorComponent;
