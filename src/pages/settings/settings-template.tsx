import React from 'react';
import SettingsNavbar from 'components/settings-navbar/settings-navbar';
import SettingsProfile from 'pages/settings/pages/settings-profile/settings-profile';
import SettingsPhoto from 'pages/settings/pages/settings-photo/settings-photo';
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
          <div>
            <p>Settings Template</p>
            <Switch>
              <Route path={`/${AllRoutesEnum.SETTINGS_PROFILE}`}>
                <SettingsProfile />
              </Route>
              <Route path={`/${AllRoutesEnum.SETTINGS_PHOTO}`}>
                <SettingsPhoto />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTemplate;
