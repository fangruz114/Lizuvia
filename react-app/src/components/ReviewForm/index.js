import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addReview, editReview } from '../../store/review';
import StarRatings from 'react-star-ratings';
import './ReviewForm.css';

function ReviewForm({ onClose, review, product }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [errors, setErrors] = useState([]);
    const [rating, setRating] = useState(review ? Number(review.rating) : 0);
    const [title, setTitle] = useState(review ? review.title : '');
    const [content, setContent] = useState(review ? review.content : '');

    const submitReview = async (e) => {
        e.preventDefault();

        const newReview = {
            rating,
            title: title.trim(),
            content: content.trim(),
        };

        let data;
        if (review) {
            data = await dispatch(editReview(review.id, newReview));
        } else if (product) {
            data = await dispatch(addReview(newReview, product.productId));
        }

        if (data) {
            setErrors(data);
        } else {
            setErrors([]);
            onClose();
            return history.push(`/reviews`)
        }
    };

    return (
        <div className='review-form-wrapper'>
            <div className='cart-confirmation-modal-close'>
                <button className='cart-confirmation-close-btn' onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className='review-form-main'>
                <div className='review-form-left-product-info'>
                    <img src={review ? review.product.images[0].url : product.imageUrl} alt='review-form-product-img' />
                    <p>{review ? review.product.name : product.productName}</p>
                </div>
                <div className='review-form-right-review-content'>
                    <p className='review-form-title'>My Review for {review ? review.product.name : product.productName}</p>
                    <p className='review-form-notes'>Required fields are marked with *</p>
                    <form onSubmit={submitReview}>
                        <div>
                            {errors.map((error, ind) => (
                                <div key={ind} className="form-errors">{error}</div>
                            ))}
                        </div>
                        <div className='review-form-element'>
                            <label htmlFor='rating'>Overall Rating:*</label>
                            <StarRatings
                                rating={rating}
                                starDimension="34px"
                                starSpacing="0px"
                                starRatedColor='black'
                                changeRating={setRating}
                                name='rating'
                            />
                        </div>
                        <div className='review-form-element'>
                            <label htmlFor='title'>Review Title:*</label>
                            <input
                                name="title"
                                type='text'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                maxLength='45'
                            />
                        </div>
                        <div className='review-form-element'>
                            <label htmlFor='content'>Review:*</label>
                            <textarea
                                rows='6'
                                cols='74'
                                value={content}
                                maxLength='2000'
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <button className='review-form-btn' type="submit">Post Review</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReviewForm;
