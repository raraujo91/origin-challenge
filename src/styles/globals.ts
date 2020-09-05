import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Work Sans', sans-serif;
  }

  body {
    position: relative;
    display: flex;
    justify-content: center;
    background-color: #F4F8FA;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 380px;

  @media (max-width: 600px) {
    height: 100vh;
  }

  @media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    height: 100%;
  }
`;

export default GlobalStyles;
