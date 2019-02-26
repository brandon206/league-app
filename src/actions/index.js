import axios from 'axios';
import types from './types';

export function getChampionData() {
    return async function(dispatch){
        let storage = [];
        for(let i = 1; i  < 4; i++){
            const response = await axios.get("/api/champion.php", {
                params: {
                    token: "9hBdfanuM4g5NGYky5NJAxrKFSNqbg2G1Xr2V52TaTdmFgHm0x0",
                    page: i,
                    sort: "name"
                }
            });
    
            storage.push(response.data);

        }
        console.log("THIS IS THE RESPONSE: ",storage);

        let newStorage = [];
        for(let x = 0; x < storage.length; x++){
            newStorage = newStorage.concat(storage[x]);
        }

        dispatch({
            type: types.GET_CHAMP_DATA,
            payload: newStorage
        });
    }
}

