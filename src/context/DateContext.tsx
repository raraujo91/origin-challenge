import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect
} from 'react';
import {
  differenceInCalendarMonths,
  format,
  addMonths,
  subMonths
} from 'date-fns';

interface DateContext {
  amount: number | string;
  setAmount: React.Dispatch<React.SetStateAction<number | string>>;
  includeCommas: (value: string | number) => string;

  date: {
    difference: number;
    month: string;
    year: string;
    nextMonth: () => void;
    previousMonth: () => void;
  };
}

const DateContext = createContext<DateContext>({
  amount: '',
  setAmount: () => '',
  includeCommas: () => '',
  date: {
    difference: 0,
    month: '',
    year: '',
    nextMonth: () => '',
    previousMonth: () => ''
  }
});

const DateProvider: React.FC = ({ children }) => {
  const [amount, setAmount] = useState<number | string>(0);
  const [month, setMonth] = useState(addMonths(new Date(), 1));
  const [initialMonth] = useState(new Date());
  const [savingSpan, setSavingSpan] = useState(
    differenceInCalendarMonths(month, initialMonth)
  );
  const [formattedYear, setFormattedYear] = useState(format(month, 'yyyy'));
  const [formattedMonth, setFormattedMonth] = useState(format(month, 'MMMM'));

  const includeCommas = useCallback((value: string | number) => {
    value = value.toString().replace(/(?=(\d{3})+(\D))\B/g, ',');
    return value;
  }, []);

  useEffect(() => {
    setSavingSpan(differenceInCalendarMonths(month, initialMonth));
    setFormattedMonth(format(month, 'MMMM'));
    setFormattedYear(format(month, 'yyyy'));
  }, [month, initialMonth]);

  const nextMonth = useCallback(() => {
    setMonth(month => addMonths(month, 1));
  }, []);

  const previousMonth = useCallback(() => {
    if (savingSpan <= 1) {
      return false;
    } else {
      setMonth(month => subMonths(month, 1));
    }
  }, [savingSpan]);

  return (
    <DateContext.Provider
      value={{
        amount,
        setAmount,
        includeCommas,
        date: {
          difference: savingSpan,
          month: formattedMonth,
          year: formattedYear,
          nextMonth,
          previousMonth
        }
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => {
  const context = useContext(DateContext);
  const { amount, setAmount, includeCommas, date } = context;
  return { amount, setAmount, includeCommas, date };
};

export default DateProvider;
