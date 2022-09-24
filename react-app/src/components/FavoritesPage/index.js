import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getFavors } from '../../store/favorite';
import Favor from '../Favorites';
import './FavoritesPage.css'

function FavoritesPage() {
    const dispatch = useDispatch();
    const favors = useSelector(state => Object.values(state.favorites));

    useEffect(() => {
        dispatch(getFavors());
    }, [dispatch]);

    return (
        <div className='favorites-wrapper'>
            <div className='favorites-inner'>
                <div className='favorites-back-btn'>
                    <Link to='/products'>Products</Link>
                    <p>{`>`}<span>Favorites</span></p>
                </div>
                <div className='favorites-title'>
                    <div className='favorites-title-left'>
                        <p className='favorites-title-cap'>YOUR FAVORITES</p>
                        <p>{favors.length} Items</p>
                    </div>
                    <Link to='/products'>BROWSE MORE</Link>
                </div>
                <div className='Favorites-items-list'>
                    {favors.length > 0 ? (
                        <>
                            {favors.map(favor => (
                                <div key={favor.id} className='favor-item-ind'>
                                    <Favor id={favor.product.id} />
                                    <Link key={favor.id} className='favor-item-link' to={`/products/${favor.product.id}`}>
                                        <img src={favor.product?.images[0]?.url} alt='favor-list-product-img' />
                                        <p>{favor.product.name}</p>
                                    </Link>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className='no-favor-wrapper'>
                            <div className='no-favor-content'>
                                <i className="fa-solid fa-heart"></i>
                                <p className='no-favor-title'>Fine Your Favorites</p>
                                <p>See something you like? Keep track of your</p>
                                <p>favorite items and inspiration by selecting</p>
                                <p>the heart icon.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FavoritesPage;
