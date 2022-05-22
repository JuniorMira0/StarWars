import React from 'react';
import './App.css';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';
import OrderList from './components/OrderList';
import Table from './components/Table';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <AuthProvider>
      <FilterName />
      <FilterNumber />
      <OrderList />
      <Table />
    </AuthProvider>
  );
}

export default App;
