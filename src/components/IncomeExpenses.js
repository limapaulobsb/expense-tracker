import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { formatAmount } from '../helpers';
import '../styles/IncomeExpenses.css';

export default function IncomeExpenses() {
  const { monthDt, records } = useContext(GlobalContext);

  const income = records
    .filter((e) => e.year === monthDt.year && e.month === monthDt.month && e.amount > 0)
    .reduce((acc, curr) => acc + Number(curr.amount), 0);
  const expenses = records
    .filter((e) => e.year === monthDt.year && e.month === monthDt.month && e.amount < 0)
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <section className='income-expenses'>
      <div>
        <h4>Renda:</h4>
        <span className='text--positive'>{formatAmount(income)}</span>
      </div>
      <div>
        <h4>Despesas:</h4>
        <span className='text--negative'>{formatAmount(expenses)}</span>
      </div>
    </section>
  );
}
