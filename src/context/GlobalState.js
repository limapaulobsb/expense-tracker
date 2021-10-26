import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import AppReducer from './AppReducer';

const initialState = {
  records: [
    { id: 1, description: 'Mercado', amount: -250 },
    { id: 2, description: 'Salário', amount: 2500 },
    { id: 3, description: 'Gasolina', amount: -150 },
    { id: 4, description: 'Venda de cartas', amount: 400 },
    { id: 5, description: 'Aluguel', amount: -1280 },
    { id: 6, description: 'Academia', amount: -100 },
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

  return (
    <GlobalContext.Provider
      value={{
        records: state.records,
        addRecord,
        deleteRecord,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
