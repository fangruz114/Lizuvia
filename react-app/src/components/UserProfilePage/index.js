import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './UserProfilePage.css';

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className='user-profile-cover'>
      <div className='user-profile-page'>
        <div className='user-profile-nav'>
          <NavLink to={`/users/${userId}`} activeClassName='active-profile-link'>{user.firstName} {user.lastName}'s Account</NavLink>
          <NavLink to={`/users/${userId}/orders`} activeClassName='active-profile-link'>Order History</NavLink>
          <NavLink to={`/users/${userId}/products`} activeClassName='active-profile-link'>Manage Products</NavLink>
        </div>
        <div className='user-profile-user-info'>
          <h1>Hello, {user.firstName} {user.lastName}</h1>
          <p>Manage your products and orders here.</p>
        </div>
      </div>
    </div>
  );
}
export default User;
