import * as api from '../../services/api';

// import * as actions from './contacts-action';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchAllContacts = () => {
//   const foo = async dispatch => {
//     try {
//       dispatch(actions.fetchAllContactsLoading());
//       const data = await api.getAllContacts();
//       console.log(data);
//       dispatch(actions.fetchAllContactsSuccess(data));
//     } catch ({ response }) {
//       dispatch(actions.fetchAllContactsError(response.data.message));
//     }
//   };
//   return foo;
// };
export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await api.addContacts(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const result = contacts.contacts.find(({ name }) => { //!!!! вохможно ошибка
      return name.toLowerCase() === normalizedName;
      });
      if (result) {
        alert(`${name} is already ixist`);
        return false;
      }
    },
  }
);

// export const fetchAddContact = data => {
//   const foo = async (dispatch, getState) => {
//     try {
//       const { contacts } = getState();
//       if (isDublicate(contacts.contacts, data)) {
//         alert(`${data.name} is already ixist`);
//         console.log('first');
//         return false;
//       }
//       dispatch(actions.fetchAddContactLoading());
//       const result = await api.addContacts(data);

//       dispatch(actions.fetchAddContactSuccess(result));
//     } catch ({ response }) {
//       dispatch(actions.fetchAddContactError(response.data.message));
//     }
//   };
//   return foo;
// };

// export const fetchDeleteContact = id => {
//   const foo = async dispatch => {
//     try {
//       dispatch(actions.fetchDeleteContactLoading());
//       api.deleteContact(id);
//       dispatch(actions.fetchDeleteContactSuccess(id));
//     } catch ({ response }) {
//       dispatch(actions.fetchDeleteContactError(response.data.message));
//     }
//   };
//   return foo;
// };

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      await api.deleteContact(id)
      return id;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })