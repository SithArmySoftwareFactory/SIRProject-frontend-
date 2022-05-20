import {API_URL} from "../constants/Constants";
import axios from "axios";


export const apiGetIncident = async (index) => {
    if (index > 0) {
        return axios.get(API_URL + "incident/" + {index})
    } else {
        return axios.get(API_URL + "incident")
    }

}

export const apiPostIncident = async (data) => {
    return axios.post(API_URL + "incident", data)
}

export const apiPatchIncident = async (index, data) =>{
    return axios.patch(API_URL + "incident/" + {index}, data)
}

export const apiDeleteIncident = async (index) =>{
    return axios.delete(API_URL + "incident/" + {index})
}