const planetsAPI = async () => {
  try {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const data = await fetch(url).then((response) => response.json());
    return data.results;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

export default planetsAPI;
