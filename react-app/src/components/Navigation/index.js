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
                    <NavLink to='/products/category/furniture' activeClassName='active-navlink'>furniture</NavLink>
                    <NavLink to='/products/category/outdoor' activeClassName='active-navlink'>{`Outdoor && Garden`}</NavLink>
                    <NavLink to='/products/category/bedding' activeClassName='active-navlink'>Bedding</NavLink>
                    <NavLink to='/products/category/bath' activeClassName='active-navlink'>Bath</NavLink>
                    <NavLink to='/products/category/decor' activeClassName='active-navlink'>{`Pillows & Decor`}</NavLink>
                    <NavLink to='/products/category/mirrors-wall-art' activeClassName='active-navlink'>{`Art & Mirrors`}</NavLink>
                    <NavLink to='/products/category/halloween' activeClassName='active-navlink'>Halloween</NavLink>
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
