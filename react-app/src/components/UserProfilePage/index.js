import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, Link } from 'react-router-dom';
import { getOrders } from '../../store/order';
import './UserProfilePage.css';

function User() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const orders = useSelector(state => state.orders.orders);

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

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch])

  if (!user) {
    return null;
  }

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const yr = date.getFullYear();
    return `${month} ${day}, ${yr}`;
  }

  return (
    <div className='user-profile-cover'>
      <div className='user-profile-page'>
        <div className='user-profile-nav'>
          <p>{user.firstName} {user.lastName}'s Account</p>
          <NavLink to={`/orders`} activeClassName='active-profile-link'>Order History</NavLink>
          <NavLink to={`/users/${userId}/products`} activeClassName='active-profile-link'>Manage Products</NavLink>
          <NavLink to={`/favorites`} activeClassName='active-profile-link'>Favorites</NavLink>
          <NavLink to={`/reviews`} activeClassName='active-profile-link'>My Reviews</NavLink>
        </div>
        <div className='user-profile-user-info'>
          <h1>Hello, {user.firstName} {user.lastName}</h1>
          <p>Manage your products and orders here.</p>
          <div className='user-profile-order-title'>
            <p>YOUR ORDERS</p>
            <Link to='/orders'>View Order History</Link>
          </div>
          <div className='user-profile-order-list'>
            {orders && Object.values(orders).map((order, idx) => (
              <div key={order.id} className='user-profile-ind-order'>
                <div className='user-profile-order-idx'>{idx + 1}</div>
                <div className='user-profile-order-info'>
                  <p>Order#: {order.id}</p>
                  <p>Placed {convertDate(order.createdAt)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
