import { useEffect, useState } from 'react';
import { Link, useParams, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../store/product';
import './ProductDetailPage.css';
import { addToCart } from '../../store/cart';
import { getProductReviews } from '../../store/review';
import AddToCartConfirm from './AddToCartConfirm';
import { Modal } from '../../context/Modal';
import Favor from '../Favorites';
import StarRatings from 'react-star-ratings';
import ReviewPreview from './ReviewPreview';
import AllReviewModal from './AllReviewModal';

function ProductDetailPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const user = useSelector(state => state.session.user);
    const product = useSelector(state => state.products[+id]);
    const reviews = useSelector(state => Object.values(state.reviews));

    const [quantity, setQuantity] = useState(0);
    const [errors, setErrors] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showReviews, setShowReviews] = useState(false);
    const [reviewPreview, setReviewPreview] = useState(false);

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
            .then(() => dispatch(getProductReviews(+id)))
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

    const avgRating = (array) => {
        let total = 0;
        for (let ele of array) {
            total += Number(ele.rating)
        }
        return Number((total / array.length).toFixed(2))
    }

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
                            {reviews.length > 0 && (
                                <button onClick={() => setShowReviews(true)} className='detail-page-review-rating'>
                                    <StarRatings
                                        rating={reviews.length > 0 ? avgRating(reviews) : 0}
                                        starDimension="17px"
                                        starSpacing="0px"
                                        starRatedColor='black'
                                    />
                                    <p>{reviews.length} Reviews</p>
                                </button>
                            )}
                            {showReviews && (
                                <div className='all-review-list-model'>
                                    <Modal onClose={() => setShowReviews(false)}>
                                        <AllReviewModal reviews={reviews} avgRating={avgRating} onClose={() => setShowReviews(false)} />
                                    </Modal>
                                </div>
                            )}
                            <div className='detail-page-price-favor'>
                                <p className='detail-page-product-price'>${product.price}</p>
                                <Favor id={product.id} />
                            </div>
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
                                    {product.bulletPoints.split(',').map((bp, idx) => (
                                        <li key={idx}>{bp}</li>
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
                            <button className='detail-page-review-sec-title' onClick={() => setReviewPreview(!reviewPreview)}>
                                <p>REVIEWS</p>
                                {!reviewPreview && (
                                    <div className='review-section-title-rating'>
                                        <p className='review-title-review-count'>({reviews.length})</p>
                                        <StarRatings
                                            rating={reviews.length > 0 ? avgRating(reviews) : 0}
                                            starDimension="17px"
                                            starSpacing="0px"
                                            starRatedColor='black'
                                        />
                                    </div>
                                )}
                                <p className='review-section-unfold-sign'>{reviewPreview ? '-' : '+'}</p>
                            </button>
                            {reviewPreview && <ReviewPreview reviews={reviews} avgRating={avgRating} setShowReviews={setShowReviews} />}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetailPage;
