import {API_URL} from "../constants/Constants";
import axios from "axios";

export const apiGetIncident = async (index, token) => {
    let localToken = localStorage.getItem('access_token');

    if (index > 0) {
        return axios.get(API_URL + "incident/" + index)
    } else if(localToken.length > 20) {

    return axios.get(API_URL + "incident", {
        headers: {
            'Authorization': `Bearer ${localToken}`
        }
    })
} else {
        return axios.get(API_URL + "incident", {
            headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

}

export const apiPostIncident = async (data) => {
    return axios.post(API_URL + "incident", data)
}
export const apiLogin = async (data) => {
    return axios.post(API_URL + "login", data)
}
export const apiPostIncidentCommand = async (data) => {
    return axios.post(API_URL + "send", data)
}

export const apiPatchIncident =  (index, data) => {
    let token = localStorage.getItem('access_token');
    return axios.patch(API_URL + "incident/" + 1,
        data,
    { headers: {
            'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'

        }
        }

    )
}

export const apiDeleteIncident = async (index) => {
    return axios.delete(API_URL + "incident/" + index)
}