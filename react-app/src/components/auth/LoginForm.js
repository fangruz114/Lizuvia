import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const loginDemoUser = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('demo@aa.io', 'password'))
    if (data) {
      setErrors(data)
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/users/${user.id}`} />;
  }

  return (
    <div className='login-page-cover'>
      <div className="login-page-content">
        <div className='login-page-title'>
          <h3>Welcome back!</h3>
          <p>Sign in to use your account!</p>
        </div>
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind} className='form-errors'>{error}</div>
            ))}
          </div>
          <div className='form-element'>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
              maxLength='200'
            />
          </div>
          <div className='form-element'>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
              maxLength='50'
            />
          </div>
          <div className="form-element-button">
            <button type="submit">SIGN IN</button>
            <button onClick={loginDemoUser}>DEMO USER</button>
          </div>
          <div className='login-page-signup'>
            <span>Not have an account yet?</span>
            <Link to='/sign-up'>Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
