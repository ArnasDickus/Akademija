import React from 'react';
import classes from './header.module.scss';
import { Link } from "react-router-dom";
import Hamburger from "./hamburger/hamburger.component";


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        }
    }

    ToggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });
    closeSideMenu = () => this.setState({ menuOpen: false });

    render () {
        return (
            <div className={classes.header}>
                <div className={classes.wrapper}>
                    <Hamburger />

                    <div className={classes.row}>
                        <div>
                            <Link className={classes.navLink} to="/courses">Kursai</Link>
                        </div>

                        <div>
                            <Link className={classes.navLink} to="/">Akademija</Link>
                        </div>

                        <div>
                            <a className={classes.navLink} href="/#">Prisijungti</a>
                            <a className={classes.navLink} href="/#">Atsijungti </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;
