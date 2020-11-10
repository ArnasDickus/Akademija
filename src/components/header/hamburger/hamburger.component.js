import React, { Component } from "react";
import classes from "./hamburger.module.scss";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Hamburger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            HamburgerOpen: false
        };
    }
    handleClick = () => {
        this.setState({ HamburgerOpen: !this.state.HamburgerOpen });
        this.props.menuOpen();
    };

    render() {
        const { HamburgerOpen } = this.state;
        return (
           <div className={classes.hamburger}>
               <span className={classes.title}>Akademija</span>
               {
                   HamburgerOpen ? <FontAwesomeIcon onClick={this.handleClick} icon={faTimes}/>
                       : <FontAwesomeIcon onClick={this.handleClick} icon={faBars}/>
               }
           </div>
        );
    }
}

export default Hamburger;
