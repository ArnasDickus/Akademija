import React from 'react';

import * as S from './custom-button.styles';

type Props = {
  isGoogleSignIn?: boolean;
  inverted?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
};

const CustomButton: React.FC<Props> = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <S.Container>
    <button
      className={`${inverted ? `inverted` : ''} ${
        isGoogleSignIn ? `googleSignIn` : ''
      } customButton`}
      {...otherProps}
    >
      {children}
    </button>
  </S.Container>
);

export default CustomButton;
