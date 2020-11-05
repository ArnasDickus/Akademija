import React from 'react';
import './header.styles.scss';
import { Link } from "react-router-dom";

const Header = () => {
    return (

            <div className="header">
                <div className="header__wrapper">
                    <div className="header__flex">
                        <div>
                            <Link className="header__nav-link" to="/courses">Kursai</Link>
                        </div>

                        <div>
                            <Link className="header__nav-link" to="/">Akademija</Link>
                        </div>

                        <div>
                            <a className="header__nav-link">Prisijungti</a>
                            <a className="header__nav-link">Atsijungti </a>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Header;
