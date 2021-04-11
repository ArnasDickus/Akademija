import React from 'react';

import * as S from './success-message.styled';

const SuccessComponent: React.FC = ({ children }) => {
  return <S.Text>{children}</S.Text>;
};

export default SuccessComponent;
