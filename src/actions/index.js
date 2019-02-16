import axios from 'axios';
import types from './types';

export function getChampionData() {
    return async function(dispatch){
        const response = await axios.get("/api/champion.php", {
            params: {
                token: "9hBdfanuM4g5NGYky5NJAxrKFSNqbg2G1Xr2V52TaTdmFgHm0x0",
                
            }
        })
        
        dispatch({
            type: types.GET_CHAMP_DATA,
            payload: response
        });
    }
}

