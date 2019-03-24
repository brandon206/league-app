import types from '../actions/types';

const DEFAULT_STATE = {
    item_info: {},
    items: []
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_ITEM_DATA:
            console.log('ITEM reducer: ', action.payload);
            return { ...state, items: action.payload };
        default:
            return state;
    }
}