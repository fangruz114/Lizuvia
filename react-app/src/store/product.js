const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS';
const LOAD_CURRENT_PRODUCT = 'products/LOAD_CURRENT_PRODUCT';
const CREATE_PRODUCT = 'products/CREATE_PRODUCT';
const DELETE_PRODUCT = 'products/DELETE_PRODUCT';

const loadProducts = (payload) => ({
    type: LOAD_PRODUCTS,
    payload,
});

const loadCurrentProduct = (payload) => ({
    type: LOAD_CURRENT_PRODUCT,
    payload,
});

const createProduct = (payload) => ({
    type: CREATE_PRODUCT,
    payload,
});

const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    id,
});

// thunks
export const getProducts = () => async dispatch => {
    const res = await fetch("/api/products");
    const data = await res.json();
    if (res.ok) {
        await dispatch(loadProducts(data.products));
    }
    return data;
}

export const getOneProduct = (id) => async dispatch => {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    if (res.ok) {
        await dispatch(loadCurrentProduct(data));
    }
    return data;
}

export const addProduct = (newProduct) => async dispatch => {
    const { name, category, description, price, url1, url2, url3, url4, url5 } = newProduct
    const response = await fetch('/api/products', {
        method: "POST",
        body: JSON.stringify({
            name,
            category,
            description,
            price,
            url1,
            url2,
            url3,
            url4,
            url5,
        })
    });
    const data = await response.json();
    if (response.ok) {
        await dispatch(createProduct(data));
    }
    return data;
}

export const editProduct = (id, product) => async dispatch => {
    const { name, category, description, price, url1 } = product
    const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            name,
            category,
            description,
            price,
            url1,
        })
    });

    const data = await response.json();
    if (response.ok) {
        await dispatch(createProduct(data));
    }
    return data;
}

export const removeProduct = (id) => async dispatch => {
    const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE'
    });
    const data = response.json();
    if (response.ok) {
        await dispatch(deleteProduct(id))
    }
    return data;
}

const initialState = {};

const productReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_PRODUCTS:
            newState = Object.assign({});
            action.payload.map(product => newState[product.id] = product);
        case LOAD_CURRENT_PRODUCT:
            newState = object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        case CREATE_PRODUCT:
            newState = object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_PRODUCT:
            newState = object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default productReducer;
