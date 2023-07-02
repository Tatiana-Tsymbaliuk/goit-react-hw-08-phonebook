import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(action, { payload }) {
      return payload;
    },
  },
});
export const { filterContact } = filterSlice.actions;
export default filterSlice.reducer;
