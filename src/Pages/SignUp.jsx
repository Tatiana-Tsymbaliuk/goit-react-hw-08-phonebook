import { SignUp } from 'components/SignUp/SignUp';

import { useSelector } from 'react-redux';

export function SignUpForm() {
  const { token } = useSelector(state => state.auth);

  return <>{!token ? <SignUp /> : <></>}</>;
}
