import React from 'react';
import {
  render,
  fireEvent,
  RenderResult,
  waitFor
} from '@testing-library/react';
import AmountInput from '../src/components/AmountInput';
import BoxHeader from '../src/components/BoxHeader';
import Container from '../src/components/Container';
import DatePicker from '../src/components/DatePicker';
import Header from '../src/components/Header';
import Message from '../src/components/Message';
import MonthlyPayment from '../src/components/MonthlyPayment';

import { useDate } from '../src/context/DateContext';

const mockedSetAmount = jest.fn();
const mockedIncludeCommas = jest.fn();
const mockedPreviousMonth = jest.fn();
const mockedNextMonth = jest.fn();

const mockedAmount = jest.fn().mockReturnValue(0);
const mockedMonth = jest.fn().mockReturnValue('October');
const mockedDifference = jest.fn().mockReturnValue(1);

jest.mock('../src/context/DateContext', () => {
  return {
    useDate: () => ({
      date: {
        difference: mockedDifference(),
        month: mockedMonth(),
        year: '2020',
        previousMonth: mockedPreviousMonth,
        nextMonth: mockedNextMonth
      },
      includeCommas: mockedIncludeCommas,
      setAmount: mockedSetAmount,
      amount: mockedAmount()
    })
  };
});

describe('<AmountInput />', () => {
  let component: RenderResult;

  beforeEach(() => {
    mockedSetAmount.mockClear();
  });

  test('Component is rendering', () => {
    component = render(<AmountInput />);
  });

  test('Component is floating values', async () => {
    component = render(<AmountInput />);
    const inputEl = component.getByTestId('amount-input');

    fireEvent.change(inputEl, {
      target: {
        value: '23'
      }
    });

    await waitFor(() => {
      expect(mockedSetAmount).toHaveBeenCalledWith('23.00');
    });
  });

  test('Component is blanking when non-numeric input', async () => {
    component = render(<AmountInput />);
    const inputEl = component.getByTestId('amount-input');

    fireEvent.change(inputEl, {
      target: {
        value: 'aaa'
      }
    });

    await waitFor(() => {
      expect(mockedSetAmount).toHaveBeenCalledWith('0.00');
    });
  });

  afterAll(() => {
    component.unmount();
  });
});

describe('<BoxHeader />', () => {
  let component: RenderResult;
  test('Component is rendering', () => {
    component = render(<BoxHeader />);
  });
});

describe('<Container />', () => {
  let component: RenderResult;

  test('Component is rendering', () => {
    component = render(<Container />);
  });
});

describe('<Header />', () => {
  let component: RenderResult;

  test('Component is rendering', () => {
    component = render(<Header />);
  });
});

describe('<Message />', () => {
  let component: RenderResult;

  test('Component is rendering', () => {
    component = render(<Message />);
  });
});

describe('<MonthlyPayment />', () => {
  let component: RenderResult;

  beforeEach(() => {
    mockedAmount.mockClear();
  });

  test('Component is rendering', () => {
    component = render(<MonthlyPayment />);
  });

  test('Component is receiving $0 amount', async () => {
    mockedAmount.mockReturnValue(0);

    mockedAmount();

    component = render(<MonthlyPayment />);

    const memoizedValue = component.getByTestId('memoized-value');

    await waitFor(() => {
      expect(memoizedValue.innerHTML).toBe(`$0`);
    });
  });

  test('Component is receiving values greater than $0', async () => {
    mockedAmount.mockReturnValue(2);

    mockedAmount();

    component = render(<MonthlyPayment />);

    const memoizedValue = component.getByTestId('memoized-value');

    await waitFor(() => {
      expect(memoizedValue.innerHTML).toBe(`$2`);
    });
  });

  test('Component is should ceil any floating value', async () => {
    mockedAmount.mockReturnValue(1.23);

    mockedAmount();

    component = render(<MonthlyPayment />);

    const memoizedValue = component.getByTestId('memoized-value');

    await waitFor(() => {
      expect(memoizedValue.innerHTML).toBe(`$2`);
    });
  });

  test('Component should display "deposits" when difference is bigger than 2', async () => {
    mockedDifference.mockReturnValue(2);

    mockedDifference();

    component = render(<MonthlyPayment />);

    const planDetails = component.getByTestId('plan-details');

    await waitFor(() => {
      expect(planDetails.textContent).toMatch(/deposits/i);
    });
  });

  test('Component should display "deposit" when difference is equal 1', async () => {
    mockedDifference.mockReturnValue(1);

    mockedDifference();

    component = render(<MonthlyPayment />);

    const planDetails = component.getByTestId('plan-details');

    await waitFor(() => {
      expect(planDetails.textContent).toMatch(/\bdeposit\b/i);
    });
  });
});

describe('<DatePicker />', () => {
  let component: RenderResult;

  beforeEach(() => {
    mockedNextMonth.mockClear();
    mockedPreviousMonth.mockClear();
  });

  test('Component is rendering', () => {
    component = render(<DatePicker />);
  });

  test('Component is changing dates through buttons', async () => {
    component = render(<DatePicker />);
    const previousButton = component.getByTestId('previous-button');
    const nextButton = component.getByTestId('next-button');

    fireEvent.click(nextButton);
    fireEvent.click(previousButton);

    await waitFor(() => {
      expect(mockedNextMonth).toHaveBeenCalled();
      expect(mockedPreviousMonth).toHaveBeenCalled();
    });
  });

  test('Component is changing dates through keyboard', async () => {
    component = render(<DatePicker />);

    fireEvent.keyUp(document, { key: 'ArrowRight', code: 'ArrowRight' });
    fireEvent.keyUp(document, { key: 'ArrowLeft', code: 'ArrowLeft' });

    await waitFor(() => {
      expect(mockedNextMonth).toHaveBeenCalled();
      expect(mockedPreviousMonth).toHaveBeenCalled();
    });
  });

  test('Component is not changing dates through invalid conditions', async () => {
    component = render(<DatePicker />);

    fireEvent.keyUp(document, { key: 'ArrowUp', code: 'ArrowUp' });
    fireEvent.keyUp(document, { key: 'ArrowDown', code: 'ArrowDown' });
  });
});
