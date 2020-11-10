import React from 'react';
import classes from './header.module.scss';
import { Link } from "react-router-dom";
import Hamburger from "./hamburger/hamburger.component";
import SideMenu from "./sideMenu/sideMenu";


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        }
    }

    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });
    closeSideMenu = () => this.setState({ menuOpen: false });

    render () {
        const { menuOpen } = this.state;

        return (
            <div className={classes.header}>
                <div className={classes.wrapper}>
                    <Hamburger menuOpen={this.toggleMenu} />
                    { menuOpen ? (
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
