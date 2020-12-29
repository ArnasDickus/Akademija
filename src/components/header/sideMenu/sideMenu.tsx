import React from "react";
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "redux/user/user.selector";
import {connect} from 'react-redux';
import {auth} from "firebase/firebase.utils";
import {useTranslation} from "react-i18next";
import {ReactComponent as LTSvg} from "assets/lt.svg";
import {ReactComponent as GBSvg} from "assets/gb.svg";
import currentUserInterface from "core/interfaces/currentUser.interface";
import LanguagesEnum from "core/enums/languages.enum";
import AllRoutesEnum from "core/enums/allRoutes.enum";

import classes from './sideMenu.module.scss';

type Props = {
    currentUser: currentUserInterface;
}

const SideMenu: React.FC<Props> = ({currentUser}) => {
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <aside>
            <div className={classes.sideMenu}>
                {
                    currentUser
                        ? <div className={classes.card}>
                            <div className={classes.navLink} onClick={() => auth.signOut()}>{t('header.logout')}</div>
                        </div>

                        : <div className={classes.card}>
                            <Link className={classes.navLink} to={`/${AllRoutesEnum.LOGIN}`}>{t('header.login')}</Link>
                            <Link className={classes.navLink}
                                  to={`/${AllRoutesEnum.REGISTER}`}>{t('header.register')}</Link>
                        </div>
                }
                <div className={classes.card2}>
                    <Link className={classes.navLink} to={`${AllRoutesEnum.COURSES}`}>{t('header.courses')}</Link>
                    <Link className={classes.navLink} to="/">{t('header.academy')}</Link>
                </div>

                <div className={classes.svgContainer}>
                    <span className={classes.paddingR}>
                        <LTSvg height="20px" width="40px" onClick={() => changeLanguage(LanguagesEnum.LT)}/>
                    </span>

                    <span>
                        <GBSvg height="20px" width="40px" onClick={() => changeLanguage(LanguagesEnum.EN)}/>
                    </span>
                </div>
            </div>
        </aside>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(SideMenu);
