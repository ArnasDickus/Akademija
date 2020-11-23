import React from "react";
import classes from './sideMenu.module.scss';
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { connect } from 'react-redux';
import { auth } from "../../../firebase/firebase.utils";
import { useTranslation } from "react-i18next";
import { ReactComponent as LTSvg } from "../../../assets/lt.svg";
import { ReactComponent as GBSvg } from "../../../assets/gb.svg";

const SideMenu = ({currentUser}) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <aside>
            <div className={classes.sideMenu}>
                    {
                        currentUser
                            ?   <div className={classes.card}>
                                    <div className={classes.navLink} onClick={() => auth.signOut()}>{t('header.logout')}</div>
                                </div>

                            :   <div className={classes.card}>
                                    <Link className={classes.navLink} to="/login">{t('header.login')}</Link>
                                    <Link className={classes.navLink} to="/register">{t('header.register')}</Link>
                                </div>
                    }
                <div className={classes.card2}>
                    <Link className={classes.navLink} to="/courses">{t('header.courses')}</Link>
                    <Link className={classes.navLink} to="/">{t('header.academy')}</Link>
                </div>

                <div className={classes.svgContainer}>
                    <span className={classes.paddingR}>
                        <LTSvg  width="40px" height="20px" onClick={() => changeLanguage('lt')} />
                    </span>

                    <span>
                        <GBSvg width="40px" height="20px" onClick={() => changeLanguage('en')} />
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
