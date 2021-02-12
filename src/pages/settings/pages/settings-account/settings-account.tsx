import React from 'react';
import wrapper from 'baseScss/components/wrapper.module.scss';

import classes from './settings-account.module.scss';

const SettingsAccount: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={wrapper.profileSettingsWrapper}>
        <h2 className={classes.title}>Email Address</h2>
        <p className={classes.subtitle}>Add or remove email adresses on your accont</p>
        <p>Email addresses you added:</p>
        <div className={classes.row}>
          <p>Email address</p>
          <p>Primary</p>
        </div>

        <p>Add Email Adress</p>
      </div>
    </div>
  );
};

export default SettingsAccount;
