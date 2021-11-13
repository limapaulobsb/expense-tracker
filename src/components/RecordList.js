import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../context/GlobalState';
import { formatAmount } from '../helpers';
import '../styles/RecordList.css';

export default function RecordList() {
  const { monthDt, records, deleteRecord } = useContext(GlobalContext);

  const renderRecords = () => {
    if (records.some((e) => e.year === monthDt.year && e.month === monthDt.month)) {
      return records
        .filter((e) => e.year === monthDt.year && e.month === monthDt.month)
        .map((e) => (
          <li
            className={e.amount >= 0 ? 'border--positive' : 'border--negative'}
            key={e.id}
          >
            <div>
              <span className='text--alt'>{e.description}</span>
              <br />
              <span>{formatAmount(e.amount)}</span>
            </div>
            <div>
              <span>{`${e.day} de ${monthDt.monthShort}`}</span>
              <button type='button'>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button type='button' onClick={() => deleteRecord(e.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </li>
        ));
    }
    return <h1>Nada</h1>;
  };

  return (
    <section className='record-list'>
      <h3>Histórico</h3>
      <ul>{renderRecords()}</ul>
    </section>
  );
}
