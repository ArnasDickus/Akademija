import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './hamburger.styles';

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
    <S.Hamburger>
      <span className="title">{t('header.academy')}</span>
      {props.hamburger ? (
        <>
          <FontAwesomeIcon icon={faTimes} onClick={handleClick} />
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faBars} onClick={handleClick} />
        </>
      )}
    </S.Hamburger>
  );
};

export default Hamburger;
