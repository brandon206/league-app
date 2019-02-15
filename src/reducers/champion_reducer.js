import types from '../actions/types';

const DEFAULT_STATE = {
    champion_info: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_CHAMP_DATA:
            console.log('champion reducer: ', action);
            return state;
        default:
            return state;
    }
}