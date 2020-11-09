import React from 'react';
import HeroImage from '../../../assets/hero.jpg';
import classes from './hero.module.scss';



const Hero = () => {
    return (
            <div className={classes.container}>
                <img className={classes.img} src={HeroImage} alt="" />

                <div className={classes.textContainer}>
                    <h2>This is title</h2>
                </div>
            </div>
    )
}

export default Hero;

