import axios from 'axios';

const publicURL = 'https://studies.cs.helsinki.fi/restcountries/';

export const getAllCountries = () => {
  return axios.get(`${publicURL}api/all`);
}

export const getByName = (name) => {
  return axios.get(`${publicURL}/api/name/${name}`)
}