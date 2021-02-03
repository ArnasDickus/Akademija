import React from 'react';
import { NavLink } from 'react-router-dom';
import AllRoutesEnum from 'core/enums/allRoutes.enum';

import classes from './settings-navbar.module.scss';

const SettingsNavbar: React.FC = () => {
  return (
    <div className={classes.row}>
      <div className={classes.avatarContainer}>
        <div className={classes.avatar} />
        <p className={classes.accountName}>Avatar Name</p>
      </div>
      <div>
        <ul className={classes.ul}>
          <li className={classes.listItem}>
            <NavLink
              activeClassName={classes.isActive}
              className={classes.link}
              to={`/${AllRoutesEnum.SETTINGS_PROFILE}`}
            >
              Profile
            </NavLink>
          </li>

          <li className={classes.listItem}>
            <NavLink
              activeClassName={classes.isActive}
              className={classes.link}
              to={`/${AllRoutesEnum.SETTINGS_PHOTO}`}
            >
              Photo
            </NavLink>
          </li>

          <li className={classes.listItem}>
            <NavLink
              activeClassName={classes.isActive}
              className={classes.link}
              to={`/${AllRoutesEnum.SETTINGS_ACCOUNT}`}
            >
              Account
            </NavLink>
          </li>

          <li className={classes.listItem}>
            <NavLink
              activeClassName={classes.isActive}
              className={classes.link}
              to={`/${AllRoutesEnum.SETTINGS_DELETE}`}
            >
              Close account
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsNavbar;
