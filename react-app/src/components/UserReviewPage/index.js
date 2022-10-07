import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserReviews } from '../../store/review';
import { Modal } from '../../context/Modal';
import StarRatings from 'react-star-ratings';
import DeleteReviewModal from './DeleteReviewModal';
import ReviewForm from '../ReviewForm';
import './UserReviewPage.css';

function UserReviewPage() {
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews);
    const [reviewModal, setReviewModal] = useState(false);
    const [deleteReviewModal, setDeleteReviewModal] = useState(false);

    useEffect(() => {
        dispatch(getUserReviews())
    }, [dispatch])

    return (
        <div className='order-history-wrapper'>
            <div className='order-history-page'>
                <div className='order-history-title'>
                    <h3>Reviews written by you</h3>
                    <p>Please go to your <Link to='/orders'>order detail page</Link> to leave reviews for the products you purchased.</p>
                </div>
                <div className='order-history-order-list'>
                    {reviews && Object.values(reviews).map(review => (
                        <div className="user-reviews-ind">
                            <Link to={`/products/${review.product.id}`}>
                                <img src={review.product.images[0].url} alt='user-review-product-img' />
                            </Link>
                            <div className='user-review-content'>
                                <p className='user-review-ind-title'>{review.title}</p>
                                <StarRatings
                                    rating={Number(review.rating)}
                                    starDimension="17px"
                                    starSpacing="0px"
                                    starRatedColor='black'
                                />
                                <p className='user-review-ind-content'>{review.content}</p>
                            </div>
                            <div className='user-review-ind-btn'>
                                <button onClick={() => setReviewModal(true)}>EDIT</button>
                                {reviewModal && (
                                    <div className='review-form-modal'>
                                        <Modal onClose={() => setReviewModal(false)}>
                                            <ReviewForm onClose={() => setReviewModal(false)} review={review} product={{}} />
                                        </Modal>
                                    </div>
                                )}
                                <button onClick={() => setDeleteReviewModal(true)}>DELETE</button>
                                {deleteReviewModal && (
                                    <div className='delete-product-confirm-modal'>
                                        <Modal onClose={() => setDeleteReviewModal(false)} id={review.id}>
                                            <DeleteReviewModal onClose={() => setDeleteReviewModal(false)} id={review.id} />
                                        </Modal>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserReviewPage;
