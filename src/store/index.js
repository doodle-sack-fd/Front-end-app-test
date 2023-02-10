import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { catReducer } from './catReducer'
import { factsReducer } from './factsReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    cats: catReducer,
    facts: factsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
