import StarRatings from 'react-star-ratings';
import './AllReviewModal.css';

function AllReviewModal({ reviews, avgRating, onClose }) {

    const convertDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const yr = date.getFullYear();
        return `${month} ${day}, ${yr}`;
    }

    return (
        <div className='all-review-modal'>
            <div className='cart-confirmation-modal-close'>
                <button className='cart-confirmation-close-btn' onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className='all-review-modal-content-wrapper'>
                <p className='all-review-modal-title'>Reviews</p>
                <div className='review-modal-content'>
                    <div className='review-modal-top'>
                        <div className='review-menu-top-rating'>
                            <p>{reviews.length > 0 ? avgRating(reviews).toFixed(1) : 0.0}</p>
                            <StarRatings
                                rating={reviews.length > 0 ? avgRating(reviews) : 0}
                                starDimension="17px"
                                starSpacing="0px"
                                starRatedColor='black'
                            />
                        </div>
                        <p className='review-menu-review-count'>Average rating based on <span>{reviews.length} Reviews</span></p>
                        <div className='review-menu-verified'>
                            <i className="fa-solid fa-circle-check"></i>
                            <p>Verified Purchase</p>
                        </div>
                    </div>
                    <div className='review-menu-review-list'>
                        {reviews.length > 0 && (
                            <>
                                {reviews.map(review => (
                                    <div className='review-menu-ind-review'>
                                        <p className='review-item-title'>{review.title}</p>
                                        <StarRatings
                                            rating={Number(review.rating)}
                                            starDimension="17px"
                                            starSpacing="0px"
                                            starRatedColor='black'
                                        />
                                        <p className='review-item-content'>{review.content}</p>
                                        <div className='review-item-user'>
                                            <p className='review-item-user-name'>{review.user.firstName}</p>
                                            <p>{convertDate(review.createdAt)}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllReviewModal;
