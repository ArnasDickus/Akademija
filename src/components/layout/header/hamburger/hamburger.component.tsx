import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './hamburger.module.scss';

type Props = {
  menuOpen: () => void;
  hamburgerOpen: () => void;
  hamburger: boolean;
};

const Hamburger: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  const handleClick = (): void => {
    props.hamburgerOpen();
    props.menuOpen();
  };

  return (
    <div className={classes.hamburger}>
      <span className={classes.title}>{t('header.academy')}</span>
      {props.hamburger ? (
        <>
          <FontAwesomeIcon icon={faTimes} onClick={handleClick} />
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faBars} onClick={handleClick} />
        </>
      )}
    </div>
  );
};

export default Hamburger;
