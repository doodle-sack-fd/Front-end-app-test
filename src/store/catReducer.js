const defaultState = {
    cats: []
}

const ADD_CATS = "ADD_CATS"
export const catReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CATS:
            return { ...state, cats: [...state.cats, ...action.payload] }
        default:
            return state
    }
}

export const addCatsAction = (payload) => ({ type: ADD_CATS, payload })