import React from 'react';
import { HeaderWrapper } from './styles';
import originLogo from '../../icons/logo.svg';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <img src={originLogo} alt="Origin" />
    </HeaderWrapper>
  );
};

export default Header;
