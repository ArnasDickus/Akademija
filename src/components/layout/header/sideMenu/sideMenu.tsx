import AllRoutesEnum from 'core/enums/allRoutes.enum';
import LanguagesEnum from 'core/enums/languages.enum';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { selectCurrentUser } from 'redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

import SideMenuList from '../side-menu-list/side-menu-list';
import * as S from './sideMenu.styles';

type Props = {
  menuOpen: () => void;
  hamburgerOpen: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentUser?: any;
};

const SideMenu: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string): void => {
    // eslint-disable-next-line no-console
    console.log(lng, 'lng');
    // i18n.changeLanguage(lng);
  };

  const closeMenu = () => {
    props.menuOpen();
    props.hamburgerOpen();
  };

  return (
    <aside>
      <S.SideMenu>
        <div className="card2">
          <Link href={`${AllRoutesEnum.COURSES}`}>
            <span className="navLink" onClick={() => closeMenu()}>
              {t('header.courses')}
            </span>
          </Link>
          <Link href="/">
            <span className="navLink" onClick={() => closeMenu()}>
              {' '}
              {t('header.academy')}
            </span>
          </Link>
        </div>

        {props.currentUser ? (
          <div className="card">
            <SideMenuList closeMenu={() => closeMenu()} />
          </div>
        ) : (
          <div className="card">
            <Link href={`/${AllRoutesEnum.LOGIN}`}>
              <span className="navLink" onClick={() => closeMenu()}>
                {' '}
                {t('header.login')}
              </span>
            </Link>
            <Link href={`/${AllRoutesEnum.REGISTER}`}>
              <span className="navLink" onClick={() => closeMenu()}>
                {t('header.register')}
              </span>
            </Link>
          </div>
        )}

        <div className="svgContainer">
          <span className="paddingR">
            <Image
              alt="LT"
              height={20}
              src="/assets/lt.svg"
              width={40}
              onClick={() => changeLanguage(LanguagesEnum.LT)}
            />
          </span>

          <span>
            <Image
              alt="GB"
              height={20}
              src="/assets/gb.svg"
              width={40}
              onClick={() => changeLanguage(LanguagesEnum.EN)}
            />
          </span>
        </div>
      </S.SideMenu>
    </aside>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = createStructuredSelector<any, any>({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SideMenu);
