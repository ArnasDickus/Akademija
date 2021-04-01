import React from 'react';

import Footer from './footer/footer.component';
import Header from './header/header.component';
import * as S from './layout.styles';

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <S.Site>
      <Header />
      <div className="site-content">{children}</div>
      <Footer />
    </S.Site>
  );
};

export default Layout;
