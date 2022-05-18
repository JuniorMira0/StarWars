import React, { useState } from 'react';
import { useAuth } from '../context/auth';

const FilterNumber = () => {
  const {
    numericalValue,
    setNumericalValue,
  } = useAuth();

  const [selectNumericalValue, setSelectNumericalValue] = useState({
    column: 'population',
    comparison: 'maior que',
    number: '0',
  });

  const [columnOptions, setColumOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const removeOptions = (removed) => {
    const listFilter = numericalValue.filter((filter) => filter !== removed);
    setNumericalValue(listFilter);
    setColumOptions(columnOptions.concat(removed.column));
  };

  const removeFilter = () => {
    setNumericalValue([]);
    setColumOptions([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setSelectNumericalValue({
      ...selectNumericalValue,
      [name]: value,
    });
  };

  const subimitChange = () => {
    setNumericalValue([...numericalValue, selectNumericalValue]);

    setSelectNumericalValue({
      column: '',
      comparison: '',
      number: '',
    });
    const removeFilterLine = columnOptions.filter(
      (filter) => filter !== selectNumericalValue.column,
    );
    setColumOptions(removeFilterLine);
  };

  return (
    <div>
      <label htmlFor="column">
        <select
          name="column"
          data-testid="column-filter"
          value={ selectNumericalValue.column }
          onChange={ handleChange }
        >
          {columnOptions.map((option, index) => (
            <option key={ index } value={ option }>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          type="text"
          id="comparison"
          name="comparison"
          data-testid="comparison-filter"
          value={ selectNumericalValue.comparison }
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        id="number"
        name="number"
        value={ selectNumericalValue.number }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ subimitChange }
      >
        Filtrar
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeFilter }
      >
        Remover Filtros
      </button>
      { numericalValue.map((filter, index) => (
        <div key={ index } data-testid="filter">
          <p>{ `${filter.column} ${filter.comparison} ${filter.number}` }</p>
          <button type="button" onClick={ () => removeOptions(filter) }>X</button>
        </div>
      )) }
    </div>
  );
};

export default FilterNumber;
