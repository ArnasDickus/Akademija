import React from 'react';
import HeroImage from 'assets/hero.jpg';
import classes from './hero.module.scss';
import {useTranslation} from 'react-i18next';

const Hero: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className={classes.container}>
            <img className={classes.img} src={HeroImage} alt=""/>

            <div className={classes.textContainer}>
                <h1 className={classes.title}>
                    {t('heroPage.title')}
                </h1>
                <p className={classes.subtitle}>
                    {t('heroPage.subtitle')}
                </p>
            </div>
        </div>
    )
}

export default Hero;
