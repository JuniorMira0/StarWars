import React from 'react';
import { useAuth } from '../context/auth';

const FilterName = () => {
  const { filterName, setFilterName } = useAuth();

  return (
    <label htmlFor="input-filterName">
      Nome:
      <input
        type="text"
        id="input-filterName"
        onChange={ ({ target }) => setFilterName(
          { filterByName: { name: target.value } },
        ) }
        value={ filterName.filterByName.name }
        data-testid="name-filter"
        placeholder="Filtre pelo nome"
      />
    </label>
  );
};

export default FilterName;
