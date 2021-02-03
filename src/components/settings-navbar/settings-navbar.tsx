import React from 'react';
import { NavLink } from 'react-router-dom';
import AllRoutesEnum from 'core/enums/allRoutes.enum';
import { useTranslation } from 'react-i18next';

import classes from './settings-navbar.module.scss';

const SettingsNavbar: React.FC = () => {
  const { i18n } = useTranslation();

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
              {i18n.t('header.profile')}
            </NavLink>
          </li>

          <li className={classes.listItem}>
            <NavLink
              activeClassName={classes.isActive}
              className={classes.link}
              to={`/${AllRoutesEnum.SETTINGS_PHOTO}`}
            >
              {i18n.t('header.photo')}
            </NavLink>
          </li>

          <li className={classes.listItem}>
            <NavLink
              activeClassName={classes.isActive}
              className={classes.link}
              to={`/${AllRoutesEnum.SETTINGS_ACCOUNT}`}
            >
              {i18n.t('header.account')}
            </NavLink>
          </li>

          <li className={classes.listItem}>
            <NavLink
              activeClassName={classes.isActive}
              className={classes.link}
              to={`/${AllRoutesEnum.SETTINGS_DELETE}`}
            >
              {i18n.t('header.closeAccount')}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsNavbar;
