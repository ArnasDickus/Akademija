import React, { useState } from "react";
import classes from "./hamburger.module.scss";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const Hamburger = (props) => {
    const [hamburger, openHamburger] = useState(false);
    const { t } = useTranslation();

    const handleClick = () => {
        openHamburger(!hamburger)
        props.menuOpen();
    }

    return (
        <div className={classes.hamburger}>
            <span className={classes.title}>{t('header.academy')}</span>
            {
                hamburger ?
                <FontAwesomeIcon onClick={ handleClick } icon={ faTimes } />
                : <FontAwesomeIcon onClick={ handleClick } icon={ faBars }/>
            }
        </div>
    )
}

export default Hamburger;
