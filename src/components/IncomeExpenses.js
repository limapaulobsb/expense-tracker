import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { formatAmount } from '../helpers';

export default function IncomeExpenses() {
  const { records } = useContext(GlobalContext);

  const income = records
    .filter((element) => element.amount > 0)
    .reduce((acc, curr) => acc + Number(curr.amount), 0);
  const expenses = records
    .filter((element) => element.amount < 0)
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <section className='income-expenses'>
      <div>
        <h3>Renda:</h3>
        <span className='text--positive'>{formatAmount(income)}</span>
      </div>
      <div>
        <h3>Despesas:</h3>
        <span className='text--negative'>{formatAmount(expenses)}</span>
      </div>
    </section>
  );
}
