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

export const getUserReviews = () => async dispatch => {
    const res = await fetch(`/api/reviews`);
    const data = await res.json();
    if (res.ok) {
        await dispatch(loadUserReviews(data.reviews));
    }
    return data;
}

export const addReview = (newReview, productId) => async dispatch => {
    const { rating, title, content } = newReview;
    const response = await fetch(`/api/reviews/products/${productId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            rating,
            title,
            content,
        }),
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(createReview(data));
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
}

export const editReview = (id, review) => async dispatch => {
    const { rating, title, content } = review
    const response = await fetch(`/api/reviews/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            rating,
            title,
            content,
        }),
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(createReview(data));
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
}

export const removeReview = (id) => async dispatch => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    });
    const data = response.json();
    if (response.ok) {
        await dispatch(deleteReview(id))
    }
    return data;
}

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_PRODUCT_REVIEW:
            newState = {};
            action.payload.map(review => newState[review.id] = review);
            return newState;
        case LOAD_USER_REVIEW:
            newState = {};
            action.payload.map(review => newState[review.id] = review);
            return newState;
        case CREATE_REVIEW:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_REVIEW:
            newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default reviewReducer;
