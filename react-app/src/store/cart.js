const LOAD_CARTS = 'carts/LOAD_CARTS';
const ADD_CARTS = 'carts/ADD_CARTS';
const REMOVE_CARTS = 'carts/REMOVE_CARTS';

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
