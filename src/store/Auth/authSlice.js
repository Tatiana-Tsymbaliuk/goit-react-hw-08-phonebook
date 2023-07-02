import { initialState } from '../Auth/initialState';
import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
} from '../../components/API/API';

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: {
    [registerUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled](state, action) {
      state.isLogged = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [registerUser.rejected](state, action) {
      state.isLogged = false;
      state.error = action.payload;
    },
    [loginUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled](state, action) {
      state.isLogged = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [loginUser.rejected](state, action) {
      state.isLogged = false;
      state.error = action.payload;
    },
    [logoutUser.fulfilled](state, action) {
      state.isLogged = false;
      state.user = { name: null, email: null };
      state.token = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.isLogged = true;
      state.isRefreshing = false;
      state.user = action.payload;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});
export default authSlice.reducer;
