
import { createSlice } from '@reduxjs/toolkit';
// import shortid from 'shortid';
// import actions from './contacts-action';
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
      store.items = payload;
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
      store.items.push(payload);
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
      const index = store.items.findIndex(item => item.id === payload)
      store.items.splice(index, 1);
    },
    [fetchDeleteContactError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
