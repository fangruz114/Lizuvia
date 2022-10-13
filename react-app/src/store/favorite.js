const LOAD_FAVORS = 'favors/LOAD_FAVORS';
const ADD_FAVOR = 'favors/ADD_FAVOR';
const DELETE_FAVOR = 'favors/DELETE_FAVOR';
const RESET_FAVOR = 'favors/RESET_FAVOR';

const loadFavors = (payload) => ({
    type: LOAD_FAVORS,
    payload,
});

const addFavors = (payload) => ({
    type: ADD_FAVOR,
    payload,
});

const removeFavor = (id) => ({
    type: DELETE_FAVOR,
    id,
})

export const resetFavors = () => ({
    type: RESET_FAVOR,
});

// thunk
export const getFavors = () => async dispatch => {
    const response = await fetch('/api/favorites');
    const data = await response.json();
    if (response.ok) {
        await dispatch(loadFavors(data.favorites));
        return null;
    } else if (response.status < 500) {
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
}

export const updateFavor = (id) => async dispatch => {
    const response = await fetch(`/api/favorites/products/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });
    if (response.ok) {
        const data = await response.json();
        if (data.id) {
            await dispatch(removeFavor(data.id));
            return null;
        } else {
            await dispatch(addFavors(data.favor));
            return null;
        }
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

const favorReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_FAVORS:
            newState = {};
            action.payload.map(favor => newState[favor.id] = favor)
            return newState;
        case ADD_FAVOR:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_FAVOR:
            newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        case RESET_FAVOR:
            newState = {};
            return newState;
        default:
            return state;
    }
}

export default favorReducer;
