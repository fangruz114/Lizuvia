import { useDispatch } from 'react-redux';
import { removeReview } from '../../store/review';

function DeleteReviewModal({ onClose, id }) {
    const dispatch = useDispatch();

    const deleteReview = async (e) => {
        e.preventDefault();
        await dispatch(removeReview(id))
            .then(() => onClose())
    };

    return (
        <div className='cancel-order-confirmation'>
            <div className='cancel-order-confirm-title'>
                <p>Delete Your Review</p>
                <button className='cancel-order-confirm-close-btn' onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <p className='cancel-order-confirm-message'>Are you sure you want to delete your review? This CANNOT be undone.</p>
            <div className='cancel-order-confirm-btns'>
                <button className='cancel-order-cancel-btn' onClick={onClose}>CANCEL</button>
                <button className='cancel-order-confirm-btn' onClick={deleteReview}>DELETE</button>
            </div>
        </div>
    )
}

export default DeleteReviewModal;
