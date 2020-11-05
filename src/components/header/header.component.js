import React from 'react';
import './header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__flex">
                    <div>
                        <a className="header__nav-link">Kursai</a>
                    </div>

                    <div>
                        <a className="header__nav-link">Akademija</a>
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
