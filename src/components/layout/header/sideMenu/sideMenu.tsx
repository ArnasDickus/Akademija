// import { useTranslation } from 'react-i18next';
import LanguagesEnum from 'core/enums/languages.enum';
import Image from 'next/image';
import React from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from 'redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

// import AllRoutesEnum from 'core/enums/allRoutes.enum';
import SideMenuList from '../side-menu-list/side-menu-list';
import classes from './sideMenu.module.scss';

type Props = {
  menuOpen: () => void;
  hamburgerOpen: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentUser?: any;
};

const SideMenu: React.FC<Props> = (props) => {
  // const { t, i18n } = useTranslation();

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
      <div className={classes.sideMenu}>
        <div className={classes.card2}>
          {/* <Link
            className={classes.navLink}
            to={`${AllRoutesEnum.COURSES}`}
            onClick={() => closeMenu()}
          >
            {t('header.courses')}
          </Link>
          <Link className={classes.navLink} to="/" onClick={() => closeMenu()}>
            {t('header.academy')}
          </Link> */}
        </div>

        {props.currentUser ? (
          <div className={classes.card}>
            <SideMenuList closeMenu={() => closeMenu()} />
          </div>
        ) : (
          <div className={classes.card}>
            {/* <Link
              className={classes.navLink}
              to={`/${AllRoutesEnum.LOGIN}`}
              onClick={() => closeMenu()}
            >
              {t('header.login')}
            </Link>
            <Link
              className={classes.navLink}
              to={`/${AllRoutesEnum.REGISTER}`}
              onClick={() => closeMenu()}
            >
              {t('header.register')}
            </Link> */}
          </div>
        )}

        <div className={classes.svgContainer}>
          <span className={classes.paddingR}>
            <Image
              alt="LT"
              height={20}
              src="/assets/lt.svg"
              width={40}
              onClick={() => changeLanguage(LanguagesEnum.LT)}
            />

            {/* <LTSvg height="20px" width="40px" onClick={() => changeLanguage(LanguagesEnum.LT)} /> */}
          </span>

          <span>
            <Image
              alt="GB"
              height={20}
              src="/assets/gb.svg"
              width={40}
              onClick={() => changeLanguage(LanguagesEnum.EN)}
            />
            {/* <GBSvg height="20px" width="40px" onClick={() => changeLanguage(LanguagesEnum.EN)} /> */}
          </span>
        </div>
      </div>
    </aside>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = createStructuredSelector<any, any>({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SideMenu);
