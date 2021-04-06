import 'react-image-crop/dist/ReactCrop.css';

import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CustomButton from 'components/shared/custom-button/custom-button.component';
import SuccessComponent from 'components/success-message/success-message.component';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileSettingsWrapper } from 'styles/components/wrapper';

import * as S from './settings-photo.styles';

const SettingsPhotoPage: React.FC = () => {
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
    <S.Container>
      <ProfileSettingsWrapper>
        <p>Image preview</p>
        <div className="previewContainer">
          <div className="imgUpload">
            {displayAccountIcon ? <AccountCircleIcon className="icon" /> : <p>Image file</p>}
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
      </ProfileSettingsWrapper>
    </S.Container>
  );
};

export default SettingsPhotoPage;
