import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../context/GlobalState';
import { formatAmount } from '../helpers';
import '../styles/Balance.css';

export default function Balance() {
  const { monthDt, records } = useContext(GlobalContext);

  const balance = records
    .filter((e) => e.year === monthDt.year && e.month === monthDt.month)
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <section className='balance'>
      <h4>Balanço:</h4>
      <span className={balance >= 0 ? 'text--positive' : 'text--negative'}>
        {formatAmount(balance)}
      </span>
      <div className='balance__icon-container'>
        <FontAwesomeIcon icon={faCoins} />
      </div>
    </section>
  );
}
