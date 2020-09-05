import React, { useMemo } from 'react';
import { Container, MonthlySaving, PlanDetails } from './styles';
import { useDate } from '../../context/DateContext';

const MonthlyPayment: React.FC = () => {
  const { date, amount, includeCommas } = useDate();

  function totalPerDifference(totalAmount: number, monthsDifference: number) {
    if (totalAmount === 0) {
      return '0';
    }
    return Math.ceil(totalAmount / monthsDifference);
  }

  const memoizedMonthlyPayment = useMemo(
    () => totalPerDifference(Number(amount), date.difference),
    [amount, date.difference]
  );

  return (
    <Container>
      <MonthlySaving>
        <p>Monthly payment</p>
        <h1 data-testid="memoized-value">${memoizedMonthlyPayment}</h1>
      </MonthlySaving>
      <PlanDetails data-testid="plan-details">
        You&apos;re planning{' '}
        <strong>
          {date.difference} monthly{' '}
          {date.difference === 1 ? 'deposit' : 'deposits'}
        </strong>{' '}
        to reach your <strong>${includeCommas(amount)}</strong> goal by{' '}
        <strong>
          {date.month} {date.year}
        </strong>
        .
      </PlanDetails>
    </Container>
  );
};

export default MonthlyPayment;
