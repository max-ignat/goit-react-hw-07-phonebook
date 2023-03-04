import * as api from '../../services/api';

import * as actions from './contacts-action';
// import {
//   fetchAllContactsError,
//   fetchAllContactsLoading,
//   fetchAllContactsSuccess,
//   fetchAddContactLoading,
//   fetchAddContactSuccess,
//   fetchAddContactError,
//   fetchDeleteContactLoading,
//   fetchDeleteContactSuccess,
//   fetchDeleteContactError,
// } from './contacts-action';

export const fetchAllContacts = () => {
  const foo = async dispatch => {
    try {
      dispatch(actions.fetchAllContactsLoading());
      const data = await api.getAllContacts();
      console.log(data);
      dispatch(actions.fetchAllContactsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.fetchAllContactsError(response.data.message));
    }
  };
  return foo;
};

const isDublicate = (contacts, { name, number }) => {
  const normalizedTitle = name.toLowerCase();
  const result = contacts.find(({ name }) => {
    return name.toLowerCase() === normalizedTitle;
  });

  return Boolean(result);
};

export const fetchAddContact = data => {
  const foo = async (dispatch, getState) => {
    try {
      const { contacts } = getState();
      if (isDublicate(contacts.items, data)) {
        alert(`${data.name} is already ixist`);
        return false;
      }
      dispatch(actions.fetchAddContactLoading());
      const result = await api.addContacts(data);
      dispatch(actions.fetchAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(actions.fetchAddContactError(response.data.message));
    }
  };
  return foo;
};

export const fetchDeleteContact = id => {
  const foo = async dispatch => {
    try {
      dispatch(actions.fetchDeleteContactLoading());
      api.deleteContact(id);
      dispatch(actions.fetchDeleteContactSuccess(id));
    } catch ({ response }) {
      dispatch(actions.fetchDeleteContactError(response.data.message));
    }
  };
  return foo;
};
