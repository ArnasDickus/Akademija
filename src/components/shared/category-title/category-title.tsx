import React from 'react';
import { HeaderWrapper } from 'styles/components/wrapper';

import * as S from './category-title.styles';

type Props = {
  title: string;
};

const CategoryTitle: React.FC<Props> = ({ title }) => {
  return (
    <S.CategoryTitle>
      <HeaderWrapper>
        <h2 className="title">{title}</h2>
      </HeaderWrapper>
    </S.CategoryTitle>
  );
};

export default CategoryTitle;
