import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserProducts } from '../../store/product';
import UserProductInd from './UserProductInd';
import './UserProductList.css';

function UserProductList() {
    const dispatch = useDispatch();
    const userProducts = useSelector(state => Object.values(state.products));

    useEffect(() => {
        dispatch(getUserProducts())
    }, [dispatch])

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
                    {userProducts.length > 0 && (
                        userProducts.map(product => (
                            <UserProductInd product={product} />
                        ))
                    )}
                    {userProducts.length === 0 && (
                        <div className='user-no-product'>You haven't listed any product yet.</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserProductList;
