import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsSlice from './Contacts/contactsSlice';
import filterSlice from './Filter/filterSlice';
import authSlice from './Auth/authSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
    auth: persistReducer(persistConfig, authSlice),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
