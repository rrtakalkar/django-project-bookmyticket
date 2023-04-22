import axios from "axios"
import { getCountryByLink } from "../country/Country.Api";
import { getStateByLink } from "../state/State.Api";

export const getCities = async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/v1/cities/', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
        }
    });

    let citiesWithStateName = response.data.results.map(async city => {
        let state = await getStateByLink(city.state);
        city.state_name=state.name;

        let country = await getCountryByLink(state.country);
        city.country_name = country.name;
        return city;
    });
        
    return await Promise.all(citiesWithStateName);
};

export const getCityByLink = async (url) => {
    let response = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
        }
    });
    return response.data;
};
