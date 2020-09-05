import styled from 'styled-components';
import { tint } from 'polished';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 600px;
  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 8px;
  padding: 40px;
  margin: 0 auto;

  @media (max-width: 600px) {
    flex: 1;
    width: 100%;
    height: 620px;
    border: none;
    box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);
    border-radius: 20px 20px 0px 0px;
    margin-top: auto;
  }
`;

export const BoxSelectors = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  margin-top: auto;
  margin-bottom: auto;
  align-self: center;
  background: #1b31a8;
  border-radius: 32px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  padding: 15px;
  width: 80%;
  border: none;
  outline: 0;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    background: ${tint(0.15, '#1b31a8')};
  }
`;
