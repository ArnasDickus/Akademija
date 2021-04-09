import AllRoutesEnum from 'core/enums/allRoutes.enum';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './settings-navbar.styles';

const SettingsNavbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <div className="avatarContainer">
        <div className="avatar" />
        <p className="accountName">Avatar Name</p>
      </div>
      <div>
        <ul className="ul">
          <li className="listItem">
            <Link
              // activeClassName={classes.isActive}
              href={AllRoutesEnum.SETTINGS_PROFILE}
            >
              <span className="link"> {t('header.profile')}</span>
            </Link>
          </li>

          <li className="listItem">
            <Link
              href={AllRoutesEnum.SETTINGS_PHOTO}
              // activeClassName={classes.isActive}
            >
              <span className="link">{t('header.photo')}</span>
            </Link>
          </li>

          <li className="listItem">
            <Link
              href={AllRoutesEnum.SETTINGS_ACCOUNT}
              // activeClassName={classes.isActive}
            >
              <span className="link">{t('header.account')}</span>
            </Link>
          </li>

          <li className="listItem">
            <Link
              href={AllRoutesEnum.SETTINGS_CLOSE_ACCOUNT}
              // activeClassName={classes.isActive}
            >
              <span className="link">{t('header.closeAccount')}</span>
            </Link>
          </li>
        </ul>
      </div>
    </S.Container>
  );
};

export default SettingsNavbar;
