import SettingsNavbar from 'components/settings-navbar/settings-navbar';
import AllRoutesEnum from 'core/enums/allRoutes.enum';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderWrapper } from 'styles/components/wrapper';

import * as S from './settings-layout.styles';

type Props = {
  children: React.ReactNode;
};

const SettingsTemplate: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [headerTitle, setHeaderTitle] = useState('');
  const [headerDescription, setHeaderDescription] = useState('');

  useEffect(() => {
    if (router.pathname === `/${AllRoutesEnum.SETTINGS_PROFILE}`) {
      setHeaderTitle(t('profile.profileTitle'));
      setHeaderDescription(t('profile.profileDescription'));
    } else if (router.pathname === `/${AllRoutesEnum.SETTINGS_PHOTO}`) {
      setHeaderTitle(t('profile.profilePhoto'));
      setHeaderDescription(t('profile.profilePhotoDescription'));
    } else if (router.pathname === `/${AllRoutesEnum.SETTINGS_ACCOUNT}`) {
      setHeaderTitle(t('profile.profileAccountTitle'));
      setHeaderDescription(t('profile.profileAccountDescription'));
    } else if (router.pathname === `/${AllRoutesEnum.SETTINGS_DELETE}`) {
      setHeaderTitle(t('profile.profileCloseAccountTitle'));
      setHeaderDescription(t('profile.profileCloseAccountDescription'));
    }
  }, [router.pathname]);

  return (
    <S.Container>
      <HeaderWrapper>
        <div className="row">
          <SettingsNavbar />
          <div className="content">
            <div className="contentDescription">
              <h2 className="title">{headerTitle}</h2>
              <p>{headerDescription}</p>
            </div>
            {children}
          </div>
        </div>
      </HeaderWrapper>
    </S.Container>
  );
};

export default SettingsTemplate;
