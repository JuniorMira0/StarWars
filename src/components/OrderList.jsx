import React, { useState } from 'react';
import { useAuth } from '../context/auth';

const OrderList = () => {
  const { data, setData } = useAuth();
  const [column, setColumn] = useState('population');
  const [sort, setSort] = useState('');

  const arrayList = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const orderData = () => {
    const verificator = column === 'population';

    if (verificator) {
      const populationUnknown = data
        .filter((planet) => planet.population === 'unknown');
      console.log(populationUnknown);

      const filterList = data
        .filter((planet) => planet.population !== 'unknown');
      const sortedList = filterList
        .sort((a, b) => (sort === 'ASC' ? a[column] - b[column]
          : b[column] - a[column]));

      const sortedData = [...sortedList, ...populationUnknown];
      setData([...sortedData]);
      console.log('if', sortedData);
    } else {
      const sortedData = data
        .sort((a, b) => (sort === 'ASC' ? a[column] - b[column]
          : b[column] - a[column]));
      setData([...sortedData]);
      console.log('else', sortedData);
    }
  };

  return (
    <div>
      <label htmlFor="column-sort">
        Column:
        <select
          data-testid="column-sort"
          name="column-sort"
          value={ column }
          onChange={ ({ target }) => {
            setColumn(target.value);
            console.log(target.value);
          } }
        >
          {arrayList.map((drop) => (
            <option key={ drop }>{drop}</option>
          ))}
        </select>
      </label>

      <label htmlFor="column-sort-input-asc">
        Ascendente:
        <input
          data-testid="column-sort-input-asc"
          name="column-sort-input-asc"
          id="column-sort-input-asc"
          value="ASC"
          checked={ sort === 'ASC' }
          type="radio"
          onChange={ () => setSort('ASC') }
        />
      </label>

      <label htmlFor="column-sort-input-desc">
        Descendente
        <input
          data-testid="column-sort-input-desc"
          name="sort-input"
          id="sort-input"
          value="DESC"
          checked={ sort === 'DESC' }
          type="radio"
          onChange={ () => setSort('DESC') }
        />
      </label>

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => orderData() }
      >
        Ordenar
      </button>
    </div>
  );
};

export default OrderList;
