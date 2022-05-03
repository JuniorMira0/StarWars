import React, { useEffect } from 'react';
import { useAuth } from '../context/auth';
import './Table.css';

const Table = () => {
  const { data, getList, loading, setLoading, filterName, setFilterName } = useAuth();
  console.log(filterName);

  useEffect(() => {
    getList();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderMapAPI = () => data.filter((filter) => filter.name
    .includes(filterName.name))
    .map((planet, index) => (
      <tr key={ index }>
        <td>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
        <td>{planet.films}</td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.url}</td>
      </tr>
    ));

  return (
    <div className="content">
      <label htmlFor="input-filterName">
        <input
          type="text"
          id="input-filterName"
          onChange={ ({ target }) => setFilterName({ name: target.value }) }
          value={ filterName.name }
          data-testid="name-filter"
          placeholder="Filtre pelo nome"
        />
      </label>
      <table className="table table-hover table-dark custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            renderMapAPI()
          ) : (
            <tr>
              <td>Carregando...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
