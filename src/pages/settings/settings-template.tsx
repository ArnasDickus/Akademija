import React from 'react';
import SettingsNavbar from 'components/settings-navbar/settings-navbar';
import SettingsProfile from 'pages/settings/pages/settings-profile/settings-profile';
import SettingsPhoto from 'pages/settings/pages/settings-photo/settings-photo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllRoutesEnum from 'core/enums/allRoutes.enum';

const SettingsTemplate: React.FC = () => {
  //  const history = useHistory();

  //     useEffect(() => {
  //     history.push({
  //         pathname: AllRoutesEnum.SETTINGS_PROFILE
  //     }, [])
  //   });

  return (
    <div>
      <SettingsNavbar />
      <p>Settings Template</p>
      <Switch>
        <Router>
          <Route path={AllRoutesEnum.SETTINGS_PROFILE}>
            <SettingsProfile />
          </Route>
          <Route path={AllRoutesEnum.SETTINGS_PHOTO}>
            <SettingsPhoto />
          </Route>
        </Router>
      </Switch>
    </div>
  );
};

export default SettingsTemplate;
