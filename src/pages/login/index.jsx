import './index.css';
import { useState } from 'react';
import { defaultLoginFormData } from 'constants';
import { withRouteNavigation } from 'libs';
import { loginHandler } from 'libs';
import { useAuth } from 'contexts';

export const Login = withRouteNavigation(() => {
  const [formData, setFormData] = useState(defaultLoginFormData);
  const [error, setError] = useState(null);
  const { setIsLoggedIn } = useAuth();
  const { username, password } = formData;
  const areFieldsEmpty = username === '' || password === '';

  const inputChangeHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setFormData((prevFormData) => ({ ...prevFormData, [key]: value }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setError(null);
    const response = loginHandler(username, password);
    if (response.success) {
      setIsLoggedIn(true);
    } else {
      setError(response.message);
    }
  };

  return (
    <div className='page-login'>
      <h1>Log in</h1>
      {error && <p className='msg-error'>{error}</p>}
      <form onSubmit={formSubmitHandler} className='form-login'>
        <label htmlFor='username'>Username</label>
        <input
          onChange={inputChangeHandler}
          className='input'
          type='text'
          id='username'
          value={username}
          placeholder='Enter your username'
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          onChange={inputChangeHandler}
          className='input'
          type='password'
          id='password'
          value={password}
          placeholder='Enter your password'
          required
        />
        <button className='btn btn-login' disabled={areFieldsEmpty}>
          Login
        </button>
      </form>
    </div>
  );
});
