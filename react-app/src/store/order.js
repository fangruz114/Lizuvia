const LOAD_ORDERS = 'orders/LOAD_ORDERS';
const LOAD_ORDER_DETAILS = 'orders/LOAD_ORDER_DETAILS';
const CREATE_ORDER = 'orders/CREATE_ORDER';
const UPDATE_ORDER = 'orders/UPDATE_ORDER';
const DELETE_ITEM = 'orders/DELETE_ITEM';
const DELETE_ORDER = 'orders/DELETE_ORDER';

const loadOrders = (payload) => ({
    type: LOAD_ORDERS,
    payload,
});

const loadOrderDetails = (payload) => ({
    type: LOAD_ORDER_DETAILS,
    payload,
})

const createOrder = (payload) => ({
    type: CREATE_ORDER,
    payload,
});

const updateOrder = (payload) => ({
    type: UPDATE_ORDER,
    payload,
});

const deleteItem = (id) => ({
    type: DELETE_ITEM,
    id,
});

const deleteOrder = (id) => ({
    type: DELETE_ORDER,
    id,
});

//thunks

export const getOrders = () => async dispatch => {
    const response = await fetch('/api/orders');
    const data = await response.json();
    if (response.ok) {
        await dispatch(loadOrders(data.orders));
        return null;
    } else if (response.status < 500) {
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

export const getOrderDetails = (id) => async dispatch => {
    const response = await fetch(`/api/orders/${id}`);
    const data = await response.json();
    if (response.ok) {
        await dispatch(loadOrderDetails(data.orderProducts));
        return null;
    } else if (response.status < 500) {
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
}

export const addOrder = () => async dispatch => {
    const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(createOrder(data));
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

export const editOrder = (id, item) => async dispatch => {
    const { quantity } = item;
    const response = await fetch(`/api/orders/products/${id}`, {
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
        await dispatch(updateOrder(data));
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

export const removeItem = (id) => async dispatch => {
    const response = await fetch(`/api/orders/products/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        await dispatch(deleteItem(id));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
}

export const cancelOrder = (id) => async dispatch => {
    const response = await fetch(`/api/orders/${id}`, {
        method: "DELETE",
    });
    if (response.ok) {
        await dispatch(deleteOrder(id));
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

const orderReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ORDERS:
            newState = { orders: {}, orderProducts: {} };
            action.payload.map(order => newState.orders[order.id] = order)
            return newState;
        case LOAD_ORDER_DETAILS:
            newState = { orders: { ...state.orders }, orderProducts: {} };
            action.payload.map(item => state.orderProducts[item.id] = item);
            return newState;
        case CREATE_ORDER:
            newState = { orders: { ...state.orders }, orderProducts: {} };
            newState.orders[action.payload.id] = action.payload;
            return newState;
        case UPDATE_ORDER:
            newState = { orders: { ...state.orders }, orderProducts: { ...state.orderProducts } };
            newState.orderProducts[action.payload.id] = action.payload;
            return newState;
        case DELETE_ITEM:
            newState = { orders: { ...state.orders }, orderProducts: { ...state.orderProducts } };
            delete newState.orderProducts[action.id]
            return newState;
        case DELETE_ORDER:
            newState = { orders: { ...state.orders }, orderProducts: {} };
            delete newState.orders[action.id];
            return newState;
        default:
            return state;
    }
}

export default orderReducer;
