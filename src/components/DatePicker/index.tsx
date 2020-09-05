import React, { useCallback, useEffect } from 'react';
import {
  InputContainer,
  PrevButton,
  NextButton,
  InputText,
  Container
} from './styles';
import { useDate } from '../../context/DateContext';
import Arrow from '../../icons/arrow.svg';

interface PrevButtonProps {
  isCurrentMonth: boolean;
}

const DatePicker: React.FC = () => {
  const { date } = useDate();

  const handleKeyboard = useCallback(
    event => {
      switch (event.key) {
        case 'ArrowRight':
          return date.nextMonth();
        case 'ArrowLeft':
          return date.previousMonth();
        default:
          return false;
      }
    },
    [date]
  );

  useEffect(() => {
    document.addEventListener('keyup', handleKeyboard);

    return () => document.removeEventListener('keyup', handleKeyboard);
  }, [handleKeyboard]);

  return (
    <Container>
      <p>Reach goal by</p>
      <InputContainer>
        <PrevButton
          data-testid="previous-button"
          onClick={() => date.previousMonth()}
        >
          <img src={Arrow} alt="Previous" />
        </PrevButton>
        <InputText>
          <strong data-testid="month-div">{date.month}</strong>
          <p>{date.year}</p>
        </InputText>
        <NextButton data-testid="next-button" onClick={() => date.nextMonth()}>
          <img src={Arrow} alt="Next" />
        </NextButton>
      </InputContainer>
    </Container>
  );
};

export default DatePicker;
