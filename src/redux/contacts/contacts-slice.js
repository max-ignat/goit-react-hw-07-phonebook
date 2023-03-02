
import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: shortid.generate(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
