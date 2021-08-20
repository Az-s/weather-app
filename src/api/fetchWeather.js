import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_Key = '716812047d6d9913f88dce08feb16a7c';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL,{
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    });
    return data;
}

// export default fetchWeather;