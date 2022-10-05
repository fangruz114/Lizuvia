const LOAD_PRODUCT_REVIEW = 'reviews/LOAD_PRODUCT_REVIEW';
const LOAD_USER_REVIEW = 'reviews/LOAD_USER_REVIEW';
const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

const loadProductReviews = (payload) => ({
    type: LOAD_PRODUCT_REVIEW,
    payload,
});

const loadUserReviews = (payload) => ({
    type: LOAD_USER_REVIEW,
    payload,
});

const createReview = (payload) => ({
    type: CREATE_REVIEW,
    payload,
});

const deleteReview = (id) => ({
    type: DELETE_REVIEW,
    id,
});

// thunks
export const getProductReviews = (id) => async dispatch => {
    const res = await fetch(`/api/reviews/products/${id}`);
    const data = await res.json();
    if (res.ok) {
        await dispatch(loadProductReviews(data.reviews));
    }
    return data;
}
