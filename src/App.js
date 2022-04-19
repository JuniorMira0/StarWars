import React from 'react';
import './App.css';
import Table from './components/Table';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <AuthProvider>
      <Table />
    </AuthProvider>
  );
}

export default App;
