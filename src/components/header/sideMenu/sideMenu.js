import React from "react";
import classesHeader from '../header.module.scss';
import {Link} from "react-router-dom";

const SideMenu = () => {
    return (
        <aside>
            <div>
                <Link className={classesHeader.navLink} to="/courses">Kursai</Link>
                <Link className={classesHeader.navLink} to="/">Akademija</Link>
                <a className={classesHeader.navLink} href="/#">Prisijungti</a>
                <a className={classesHeader.navLink} href="/#">Atsijungti </a>
            </div>
        </aside>
    );
};

export default SideMenu;
