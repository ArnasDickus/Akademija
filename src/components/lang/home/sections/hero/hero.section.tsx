import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './hero.module.scss';
import * as SC from './hero.styled';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SC.Container className={classes.container}>
      <div className={classes.imageContainer}>
        <Image alt="Hero" layout="fill" src="/assets/hero-resize.jpg" />
      </div>

      <SC.TextContainer>
        <h1>{t('heroPage.title')}</h1>
        <p className={classes.subtitle}>{t('heroPage.subtitle')}</p>
      </SC.TextContainer>
    </SC.Container>
  );
};

export default Hero;
