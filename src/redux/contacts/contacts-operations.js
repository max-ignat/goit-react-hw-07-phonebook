import * as api from '../../services/api';

import * as actions from './contacts-action'
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
      const data = await api.getContacts();
      console.log(data)
      dispatch(actions.fetchAllContactsSuccess(data));
    } catch (error) {
      dispatch(actions.fetchAllContactsError(error.message));
    }
  };
  return foo;
};

export const fetchAddContact = data => {
  const foo = async dispatch => {
    try {
      dispatch(actions.fetchAddContactLoading());
      const result = await api.addContacts(data);
      dispatch(actions.fetchAddContactSuccess(result));
    } catch (error) {
      dispatch(actions.fetchAddContactError(error.message));
    }
  };
  return foo;
};

export const fetchDeleteContact = id => {
  const foo = async dispatch => {
      try {
          dispatch(actions.fetchDeleteContactLoading());
          api.deleteContact(id)
          dispatch(actions.fetchDeleteContactSuccess(id));
    } catch (error) {
      dispatch(actions.fetchDeleteContactError(error.message));
    }
  };
  return foo;
};
