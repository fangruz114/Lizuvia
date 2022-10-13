const LOAD_CARTS = 'carts/LOAD_CARTS';
const ADD_CARTS = 'carts/ADD_CARTS';
const REMOVE_CARTS = 'carts/REMOVE_CARTS';
const RESET_CARTS = 'carts/RESET_CARTS';

const loadCarts = (payload) => ({
    type: LOAD_CARTS,
    payload,
});

const addCarts = (payload) => ({
    type: ADD_CARTS,
    payload,
});

const removeCarts = (id) => ({
    type: REMOVE_CARTS,
    id,
})

const resetCarts = () => ({
    type: RESET_CARTS,
});

// thunks
export const getCarts = () => async dispatch => {
    const response = await fetch('/api/cart');
    const data = await response.json();
    if (response.ok) {
        await dispatch(loadCarts(data.cart));
        return null;
    } else if (response.status < 500) {
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
}

export const addToCart = (id, newItem) => async dispatch => {
    const { quantity } = newItem;
    const response = await fetch(`/api/cart/products/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            quantity,
        }),
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(addCarts(data));
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

export const updateCart = (id, item) => async dispatch => {
    const { quantity } = item;
    const response = await fetch(`/api/cart/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            quantity,
        }),
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(addCarts(data));
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

export const deleteCart = (id) => async dispatch => {
    const response = await fetch(`/api/cart/${id}`, {
        method: "DELETE",
    });
    if (response.ok) {
        await dispatch(removeCarts(id));
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

export const emptyCart = () => async dispatch => {
    const response = await fetch(`/api/cart`, {
        method: "DELETE",
    });
    if (response.ok) {
        await dispatch(resetCarts());
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

const initialState = {};

const cartReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_CARTS:
            newState = {};
            action.payload.map(cart => newState[cart.id] = cart)
            return newState;
        case ADD_CARTS:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        case REMOVE_CARTS:
            newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        case RESET_CARTS:
            newState = {};
            return newState;
        default:
            return state;
    }
}

export default cartReducer;
