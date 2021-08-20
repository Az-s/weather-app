import React, {useState} from 'react';
import {fetchWeather} from './api/fetchWeather';
import './App.css';
import {Button} from 'semantic-ui-react';

const App = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
        }
    };

    // const refresh = () => {
    // };

    return (
        <div className="main-container">
            <h1 className='title'>Weather in your city</h1>
            <input type="text"
                   className='search'
                   placeholder='Search city'
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   onKeyPress={search}
            />
            {weather.main && (
                <div className='city'>
                    <h2 className='city-name'>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className='city-temp'>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                        <p className='feels-like'>Feels like: <span
                            className='feels-like-deg'>{Math.round(weather.main.feels_like)}<sup>&deg;C</sup></span></p>
                    </div>
                    <div className="info">
                        <img className="city-icon"
                             src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                             alt={weather.weather[0].description}/>
                        <p>{weather.weather[0].description}</p>
                    </div>
                    <Button className="button" inverted color='white' circular icon='refresh' />
                </div>
            )}
        </div>
    );
}

export default App;
