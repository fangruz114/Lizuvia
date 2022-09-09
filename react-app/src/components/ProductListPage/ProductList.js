import { Link } from 'react-router-dom';
import { useState } from 'react';
import SortBar from '../SortBar';
import './ProductListPage.css';

function ProductList({ products }) {
    const [searchTerm, setSearchTerm] = useState();

    if (searchTerm) {
        if (searchTerm === 'New Arrivals') {
            products.sort((a, b) => b.id - a.id)
        } else if (searchTerm === 'Price, low to high') {
            products.sort((a, b) => a.price - b.price)
        } else {
            products.sort((a, b) => b.price - a.price)
        }
    };

    return (
        <div className='product-list-cover'>
            <div className='product-list-back-sort-bar'>
                <SortBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className='product-list'>
                {products && (
                    products.map(product => (
                        <div className='product-card' key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <div className='product-image'>
                                    <img className='product-card-img-display' src={product.images[0].url} alt='product-card-display' />
                                </div>
                            </Link>
                            <div className='product-card-info'>
                                <Link to={`/products/${product.id}`}>
                                    <p className='product-card-name'>{product.name}</p>
                                </Link>
                                <p className='product-card-price'>${product.price}</p>
                                <p className='product-card-free-shipping'>Free Shipping</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div >
    )
}

export default ProductList;
