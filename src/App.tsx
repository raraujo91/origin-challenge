import * as React from 'react';

import Container from './components/Container';
import Message from './components/Message';
import Header from './components/Header';

import DateContext from './context/DateContext';

import GlobalStyles, { FlexWrapper } from './styles/globals';

export default function App() {
  return (
    <DateContext>
      <FlexWrapper>
        <Header />
        <Message />
        <Container />
        <GlobalStyles />
      </FlexWrapper>
    </DateContext>
  );
}
