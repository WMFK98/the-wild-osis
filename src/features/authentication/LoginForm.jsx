import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import useLogin from './useLogin';
import SpinnerMini from '../../ui/SpinnerMini';
import { useNavigate } from 'react-router-dom';
import FormRowVertical from '../../ui/FormRowVertical';
function LoginForm() {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState(
    "#Wsw-</x'&Z%?d_#S>w6{D=}a!XVp1:2-CEB4>qB!<HuB:,69-"
  );
  const { isLoading, login } = useLogin();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
    navigate('/dashboard');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={isLoading} size="large">
          {!isLoading ? 'Login' : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
