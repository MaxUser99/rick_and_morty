import { combineReducers, createStore } from 'redux';
import charactersReducer from 'store/charactersReducer/charactersReducer';

const rootReducer = combineReducers({
    characters: charactersReducer
});

export default createStore(rootReducer);
