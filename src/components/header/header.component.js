import React from 'react';
import classes from './header.module.scss';
import { Link } from "react-router-dom";
import Hamburger from "./hamburger/hamburger.component";
import SideMenu from "./sideMenu/sideMenu";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selector";


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
                            {
                                this.props.currentUser
                                ?   <div className={classes.navLink} onClick={() => auth.signOut()}>Atsijungti</div>
                                :   <div>
                                        <Link className={classes.navLink} to="/login">Prisijungti</Link>
                                        <Link className={classes.navLink} to="/register">Registruotis</Link>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(Header);
