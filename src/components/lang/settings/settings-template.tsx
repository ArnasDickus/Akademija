import React from 'react';
import SettingsNavbar from 'components/settings-navbar/settings-navbar';
// import SettingsProfile from 'pages/settings/pages/settings-profile/settings-profile';
// import SettingsPhoto from 'pages/settings/pages/settings-photo/settings-photo';
// import SettingsAccount from 'pages/settings/pages/settings-account/settings-account';
// import CloseAccount from 'pages/settings/pages/settings-close-account/settings-close-account';
// import AllRoutesEnum from 'core/enums/allRoutes.enum';
import wrapper from 'baseScss/components/wrapper.module.scss';
// import { useTranslation } from 'react-i18next';

import classes from './settings-template.module.scss';

const SettingsTemplate: React.FC = () => {
  // const location = useLocation();
  // const { i18n } = useTranslation();
  // const [headerTitle, setHeaderTitle] = useState('');
  // const [headerDescription, setHeaderDescription] = useState('');

  // useEffect(() => {
  //   if (location.pathname === `/${AllRoutesEnum.SETTINGS_PROFILE}`) {
  //     setHeaderTitle(i18n.t('profile.profileTitle'));
  //     setHeaderDescription(i18n.t('profile.profileDescription'));
  //   } else if (location.pathname === `/${AllRoutesEnum.SETTINGS_PHOTO}`) {
  //     setHeaderTitle(i18n.t('profile.profilePhoto'));
  //     setHeaderDescription(i18n.t('profile.profilePhotoDescription'));
  //   } else if (location.pathname === `/${AllRoutesEnum.SETTINGS_ACCOUNT}`) {
  //     setHeaderTitle(i18n.t('profile.profileAccountTitle'));
  //     setHeaderDescription(i18n.t('profile.profileAccountDescription'));
  //   } else if (location.pathname === `/${AllRoutesEnum.SETTINGS_DELETE}`) {
  //     setHeaderTitle(i18n.t('profile.profileCloseAccountTitle'));
  //     setHeaderDescription(i18n.t('profile.profileCloseAccountDescription'));
  //   }
  // }, [location, i18n.language]);

  return (
    <div className={classes.container}>
      <div className={wrapper.headerWrapper}>
        <div className={classes.row}>
          <SettingsNavbar />
          <div className={classes.content}>
            <div className={classes.contentDescription}>
              {/* <h2 className={classes.title}>{headerTitle}</h2> */}
              {/* <p>{headerDescription}</p> */}
            </div>
            {/* <Switch>
              <Route path={`/${AllRoutesEnum.SETTINGS_PROFILE}`}>
                <SettingsProfile />
              </Route>
              <Route path={`/${AllRoutesEnum.SETTINGS_PHOTO}`}>
                <SettingsPhoto />
              </Route>
              <Route path={`/${AllRoutesEnum.SETTINGS_ACCOUNT}`}>
                <SettingsAccount />
              </Route>
              <Route path={`/${AllRoutesEnum.SETTINGS_DELETE}`}>
                <CloseAccount />
              </Route>
            </Switch> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTemplate;
