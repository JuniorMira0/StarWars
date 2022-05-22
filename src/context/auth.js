import React, { useState } from 'react';
import PropTypes from 'prop-types';
import planetsAPI from '../services/planetsAPI';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numericalValue, setNumericalValue] = useState([]);
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });
  const [filterName, setFilterName] = useState({
    filterByName: {
      name: '',
    },
  });

  const getList = async () => {
    const n = -1;
    setLoading(true);
    const response = await planetsAPI();

    const sortOrder = response.sort((a, b) => (a.name > b.name ? 1 : n));

    setData(sortOrder);
  };

  const contextValue = {
    data,
    setData,
    order,
    setOrder,
    getList,
    loading,
    setLoading,
    filterName,
    setFilterName,
    numericalValue,
    setNumericalValue,
  };

  return (
    <AuthContext.Provider value={ contextValue }>{children}</AuthContext.Provider>
  );
};

// hook para não precisar chamar o context e o useContext

export const useAuth = () => React.useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
