import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { GlobalContext } from '../context/GlobalState';

export default function AddRecord() {
  const { addRecord } = useContext(GlobalContext);
  const [inputValue, setInputValue] = useState({ description: '', amount: 0 });

  const handleChange = ({ target: { name, value } }) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecord = {
      id: uuidv4(),
      description: inputValue.description,
      amount: inputValue.amount,
    };

    addRecord(newRecord);
  };

  return (
    <section className='add-record'>
      <h3>Adicionar novo registro</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='text-input'>Descrição</label>
          <input
            type='text'
            id='text-input'
            name='description'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='value-input'>Valor</label>
          <input
            type='number'
            id='number-input'
            name='amount'
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Adicionar registro</button>
      </form>
    </section>
  );
}
