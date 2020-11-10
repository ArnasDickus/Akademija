import React from 'react';
import HeroImage from '../../../../assets/hero.jpg';
import classes from './hero.module.scss';


const Hero = () => {
    return (
            <div className={classes.container}>
                <img className={classes.img} src={HeroImage} alt="" />

                <div className={classes.textContainer}>
                    <h1 className={classes.title}>
                        Ruoštis egzaminui niekada nevėlu.
                    </h1>
                    <p className={classes.subtitle}>Mes esame ne pelno siekianti organizacija su misija pateikti nemokamą, išsilavinimą visiems visur</p>
                </div>
            </div>
    )
}

export default Hero;

