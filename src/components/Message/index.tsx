import React from 'react';

import { Title, TitleContainer } from './styles';

const Message: React.FC = () => {
  return (
    <TitleContainer>
      <Title>
        Let&apos;s plan your <strong>saving goal</strong>
      </Title>
    </TitleContainer>
  );
};

export default Message;
