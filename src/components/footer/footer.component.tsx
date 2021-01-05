import React from 'react';
import {useTranslation} from "react-i18next";

import classes from './footer.module.scss';

const Footer: React.FC = () => {
    const {t} = useTranslation();

    return (
        <footer className={classes.footer}>
            <p className={classes.text}>{t('footer.copyright')} 2020</p>
        </footer>
    )
}

export default Footer;
