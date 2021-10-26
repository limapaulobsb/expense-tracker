import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../context/GlobalState';
import { formatAmount } from '../helpers';

export default function RecordList() {
  const { records, deleteRecord } = useContext(GlobalContext);

  return (
    <section className='record-list'>
      <h3>Histórico</h3>
      <ul>
        {records.map(({ id, description, amount }) => (
          <li className={amount >= 0 ? 'border--positive' : 'border--negative'} key={id}>
            <span>{description}</span>
            <div>
              <span>{formatAmount(amount)}</span>
              <button type='button'>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button type='button' onClick={() => deleteRecord(id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
