import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import charactersReducer from './charactersReducer/charactersReducer';
import apiRequester from 'api/apiRequester';

const rootReducer = combineReducers({
    characters: charactersReducer
});

export default createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(apiRequester))
);
