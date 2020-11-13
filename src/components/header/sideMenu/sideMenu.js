import React from "react";
import classes from './sideMenu.module.scss';
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { connect } from 'react-redux';
import {auth} from "../../../firebase/firebase.utils";


const SideMenu = ({currentUser}) => {
    return (
        <aside>
            <div className={classes.sideMenu}>
                    {
                        currentUser
                            ?   <div className={classes.card}>
                                    <div className={classes.navLink} onClick={() => auth.signOut()}>Atsijungti</div>
                                </div>

                            :   <div className={classes.card}>
                                    <Link className={classes.navLink} to="/login">Prisijungti</Link>
                                    <Link className={classes.navLink} to="/register">Registruotis</Link>
                                </div>
                    }
                <div className={classes.card2}>
                    <Link className={classes.navLink} to="/courses">Kursai</Link>
                    <Link className={classes.navLink} to="/">Akademija</Link>
                </div>
            </div>
        </aside>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(SideMenu);
