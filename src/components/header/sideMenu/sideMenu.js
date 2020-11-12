import React from "react";
import classes from './sideMenu.module.scss';
import {Link} from "react-router-dom";

const SideMenu = () => {
    return (
        <aside>
            <div className={classes.sideMenu}>
                <div className={classes.card}>
                    <Link className={classes.navLink} to="/login-register">Prisijungti</Link>
                    {/*<Link className={classes.navLink} href="/#">Atsijungti </Link>*/}
                </div>

                <div className={classes.card2}>
                    <Link className={classes.navLink} to="/courses">Kursai</Link>
                    <Link className={classes.navLink} to="/">Akademija</Link>
                </div>
            </div>
        </aside>
    );
};

export default SideMenu;
