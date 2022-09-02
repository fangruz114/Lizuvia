import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserProducts, removeProduct } from '../../store/product';
import './UserProductList.css';

function UserProductList() {
    const dispatch = useDispatch();
    const userProducts = useSelector(state => Object.values(state.products));

    useEffect(() => {
        dispatch(getUserProducts())
    }, [dispatch])

    const deleteProduct = (id) => {
        dispatch(removeProduct(id))
    };

    return (
        <div className='user-products-cover'>
            <div className='user-products-page-title-wrapper'>
                <div className='user-products-title'>
                    <h2>My Product Listings</h2>
                    <Link to='/new-products'>ADD PRODUCT</Link>
                </div>
            </div>
            <div className='user-product-list-wrapper'>
                <div className='user-product-list'>
                    {userProducts.length && (
                        userProducts.map(product => (
                            <div className='user-products-ind' key={product.id}>
                                <div className='user-product-img'>
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.images[0].url} alt='user-product-display' />
                                    </Link>
                                </div>
                                <div className='user-product-info'>
                                    <Link to={`/products/${product.id}`}>
                                        <p className='user-product-name'>{product.name}</p>
                                    </Link>
                                    <p className='user-product-number'>Item #: {product.id}</p>
                                    <p>${product.price}</p>
                                </div>
                                <div className='user-product-edit-delete-btn'>
                                    <Link to={`/products/${product.id}/edit`}>EDIT</Link>
                                    <button onClick={() => deleteProduct(product.id)}>DELETE</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserProductList;
