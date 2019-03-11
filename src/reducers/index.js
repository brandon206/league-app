import { combineReducers } from 'redux';
import championReducer from './champion_reducer';
import itemReducer from './item_reducer';

const rootReducer = combineReducers ({
    champion: championReducer,
    item: itemReducer
});

export default rootReducer;