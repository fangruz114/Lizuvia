import { Link } from 'react-router-dom';
import './ProductListPage.css';

function ProductList({ products }) {

    return (
        <div className='product-list-cover'>
            <div className='product-list'>
                {products && (
                    products.map(product => (
                        <div className='product-card' key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <div className='product-image'>
                                    <img className='product-card-img-display' src={product.images[0].url} alt='product-card-display' onError={e => e.target.src = 'https://i.imgur.com/rIUtyi2.jpg'} />
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
