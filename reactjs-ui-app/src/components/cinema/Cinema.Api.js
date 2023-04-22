import axios from "axios"
import { getCityByLink } from "../city/City.Api";

export const getCinemas = async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/v1/cinemas/', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
        }
    });

    
    let cinemasWithCityName = response.data.results.map(async cinema => {
        let city = await getCityByLink(cinema.city);
        cinema.city_name=city.name;
        return cinema;
    });
        
    return await Promise.all(cinemasWithCityName);
}