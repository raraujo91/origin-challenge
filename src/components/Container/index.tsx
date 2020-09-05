import React from 'react';
import { Box, Button, BoxSelectors } from './styles';
import MonthlyPayment from '../MonthlyPayment';
import AmountInput from '../AmountInput';
import DatePicker from '../DatePicker';
import BoxHeader from '../BoxHeader';

const Container: React.FC = () => {
  return (
    <Box>
      <BoxHeader />
      <BoxSelectors>
        <AmountInput />
        <DatePicker />
      </BoxSelectors>
      <MonthlyPayment />
      <Button>Confirm</Button>
    </Box>
  );
};

export default Container;
