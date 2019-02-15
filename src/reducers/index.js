import { combineReducers } from 'redux';
import championReducer from './champion_reducer';

const rootReducer = combineReducers ({
    champion: championReducer
});

export default rootReducer;