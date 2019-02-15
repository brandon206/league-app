import axios from 'axios';
import types from './types';

export function getChampionData(){
    return async function (dispatch){
        try {
            const response = await axios.get("https://api.pandascore.co/lol/champions?filter[name]=Brand&token=9hBdfanuM4g5NGYky5NJAxrKFSNqbg2G1Xr2V52TaTdmFgHm0x0");
        }
    }
}