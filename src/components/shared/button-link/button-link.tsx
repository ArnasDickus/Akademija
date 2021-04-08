import React from 'react';

import * as S from './button-link.styles';

type Props = {
  children: string;
};

const ButtonLink: React.FC<Props> = ({ children }) => {
  return <S.Button>{children}</S.Button>;
};

export default ButtonLink;
