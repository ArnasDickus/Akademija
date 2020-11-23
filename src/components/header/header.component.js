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

const Header = (props) => {
    const [menu, openMenu] = useState(false);

    const { i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={classes.header}>
            <div className={classes.wrapper}>
                <Hamburger menuOpen={() => openMenu(!menu)} />
                { menu ? (
                    <SideMenu />
                ) : (
                    ""
                )}

                <div className={classes.row}>
                    <div>
                        <Link className={classes.navLink} to="/courses">Kursai</Link>
                    </div>

                    <div>
                        <Link className={classes.navLink} to="/">Akademija</Link>
                    </div>

                    <div className={classes.navLink}>
                        {
                            props.currentUser
                                ?   <div  onClick={() => auth.signOut()}>Atsijungti</div>

                                :   <React.Fragment>
                                        <Link className={classes.navLink} to="/login">Prisijungti</Link>
                                        <Link className={classes.navLink} to="/register">Registruotis</Link>
                                    </React.Fragment>
                        }

                        <span className={classes.paddingR}>
                            <LTSvg  width="40px" height="20px" onClick={() => changeLanguage('lt')} />
                        </span>

                        <span>
                            <GBSvg width="40px" height="20px" onClick={() => changeLanguage('en')} />
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
