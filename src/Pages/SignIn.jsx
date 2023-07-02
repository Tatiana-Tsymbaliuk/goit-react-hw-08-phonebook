import { SignIn } from 'components/SignIn/SignIn';
import { useSelector } from 'react-redux';

export function SignInForm() {
  const { token } = useSelector(state => state.auth);

  return <>{!token ? <SignIn /> : <></>}</>;
}
