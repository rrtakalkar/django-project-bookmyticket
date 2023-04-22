import axios from "axios"
import { getCountryByLink } from "../country/Country.Api";

const setCountryName = async (states) => {
    states.map((state,i) => (
        getCountryByLink(state.country)
            .then(country => {
                state.country_name=country.name;
                return state;
            })
            .catch(err => console.log(err))        
    ))
};

export const getStates = async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/v1/states/', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
        }
    });
    await setCountryName(response.data.results);
    return response.data;
};



export const getStateByLink = async (url) => {
    let response = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
        }
    });
    return response.data;
};
