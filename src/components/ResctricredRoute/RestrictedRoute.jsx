import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogged } = useSelector(state => state.auth);

  return isLogged ? <Navigate to={redirectTo} /> : <Component />;
};
