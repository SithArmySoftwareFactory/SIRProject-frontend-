import {API_URL} from "../constants/Constants";
import axios from "axios";


export const apiGetIncident = (index) => {
    if (index > 0) {
        return axios.get(API_URL + "incident" + {index})
    } else {
        return axios.get(API_URL + "incident")
    }

}

export const apiPostIncident = (data) => {
    return axios.post(API_URL + "incident", data)
}

export const apiPatchIncident = (index, data) =>{
    return axios.patch(API_URL + "incident" + {index}, data)
}

export const apiDeleteIncident = (index) =>{
    return axios.delete(API_URL + "incident" + {index})
}