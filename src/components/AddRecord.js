import React, { useContext, useEffect, useRef, useState } from 'react';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../context/GlobalState';
import Calendar from './calendar/Calendar';
import '../styles/AddRecord.css';

export default function AddRecord() {
  const { monthDt, addRecord } = useContext(GlobalContext);
  const [dateObj, setDateObj] = useState({
    year: undefined,
    month: undefined,
    day: undefined,
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const descriptionRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecord = {
      id: uuidv4(),
      description: descriptionRef.current.value,
      amount: amountRef.current.value,
      year: dateObj.year,
      month: dateObj.month,
      day: dateObj.day,
    };

    addRecord(newRecord);
  };

  useEffect(() => {
    setShowCalendar(false);
  }, [monthDt]);

  return (
    <section className='add-record'>
      <h3>Adicionar novo registro</h3>
      <form onSubmit={handleSubmit}>
        <div className='add-record__inputs-container'>
          <div>
            <label htmlFor='text-input'>Descrição:</label>
            <br />
            <input
              type='text'
              id='text-input'
              name='description'
              ref={descriptionRef}
              required
            />
          </div>
          <div>
            <label htmlFor='value-input'>Valor:</label>
            <br />
            <input
              type='number'
              id='number-input'
              name='amount'
              defaultValue='0.00'
              step='0.01'
              ref={amountRef}
              required
            />
          </div>
          <div>
            <label htmlFor='date-input'>Data:</label>
            <div className='add-record__input-group'>
              <input type='text' id='date-input' name='date' ref={dateRef} disabled />
              <button
                type='button'
                className='add-record__calendar-button'
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <FontAwesomeIcon icon={faCalendarDay} />
              </button>
            </div>
            {showCalendar && (
              <div className='add-record__calendar-container'>
                <Calendar
                  lang='pt-BR'
                  customDateClick={(dt) => {
                    setDateObj({ year: dt.year, month: dt.month, day: dt.day });
                    setShowCalendar(false);
                    dateRef.current.value = dt.toLocaleString(DateTime.DATE_SHORT);
                  }}
                  fixed={{ month: monthDt.month, year: monthDt.year }}
                />
              </div>
            )}
          </div>
        </div>
        <button type='submit' className='add-record__submit-button'>
          Adicionar registro
        </button>
      </form>
    </section>
  );
}
