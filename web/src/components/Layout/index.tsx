import React from 'react';
import { LayoutStyled } from './styles';
import Header from 'components/Header';

type Props = {
  children?: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <LayoutStyled>
      <Header />
      <div>{children}</div>
    </LayoutStyled>
  );
}

export default Layout;