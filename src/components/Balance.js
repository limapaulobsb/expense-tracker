import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { formatAmount } from '../helpers';

export default function Balance() {
  const { records } = useContext(GlobalContext);

  const balance = records.reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <section className='balance'>
      <h3>Balanço:</h3>
      <span className={balance >= 0 ? 'text--positive' : 'text--negative'}>
        {formatAmount(balance)}
      </span>
    </section>
  );
}
