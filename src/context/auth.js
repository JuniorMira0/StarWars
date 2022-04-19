import React, { useState } from 'react';
import PropTypes from 'prop-types';
import planetsAPI from '../services/planetsAPI';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    setLoading(true);
    const response = await planetsAPI();

    setData(response);
  };

  const contextValue = { data, getList, loading, setLoading };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// hook para não precisar chamar o context e o useContext

export const useAuth = () => React.useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
