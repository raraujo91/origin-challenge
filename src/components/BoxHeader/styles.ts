import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;

  h1 {
    line-height: 40px;
    font-size: 32px;
  }

  p {
    font-size: 16px;
    line-height: 20px;
    color: #657786;
  }

  @media (max-width: 600px) {
    margin-bottom: 20px;

    h1 {
      font-size: 24px;
      line-height: 32px;
    }
    p {
      font-size: 14px;
    }
  }
`;
