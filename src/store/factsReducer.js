const defaultState = {
    facts: []
}

const ADD_FACTS = "ADD_FACTS"
export const factsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_FACTS:
            return { ...state, facts: [...state.facts, ...action.payload] }
        default:
            return state
    }
}

export const addFactsAction = (payload) => ({ type: ADD_FACTS, payload })