import React, { useState } from 'react';
import wrapper from 'baseScss/components/wrapper.module.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import 'react-image-crop/dist/ReactCrop.css';
import SuccessComponent from 'components/success-message/success-message.component';
import CustomButton from 'components/custom-button/custom-button.component';
import { useTranslation } from 'react-i18next';

import classes from './settings-photo.module.scss';

const SettingsPhoto: React.FC = () => {
  const { t } = useTranslation();
  const [displayAccountIcon, setDisplayAccountIcon] = useState(true);

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setDisplayAccountIcon(false);
    }
  };

  const handleUpload = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
  };

  return (
    <div className={classes.container}>
      <div className={wrapper.profileSettingsWrapper}>
        <p>Image preview</p>
        <div className={classes.previewContainer}>
          <div className={classes.imgUpload}>
            {displayAccountIcon ? (
              <AccountCircleIcon className={classes.icon} />
            ) : (
              <p>Image file</p>
            )}
          </div>
        </div>
        <p>Add / Change image:</p>
        <Button component="label" variant="contained">
          Upload File
          <input type="file" hidden onChange={(event) => onSelectFile(event)} />
        </Button>
        <div onClick={(event) => handleUpload(event)}>
          <CustomButton type="submit"> {t('profile.saveChanges')} </CustomButton>
        </div>
        <SuccessComponent>{t('profile.successMessage')}</SuccessComponent>
      </div>
    </div>
  );
};

export default SettingsPhoto;
