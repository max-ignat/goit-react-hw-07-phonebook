// https://64009edd29deaba5cb3bd01b.mockapi.io/contacts/
import axios from 'axios';

const API_KEY = '64009edd29deaba5cb3bd01b';

export const getContacts = async () => {
  const {data} = await axios.get(
    `https://${API_KEY}.mockapi.io/contacts/`
  );

  return data;
};

export const deleteContact = async (id) => {
  const response = await axios.delete(`https://${API_KEY}.mockapi.io/contacts/${id}`);

  return response;
};

export const addContacts = async (data) => {
  const {data: response }= await axios.post(`https://${API_KEY}.mockapi.io/contacts/`, data);

  return response;
};












// const contactsInstance = axios.create({ baseURL: `https://${API_KEY}.mockapi.io/contacts/`})