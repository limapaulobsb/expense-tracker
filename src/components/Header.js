import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../context/GlobalState';
import Modal from './Modal';
import Calendar from './calendar/Calendar';
import '../styles/Header.css';

export default function Header() {
  const { monthDt, setMonthDt } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <header>
      <div>
        <h3>Boas-vindas, Paulo Henrique. Este é o seu controle financeiro.</h3>
      </div>
      <div>
        <div className='month-selectors-container'>
          <button
            type='button'
            className='month-selector'
            onClick={() => setMonthDt(monthDt.minus({ month: 1 }))}
          >
            <FontAwesomeIcon icon={faChevronLeft} size='lg' />
          </button>
          <div className='main-selector-container'>
            <button
              type='button'
              className='month-selector'
              onClick={() => setShowModal(!showModal)}
            >
              {monthDt.monthLong} {monthDt.year}
            </button>
            <Modal state={{ showModal, setShowModal }}>
              <Calendar
                lang='pt-BR'
                ariaPrevBtn='Ano anterior'
                ariaNextBtn='Próximo ano'
                start={{ month: monthDt.month, year: monthDt.year }}
                customDateClick={(dt) => {
                  setMonthDt(dt);
                  setShowModal(false);
                }}
                monthsOnly
              />
            </Modal>
          </div>
          <button
            type='button'
            className='month-selector'
            onClick={() => setMonthDt(monthDt.plus({ month: 1 }))}
          >
            <FontAwesomeIcon icon={faChevronRight} size='lg' />
          </button>
        </div>
      </div>
    </header>
  );
}
