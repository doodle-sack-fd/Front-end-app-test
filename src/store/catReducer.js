const defaultState = {
    cats: [],
    isFetching: true,
}

const ADD_CATS = "ADD_CATS"
const SET_IS_FETCHING = "SET_IS_FETCHING"
export const catReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CATS:
            return { ...state, cats: [...state.cats, ...action.payload], isFetching: false }
        case SET_IS_FETCHING:
            return { ...state, isFetching: action.payload }
        default:
            return state
    }
}

export const addCatsAction = (payload) => ({ type: ADD_CATS, payload })
export const setIsFetching = (payload) => ({ type: ADD_CATS, payload })