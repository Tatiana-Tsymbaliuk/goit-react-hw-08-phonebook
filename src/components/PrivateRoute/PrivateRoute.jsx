import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogged, isRefreshing } = useSelector(state => state.auth);
  const shouldRedirect = !isRefreshing && !isLogged;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
