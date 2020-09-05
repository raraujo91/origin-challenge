import React from 'react';
import { InputContainer, SymbolInput, InputText, Container } from './styles';
import { useDate } from '../../context/DateContext';

const AmountInput: React.FC = () => {
  const { setAmount, includeCommas } = useDate();

  const inputConversion = (value: string) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1.$2');
    setAmount(Number(value).toFixed(2));
    value = includeCommas(value);
    return value;
  };

  return (
    <Container>
      <p>Total amount</p>
      <InputContainer>
        <SymbolInput />
        <InputText
          data-testid="amount-input"
          onChange={e => (e.target.value = inputConversion(e.target.value))}
        />
      </InputContainer>
    </Container>
  );
};

export default AmountInput;
