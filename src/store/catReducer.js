const defaultState = {
    cats: [],
    isFetching: true,
    isLiked: [],
    isCatLiked: false
}

const ADD_CATS_FETCH = "ADD_CATS"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const REMOVE_CAT = "REMOVE_CAT"
const CAT_ADD_LIKE = "CAT_ADD_LIKE"
const CAT_REMOVE_LIKE = "CAT_REMOVE_LIKE"
const IS_CAT_LIKED = "IS_CAT_LIKED"

export const catReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CATS_FETCH:
            return { ...state, cats: [...state.cats, ...action.payload]}
        case SET_IS_FETCHING:
            return { ...state, isFetching: action.payload }
        case REMOVE_CAT:
            return { ...state, cats: state.cats.filter(cat => cat.id !== action.payload) }
        case CAT_ADD_LIKE:
            return {
                ...state,
                isLiked: [...state.isLiked, action.payload]
            }
        case CAT_REMOVE_LIKE: 
            return {
                ...state, isLiked: state.isLiked.filter(like => like !== action.payload)
            }
        case IS_CAT_LIKED: 
            return { ...state, isCatLiked: action.payload }
        default:
            return state
    }
}

export const addCatsAction = (payload) => ({ type: ADD_CATS_FETCH, payload })
export const setIsFetching = (payload) => ({ type: SET_IS_FETCHING, payload })
export const removeCatAction = (payload) => ({ type: REMOVE_CAT, payload })
export const isLikedAction = (payload) => ({ type: CAT_ADD_LIKE, payload })
export const unLikedAction = (payload) => ({ type: CAT_REMOVE_LIKE, payload })
export const isCatLikedAction = (payload) => ({ type: IS_CAT_LIKED, payload })