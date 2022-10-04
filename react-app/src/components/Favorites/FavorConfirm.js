import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function FavorConfirm({ id, action }) {

    const product = useSelector(state => state.products[id]);

    return (
        <div className='favor-confirmation-window'>
            <div className='favor-confirm-inner'>
                <p className='favor-confirm-title'>{action ? `Added to Favorites` : `Removed from Favorites`}</p>
                <div className='favor-conf-product-info'>
                    <img src={product.images[0].url} alt='favor-confirm-product' />
                    <p className='favor-product-name'>{product.name}</p>
                </div>
                <Link to='/favorites'>View Favorites</Link>
            </div>
        </div>
    )
}

export default FavorConfirm;
