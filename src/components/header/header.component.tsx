import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from 'redux/user/user.selector';
import { ReactComponent as LTSvg } from 'assets/lt.svg';
import { ReactComponent as GBSvg } from 'assets/gb.svg';
import { useTranslation } from 'react-i18next';
import AllRoutesEnum from 'core/enums/allRoutes.enum';
import LanguagesEnum from 'core/enums/languages.enum';
import wrapper from 'baseScss/components/wrapper.module.scss';

import HeaderDropdown from './header-dropdown/header-dropdown';
import SideMenu from './sideMenu/sideMenu';
import Hamburger from './hamburger/hamburger.component';
import classes from './header.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header: React.FC<any> = (props) => {
  const [menu, openMenu] = useState(false);
  const [hamburger, openHamburger] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={classes.header}>
      <div className={wrapper.headerWrapper}>
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

        <div className={classes.row}>
          <div>
            <Link className={classes.navLink} to={`/${AllRoutesEnum.COURSES}`}>
              {t('header.courses')}
            </Link>
          </div>

          <div>
            <Link className={classes.navLink} to="/">
              {t('header.academy')}
            </Link>
          </div>

          <div className={classes.navLink}>
            {props.currentUser ? (
              <React.Fragment>
                <span className={classes.navLink}>
                  <HeaderDropdown />
                </span>

                <span className={classes.paddingR}>
                  <LTSvg
                    height="20px"
                    width="40px"
                    onClick={() => changeLanguage(LanguagesEnum.LT)}
                  />
                </span>

                <span>
                  <GBSvg
                    height="20px"
                    width="40px"
                    onClick={() => changeLanguage(LanguagesEnum.EN)}
                  />
                </span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link className={classes.navLink} to={`/${AllRoutesEnum.LOGIN}`}>
                  {t('header.login')}
                </Link>

                <Link className={classes.navLink} to={`/${AllRoutesEnum.REGISTER}`}>
                  {t('header.register')}
                </Link>

                <span className={classes.paddingR}>
                  <LTSvg
                    height="20px"
                    width="40px"
                    onClick={() => changeLanguage(LanguagesEnum.LT)}
                  />
                </span>

                <span>
                  <GBSvg
                    height="20px"
                    width="40px"
                    onClick={() => changeLanguage(LanguagesEnum.EN)}
                  />
                </span>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = createStructuredSelector<any, any>({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
