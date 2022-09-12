import { useEffect, useState } from 'react';
import { Link, useParams, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../store/product';
import './ProductDetailPage.css';
import { addToCart } from '../../store/cart';
import AddToCartConfirm from './AddToCartConfirm';
import { Modal } from '../../context/Modal';

function ProductDetailPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const user = useSelector(state => state.session.user);
    const product = useSelector(state => state.products[+id]);
    const [quantity, setQuantity] = useState(0);
    const [errors, setErrors] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const category_map = {
        'Furniture': 'furniture',
        'Outdoor & Garden': 'outdoor',
        'Bedding': 'bedding',
        'Bath': 'bath',
        'Pillows & Decor': 'decor',
        'Art & Mirrors': 'mirrors-wall-art',
        'Halloween': 'halloween'
    }

    useEffect(() => {
        dispatch(getOneProduct(+id))
            .then(() => setIsLoaded(true))
    }, [dispatch, id]);

    const decreaseQuantity = () => {
        if (quantity > 0) setQuantity(quantity - 1);
        else return;
    }

    const addItem = async e => {
        e.preventDefault();
        if (user) {
            const newItem = { quantity };
            const data = await dispatch(addToCart(id, newItem));
            if (data) {
                setErrors(data);
            } else {
                setErrors([]);
                setShowModal(true);
            }
        } else {
            history.push('/login');
        }
    };

    if (isLoaded && !product) {
        return <Redirect to='/404' />;
    }

    return (
        <div className='detail-page-cover'>
            {product && (
                <div className='detail-page-frame'>
                    <div className='detail-page-back-to-category'>
                        <i className="fa-solid fa-chevron-left"></i>
                        <Link to={`/products/categories/${category_map[product.category]}`}>{product.category}</Link>
                    </div>
                    <div className='detail-page-main'>
                        <div className='detail-page-left-panel'>
                            {product.images.length && (
                                product.images.map(image => (
                                    <img key={image.id} className='detail-page-img' src={image.url} alt='detail-page-product-showcase' onError={e => e.target.src = 'https://i.imgur.com/rIUtyi2.jpg'} />
                                ))
                            )}
                        </div>
                        <div className='detail-page-right-panel'>
                            <p className='detail-page-product-name'>{product.name}</p>
                            <p className='detail-page-product-price'>${product.price}</p>
                            <div>
                                {errors && errors.map((error, ind) => (
                                    <div key={ind} className="form-errors">{error}</div>
                                ))}
                            </div>
                            <div className='detail-page-purchase-quantity'>
                                <button onClick={decreaseQuantity}>-</button>
                                <input type="number" value={quantity} min="0" max='99' step="1" onChange={e => setQuantity(parseInt(e.target.value))} />
                                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <button className='add-to-cart-btn' onClick={addItem}>ADD TO CART</button>
                            {showModal && (
                                <div className='add-to-cart-confirmation-modal'>
                                    <Modal onClose={() => setShowModal(false)} product={product} quantity={quantity}>
                                        <AddToCartConfirm onClose={() => setShowModal(false)} product={product} quantity={quantity} />
                                    </Modal>
                                </div>
                            )}
                            <p className='detail-page-description-title'>OVERVIEW</p>
                            <p className='detail-page-description'>{product.description}</p>
                            {product.bulletPoints && (
                                <ul className='detail-page-bullet-points'>
                                    {product.bulletPoints.split(',').map(bp => (
                                        <li key={product.id}>{bp}</li>
                                    ))}
                                </ul>
                            )}
                            {/* <p className='detail-page-dimensions-title'>DIMENSIONS</p>
                            {product.dimension && (
                                <ul className='detail-page-dimensions'>
                                    {product.dimension.split(',').map(dimension => (
                                        <li key={product.id}>{dimension}</li>
                                    ))}
                                </ul>
                            )} */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetailPage;
