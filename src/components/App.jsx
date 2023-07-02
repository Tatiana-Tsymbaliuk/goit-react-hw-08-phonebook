import { Route, Routes } from 'react-router-dom';

import { Container } from './App.module.jsx';

import { Header } from '../components/Header/Header';
import { SignInForm } from 'Pages/SignIn.jsx';
import { SignUpForm } from 'Pages/SignUp.jsx';
import { Home } from 'Pages/Home.jsx';
import { Phonebook } from 'Pages/Phonebook.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { refreshUser } from './API/API.js';
import { RestrictedRoute } from './ResctricredRoute/RestrictedRoute.jsx';
import { PrivateRoute } from './PrivateRoute/PrivateRoute.jsx';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Frething data...'
  ) : (
    <Container>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route
          path="/Phonebook"
          element={<PrivateRoute component={Phonebook} redirectTo="/SignIn" />}
        />
        <Route
          path="/SignIn"
          element={
            <RestrictedRoute component={SignInForm} redirectTo="/Phonebook" />
          }
        />
        <Route
          path="/SignUp"
          element={
            <RestrictedRoute component={SignUpForm} redirectTo="/Phonebook" />
          }
        />
      </Routes>
    </Container>
  );
};

export { App };
