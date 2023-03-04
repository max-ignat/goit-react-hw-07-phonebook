
import { createSlice } from '@reduxjs/toolkit';
import { fetchAddContactError, fetchAddContactLoading, fetchAddContactSuccess, fetchAllContactsError, fetchAllContactsLoading, fetchAllContactsSuccess, fetchDeleteContactError, fetchDeleteContactLoading, fetchDeleteContactSuccess } from './contacts-action';
    

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
  }



const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAllContactsLoading]: store => {
      store.isLoading = true;
    },
    [fetchAllContactsSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.contacts = payload;
    },
    [fetchAllContactsError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [fetchAddContactLoading]: store => {
      store.isLoading = true;
    },
    [fetchAddContactSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.contacts.push(payload);
    },
    [fetchAddContactError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [fetchDeleteContactLoading]: store => {
      store.isLoading = true;
    },
    [fetchDeleteContactSuccess]: (store, { payload }) => {
      store.isLoading = false;
      const index = store.contacts.findIndex(
        contact => contact.id === payload
      );
      store.contacts.splice(index, 1);
    },
    [fetchDeleteContactError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
