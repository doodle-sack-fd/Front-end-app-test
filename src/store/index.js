import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { catReducer } from './catReducer';

const rootReducer = combineReducers({
    cats: catReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
