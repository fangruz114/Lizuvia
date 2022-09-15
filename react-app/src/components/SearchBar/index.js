import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/product';
import './searchBar.css';


function SearchBar() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    const products = useSelector(state => Object.values(state.products));

    useEffect(() => {
        if (searchTerm.length) {
            setShowMenu(true);
            setSearchResult(filterProducts(searchTerm));
        } else {
            setShowMenu(false);
            setSearchResult([]);
        }
    }, [searchTerm]);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    const filterProducts = (keyword) => {
        const st = [];
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            let name = product.name;
            let description = product.description;
            let category = product.category;
            if (name.toLowerCase().includes(keyword.toLowerCase()) ||
                description.toLowerCase().includes(keyword.toLowerCase()) ||
                category.toLowerCase().includes(keyword.toLowerCase())) {
                st.push(product)
            }
        }
        return st;
    }

    return (
        <div className="nav-search-bar">
            <div className="product-search-form">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    className="product-search"
                    placeholder="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
            </div>
            {(showMenu && searchResult.length > 0) && (
                <div className='search-bar-drop-down'>
                    {searchResult.map((product) => (
                        <Link key={product.id} onClick={() => setSearchTerm("")} to={`/products/${product.id}`} className='search-dropdown-products'>
                            <img className='search-dropdown-product-img' src={product.images[0].url} alt='search-product-display' />
                            <p className='search-dropdown-product-name'>{product.name}</p>
                        </Link>
                    ))}
                </div>
            )}
            {(showMenu && searchResult.length === 0) && (
                <div className='no-search-result'>
                    <p>There are no products match your search for "{searchTerm}" </p>
                </div>
            )}
        </div>
    );
}

export default SearchBar;
