import React, {useState} from "react";
import {faTimes, faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from "react-i18next";

import classes from "./hamburger.module.scss";

type Props = {
    menuOpen: () => void;
}

const Hamburger: React.FC<Props> = (props) => {
    const [hamburger, openHamburger] = useState(false);
    const {t} = useTranslation();

    const handleClick = (): void => {
        openHamburger(!hamburger)
        props.menuOpen();
    }

    return (
        <div className={classes.hamburger}>
            <span className={classes.title}>{t('header.academy')}</span>
            {
                hamburger ?
                    <FontAwesomeIcon icon={faTimes} onClick={handleClick}/>
                    : <FontAwesomeIcon icon={faBars} onClick={handleClick}/>
            }
        </div>
    )
}

export default Hamburger;
