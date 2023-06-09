import axios from 'axios';

const baseURL = '/api/persons'

export const getAll = () => {
  return axios.get(baseURL);
}

export const updatePerson = (id, newPerson) => {
  return axios.put(`${baseURL}/${id}`, newPerson)
}

export const createPerson = (newPerson) => {
  return axios.post(baseURL, newPerson);
}

export const deletePerson = (id) => {
  return axios.delete(`${baseURL}/${id}`);
}