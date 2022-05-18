import React from 'react';
import './App.css';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';
import Table from './components/Table';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <AuthProvider>
      <FilterName />
      <FilterNumber />
      <Table />
    </AuthProvider>
  );
}

export default App;
