const defaultState = {
    cats: [],
    isFetching: true,
    isLiked: [],
}

const ADD_CATS = "ADD_CATS"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const REMOVE_CAT = "REMOVE_CAT"
const CAT_LIKED = "CAT_LIKED"
const REMOVE_LIKED = "REMOVE_LIKED"
export const catReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CATS:
            return { ...state, cats: [...state.cats, ...action.payload], isFetching: false }
        case SET_IS_FETCHING:
            return { ...state, isFetching: action.payload }
        case REMOVE_CAT:
            return { ...state, cats: state.cats.filter(cat => cat.id !== action.payload) }
        case CAT_LIKED:
            return {
                ...state,
                isLiked: [...state.isLiked, action.payload]
            }
        case REMOVE_LIKED:
            return {
                ...state, isLiked: state.isLiked.filter(like => like !== action.payload)
            }
        default:
            return state
    }
}

export const addCatsAction = (payload) => ({ type: ADD_CATS, payload })
export const setIsFetching = (payload) => ({ type: ADD_CATS, payload })
export const removeCatAction = (payload) => ({ type: REMOVE_CAT, payload })
export const isLikedAction = (payload) => ({ type: CAT_LIKED, payload })
export const unLikedAction = (payload) => ({ type: REMOVE_LIKED, payload })