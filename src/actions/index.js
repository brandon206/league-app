import axios from 'axios';
import types from './types';

// export async function getChampionData(){
//     const resp = await axios.get("https://api.pandascore.co/lol/champions?filter[name]=Brand&token=9hBdfanuM4g5NGYky5NJAxrKFSNqbg2G1Xr2V52TaTdmFgHm0x0");
//     return {
//         type: types.GET_CHAMP_DATA,
//         payload: resp
//     }
// }

export function getChampionData() {
    return async function(dispatch){
            const response = await axios.get("/api/champion.php");

            console.log('Response:', response);
        
            dispatch({
                type: types.GET_CHAMP_DATA,
                payload: response
            });
            // console.log('response: ', response);

        // } catch(err){
        //     dispatch({
        //         type: types.ERROR,
        //         error: "Error getting champion data"
        //     });
        // }
    // } 
    }
}