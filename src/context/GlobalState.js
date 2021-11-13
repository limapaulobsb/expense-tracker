import React, { createContext, useEffect, useReducer } from 'react';
import { DateTime, Settings } from 'luxon';
import PropTypes from 'prop-types';

import AppReducer from './AppReducer';

Settings.defaultLocale = 'pt-BR';

const initialState = {
  monthDt: DateTime.now(),
  records: [
    { id: 1, description: 'Mercado', amount: -105.1, year: 2021, month: 9, day: 1 },
    { id: 2, description: 'Farmácia', amount: -128.2, year: 2021, month: 9, day: 2 },
    { id: 3, description: 'Salário', amount: 3000, year: 2021, month: 9, day: 5 },
    { id: 4, description: 'Gasolina', amount: -250, year: 2021, month: 9, day: 10 },
    { id: 5, description: 'Aluguel', amount: -1280, year: 2021, month: 9, day: 12 },
    { id: 6, description: 'Academia', amount: -99.9, year: 2021, month: 9, day: 20 },
    { id: 7, description: 'Mercado', amount: -173.4, year: 2021, month: 10, day: 4 },
    { id: 8, description: 'Salário', amount: 3000, year: 2021, month: 10, day: 5 },
    { id: 9, description: 'Gasolina', amount: -250, year: 2021, month: 10, day: 8 },
    { id: 10, description: 'Aluguel', amount: -1280, year: 2021, month: 10, day: 12 },
    { id: 11, description: 'Academia', amount: -99.9, year: 2021, month: 10, day: 20 },
    { id: 12, description: 'Mercado', amount: -358.2, year: 2021, month: 10, day: 22 },
    { id: 13, description: 'Salário', amount: 3000, year: 2021, month: 11, day: 5 },
    { id: 14, description: 'Gasolina', amount: -300, year: 2021, month: 11, day: 11 },
    { id: 15, description: 'Aluguel', amount: -1280, year: 2021, month: 11, day: 12 },
    { id: 16, description: 'Academia', amount: -99.9, year: 2021, month: 11, day: 20 },
    { id: 17, description: 'Farmácia', amount: -229.8, year: 2021, month: 11, day: 21 },
    { id: 18, description: 'Mercado', amount: -158.2, year: 2021, month: 11, day: 28 },
  ],
};

export const GlobalContext = createContext(initialState);

export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addRecord = (record) => {
    dispatch({
      type: 'ADD_RECORD',
      payload: record,
    });
  };

  const deleteRecord = (id) => {
    dispatch({
      type: 'DELETE_RECORD',
      payload: id,
    });
  };

  const setMonthDt = (dt) => {
    dispatch({
      type: 'SET_CURRENT_MONTH',
      payload: dt,
    });
  };

  useEffect(() => {
    Settings.defaultLocale = 'pt-BR';
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        monthDt: state.monthDt,
        records: state.records,
        addRecord,
        deleteRecord,
        setMonthDt,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
