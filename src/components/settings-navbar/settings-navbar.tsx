import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link className={classes.link} to={`/${AllRoutesEnum.SETTINGS_PROFILE}`}>
              Profile
            </Link>
          </li>

          <li className={classes.listItem}>
            <Link className={classes.link} to={`/${AllRoutesEnum.SETTINGS_PHOTO}`}>
              Photo
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsNavbar;
