import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './footer.styles';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Footer>
      <p className="text">{t('footer.copyright')} 2020</p>
    </S.Footer>
  );
};

export default Footer;
