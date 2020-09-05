import React from 'react';
import { Container } from './styles';

import Icon from '../../icons/insurance.svg';

const BoxHeader: React.FC = () => {
  return (
    <Container>
      <img src={Icon} alt="insurance icon" />
      <h1>Buy a house</h1>
      <p>Saving goal</p>
    </Container>
  );
};

export default BoxHeader;
