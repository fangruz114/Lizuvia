import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <div className='nav-top'>
                <SearchBar />
                <img src="https://i.imgur.com/WNDYJVi.png" alt='lizuvia-logo' />
                <div className='nav-profile-cart'>
                    <div className='nav-orders-signin'>
                        <p>{`Orders & Sign In`}</p>
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className='nav-cart-items'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>{`0`}</p>
                    </div>
                </div>
            </div>
            <div className='nav-menu-cover'>
                <div className='nav-bottom'>
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
