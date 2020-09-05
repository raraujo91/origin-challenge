import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  font-weight: 400;
  align-self: center;
  color: #1b31a8;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 30px;

  @media (max-width: 600px) {
    padding: 30px 30px;
  }
`;
