// Initial project inspired by this awesome tutorial https://youtu.be/XuFDcZABiDQ

import React from 'react';

import GlobalProvider from './context/GlobalState';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import RecordList from './components/RecordList';
import AddRecord from './components/AddRecord';

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <main>
        <Balance />
        <IncomeExpenses />
        <RecordList />
        <AddRecord />
      </main>
    </GlobalProvider>
  );
}
