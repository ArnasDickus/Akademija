import React, { useState } from 'react';
import classes from './header.module.scss';
import { Link } from "react-router-dom";
import Hamburger from "./hamburger/hamburger.component";
import SideMenu from "./sideMenu/sideMenu";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { ReactComponent as LTSvg } from "../../assets/lt.svg";
import { ReactComponent as GBSvg } from "../../assets/gb.svg";
import { useTranslation } from "react-i18next";
import currentUserInterface from "../../core/interfaces/currentUser.interface";
import AllRoutesEnum from "../../core/enums/allRoutes.enum";
import LanguagesEnum from "../../core/enums/languages.enum";
import wrapper from '../../baseScss/components/wrapper.module.scss';

interface Props {
    currentUser: currentUserInterface;
}

const Header: React.FC<Props> = (props) => {
    const [menu, openMenu] = useState(false);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string): void => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={classes.header}>
            <div className={wrapper.headerWrapper}>
                <Hamburger menuOpen={() => openMenu(!menu)} />
                { menu ? (
                    <SideMenu />
                ) : (
                    ""
                )}

                <div className={classes.row}>
                    <div>
                        <Link className={classes.navLink} to={`/${AllRoutesEnum.COURSES}`}>{t('header.courses')}</Link>
                    </div>

                    <div>
                        <Link className={classes.navLink} to="/">{t('header.academy')}</Link>
                    </div>

                    <div className={classes.navLink}>
                        {
                            props.currentUser
                                ?   <div  onClick={() => auth.signOut()}>{t('header.logout')}</div>

                                :   <React.Fragment>
                                        <Link className={classes.navLink} to={`/${AllRoutesEnum.LOGIN}`}>
                                            {t('header.login')}
                                        </Link>

                                        <Link className={classes.navLink} to={`/${AllRoutesEnum.REGISTER}`}>
                                            {t('header.register')}
                                        </Link>
                                    </React.Fragment>
                        }

                        <span className={classes.paddingR}>
                            <LTSvg  width="40px" height="20px" onClick={() => changeLanguage(LanguagesEnum.LT)} />
                        </span>

                        <span>
                            <GBSvg width="40px" height="20px" onClick={() => changeLanguage(LanguagesEnum.EN)} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(Header);
