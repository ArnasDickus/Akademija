import React from 'react';
import SettingsNavbar from 'components/settings-navbar/settings-navbar';
import SettingsProfile from 'pages/settings/pages/settings-profile/settings-profile';
import SettingsPhoto from 'pages/settings/pages/settings-photo/settings-photo';
import SettingsAccount from 'pages/settings/pages/settings-account/settings-account';
import CloseAccount from 'pages/settings/pages/settings-close-account/settings-close-account';
import { Switch, Route } from 'react-router-dom';
import AllRoutesEnum from 'core/enums/allRoutes.enum';
import wrapper from 'baseScss/components/wrapper.module.scss';

import classes from './settings-template.module.scss';

const SettingsTemplate: React.FC = () => {
  //  const history = useHistory();

  //     useEffect(() => {
  //     history.push({
  //         pathname: AllRoutesEnum.SETTINGS_PROFILE
  //     }, [])
  //   });

  return (
    <div className={classes.container}>
      <div className={wrapper.headerWrapper}>
        <div className={classes.row}>
          <div>
            <SettingsNavbar />
          </div>
          <div className={classes.content}>
            <div className={classes.contentDescription}>
              <h2 className={classes.title}>Profile</h2>
              <p>Profile Description</p>
            </div>
            <Switch>
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
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTemplate;
