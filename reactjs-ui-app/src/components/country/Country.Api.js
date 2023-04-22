import axios from "axios"

export const getCountries = async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/v1/countries/', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
        }
    });
    return response.data;
};

export const getCountry = async (id) => {
    let response = await axios.get('http://127.0.0.1:8000/api/v1/countries/'+id, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
        }
    });
    return response.data;
};

export const getCountryByLink = async (url) => {
    let response = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
        }
    });
    return response.data;
};