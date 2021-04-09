import AllRoutesEnum from 'core/enums/allRoutes.enum';
import LanguagesEnum from 'core/enums/languages.enum';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { selectCurrentUser } from 'redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { HeaderWrapper } from 'styles/components/wrapper';

import Hamburger from './hamburger/hamburger.component';
import * as S from './header.styles';
import HeaderDropdown from './header-dropdown/header-dropdown';
import SideMenu from './sideMenu/sideMenu';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header: React.FC<any> = (props) => {
  const [menu, openMenu] = useState(false);
  const [hamburger, openHamburger] = useState(false);
  const { t } = useTranslation();

  const changeLanguage = (lng: string): void => {
    // eslint-disable-next-line no-console
    console.log(lng, 'lng');
    // i18n.changeLanguage(lng);
  };

  return (
    <S.Header>
      <HeaderWrapper>
        <Hamburger
          hamburger={hamburger}
          hamburgerOpen={() => openHamburger(!hamburger)}
          menuOpen={() => openMenu(!menu)}
        />
        {menu ? (
          <SideMenu hamburgerOpen={() => openHamburger(false)} menuOpen={() => openMenu(false)} />
        ) : (
          ''
        )}

        <div className="row">
          <div>
            <Link href={`/${AllRoutesEnum.CATEGORIES}`}>
              <span className="navLink">{t('header.courses')}</span>
            </Link>
          </div>

          <div>
            <Link href="/">
              <span className="navLink">{t('header.academy')}</span>
            </Link>
          </div>

          <div className="navLink">
            {props.currentUser ? (
              <React.Fragment>
                <span className="navLink">
                  <HeaderDropdown />
                </span>

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
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link href={`/${AllRoutesEnum.LOGIN}`}>
                  <span className="navLink">{t('header.login')}</span>
                </Link>

                <Link href={`/${AllRoutesEnum.REGISTER}`}>
                  <span className="navLink">{t('header.register')}</span>
                </Link>

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
              </React.Fragment>
            )}
          </div>
        </div>
      </HeaderWrapper>
    </S.Header>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = createStructuredSelector<any, any>({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
