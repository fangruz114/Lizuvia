import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { signUp, login } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName.trim(), lastName.trim(), email.trim(), password));
      if (data) {
        setErrors(data);
      }
    } else {
      setErrors(["Your password and confirmation password do not match."]);
    }
  };

  const loginDemoUser = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('demo@aa.io', 'password'))
      .then(() => dispatch(getCarts()));
    if (data) {
      setErrors(data)
    }
  }

  if (user) {
    return <Redirect to='/products' />;
  }

  return (
    <div className='login-page-cover'>
      <div className="login-page-content">
        <div className='login-page-title'>
          <h3>Create An Account</h3>
          <p>Enter your full name and a password to create your account.</p>
        </div>
        <form onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind} className='form-errors'>{error}</div>
            ))}
          </div>
          <div className='form-element'>
            <label>First Name</label>
            <input
              type='text'
              name='firstName'
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="First Name"
              maxLength='45'
            ></input>
          </div>
          <div className='form-element'>
            <label>Last Name</label>
            <input
              type='text'
              name='lastName'
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="Last Name"
              maxLength='45'
            ></input>
          </div>
          <div className='form-element'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              maxLength='200'
            ></input>
          </div>
          <div className='form-element'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              maxLength='50'
            ></input>
          </div>
          <div className='form-element'>
            <label>Repeat Password</label>
            <input
              type='password'
              name='repeat_password'
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={repeatPassword}
              required={true}
              placeholder="Confirm Password"
              maxLength='50'
            ></input>
          </div>
          <div className="form-element-button">
            <button type="submit">SIGN UP</button>
            <button onClick={loginDemoUser}>DEMO USER</button>
          </div>
          <div className='login-page-signup'>
            <span>Already have an account on Lizuvia?</span>
            <Link to="/login">Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
