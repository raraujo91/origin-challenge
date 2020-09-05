import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    line-height: 30px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  height: 56px;
`;

export const SymbolInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 100%;
  background: #f4f8fa;
  border: 1px solid #e1e8ed;
  border-radius: 4px 0px 0px 4px;

  &::before {
    content: '$';
    color: #657786;
    font-size: 22px;
    line-height: 26px;
    font-weight: 300;
  }
`;

export const InputText = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: #ffffff;
  border: none;
  box-sizing: border-box;
  border-radius: 0px 4px 4px 0px;
  max-width: 170px;
  max-height: 56px;

  border-top: 1px solid #e1e8ed;
  border-bottom: 1px solid #e1e8ed;
  border-right: 1px solid #e1e8ed;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  padding-left: 15px;

  @media (max-width: 600px) {
    max-width: 100%;
    flex: 1;
    height: 56px;
  }
`;
