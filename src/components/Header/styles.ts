import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100vw;
  background: #fff;

  img {
    padding: 30px 50px;
    height: 90px;
  }

  @media (max-width: 600px) {
    img {
      padding: 15px 20px;
      height: 55px;
    }
  }
`;
