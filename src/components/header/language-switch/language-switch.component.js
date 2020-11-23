import React from 'react';
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {

    const { i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    return (
        <div>
            <button onClick={() => changeLanguage('lt')}>LT</button>
            <button onClick={() => changeLanguage('en')}>En</button>
        </div>
    )
}

export default LanguageSwitch
