import React, { useEffect } from 'react';
import { useAuth } from '../context/auth';
import './Table.css';

const Table = () => {
  const { data, getList, loading, setLoading, filterName, numericalValue } = useAuth();
  console.log(filterName);

  useEffect(() => {
    getList();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FilterNumber = (planet) => {
    if (numericalValue.length === 0) {
      return true;
    }
    const result = [];
    numericalValue.forEach((element) => {
      if (element.comparison === 'maior que') {
        result.push(Number(planet[element.column]) > Number(element.number));
      }

      if (element.comparison === 'menor que') {
        result.push(Number(planet[element.column]) < Number(element.number));
      }

      if (element.comparison === 'igual a') {
        result.push(Number(planet[element.column]) === Number(element.number));
      }
    });
    return result.every((filter) => filter);
  };

  const renderMapAPI = () => data
    .filter((planet) => FilterNumber(planet))
    .filter((filter) => filter.name
      .includes(filterName.filterByName.name))
    .map((planet) => (
      <tr key={ planet.name }>
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
