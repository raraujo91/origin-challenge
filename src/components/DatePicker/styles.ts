import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    line-height: 30px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  height: 56px;
`;

export const PrevButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 100%;
  background: #e1e8ed;
  border: 1px solid #e1e8ed;
  border-radius: 4px 0px 0px 4px;
  transition: all 250ms;

  &:active {
    background: ${shade(0.4, '#e1e8ed')};
  }
`;

export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 100%;
  background: #e1e8ed;
  border: 1px solid #e1e8ed;
  border-radius: 0px 4px 4px 0px;
  transition: all 250ms;

  &:active {
    background: ${shade(0.4, '#e1e8ed')};
  }

  img {
    transform: rotate(180deg);
  }
`;

export const InputText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: none;
  box-sizing: border-box;
  max-width: 130px;
  min-width: 120px;

  border-top: 1px solid #e1e8ed;
  border-bottom: 1px solid #e1e8ed;

  strong {
    font-size: 20px;
  }

  cursor: default;

  @media (max-width: 600px) {
    max-width: 100%;
    flex: 1;
    height: 56px;
  }
`;
