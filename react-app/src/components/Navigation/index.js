import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SearchBar from '../SearchBar';
import './NavBar.css';
import LogoutButton from '../auth/LogoutButton';
import { getCarts } from '../../store/cart';
import NavCartDropDown from './NavCartDropDown';

function NavBar() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const carts = useSelector(state => Object.values(state.cart));

    let sessionLinks;
    if (user) {
        sessionLinks = (
            <ul className='profile-drop-down'>
                <li><Link to={`/users/${user.id}`}>My Account</Link></li>
                <li><Link to={`/users/${user.id}/orders`}>My Orders</Link></li>
                <li><Link to={`/users/${user.id}/products`}>My Products</Link></li>
                <li><LogoutButton /></li>
            </ul>
        )
    } else {
        sessionLinks = (
            <ul className='profile-drop-down'>
                <li><Link to={`/login`}>Sign In</Link></li>
                <li><Link to={`/sign-up`}>Create an account</Link></li>
            </ul>
        )
    }

    useEffect(() => {
        dispatch(getCarts());
    }, [dispatch])

    const totalItem = (items) => {
        let count = 0;
        for (let item of items) {
            count += Number(item.quantity);
        }
        return count;
    }

    return (
        <nav>
            <div className='nav-top'>
                <SearchBar />
                <Link to='/'>
                    <img src="https://i.imgur.com/WNDYJVi.png" alt='lizuvia-logo' />
                </Link>
                <div className='nav-profile-cart'>
                    <div className='nav-profile'>
                        <div className='nav-orders-signin'>
                            <p>{user ? `Orders & Account` : `Orders & Sign In`}</p>
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <>
                            {sessionLinks}
                        </>
                    </div>
                    <div className='nav-cart'>
                        <Link to='/cart' className='nav-cart-items'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            {(user && carts.length > 0) ? (<p>{totalItem(carts)}</p>) : (<p>{`0`}</p>)}
                        </Link>
                        <>
                            <NavCartDropDown carts={user ? carts : null} count={(user && carts) ? totalItem(carts) : 0} />
                        </>
                    </div>
                </div>
            </div>
            <div className='nav-menu-cover'>
                <div className='nav-bottom'>
                    <NavLink to='/products' activeClassName='active-navlink'>All Products</NavLink>
                    <NavLink to='/products/categories/furniture' activeClassName='active-navlink'>Furniture</NavLink>
                    <NavLink to='/products/categories/outdoor' activeClassName='active-navlink'>{`Outdoor & Garden`}</NavLink>
                    <NavLink to='/products/categories/bedding' activeClassName='active-navlink'>Bedding</NavLink>
                    <NavLink to='/products/categories/bath' activeClassName='active-navlink'>Bath</NavLink>
                    <NavLink to='/products/categories/decor' activeClassName='active-navlink'>{`Pillows & Decor`}</NavLink>
                    <NavLink to='/products/categories/mirrors-wall-art' activeClassName='active-navlink'>{`Art & Mirrors`}</NavLink>
                    <NavLink to='/products/categories/halloween' activeClassName='active-navlink'>Halloween</NavLink>
                </div>
            </div>
            <div className='nav-promo'>
                <p>HOLIDAY PROMO</p>
                <p>FREE SHIPPING ON ALL ITEMS</p>
            </div>
        </nav>
    )
}

export default NavBar;
