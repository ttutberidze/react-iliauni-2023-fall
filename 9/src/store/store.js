import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { counterReducer } from './reducers/counterReducer';
import { postReducer } from './reducers/postReducer';
import {thunk} from 'redux-thunk';

const reducers = combineReducers({
    counter: counterReducer,
    post: postReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));