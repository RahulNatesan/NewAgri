// src/assets/WeatherReport.js

import React, { useEffect, useState } from 'react';
import './styles.css'; // Ensure this path is correct
import weatherVideo from './weather.mp4'; // Ensure this path is correct

const API_KEY = '6a173adde35f78487a42908af69bdf1d'; // Replace with your OpenWeatherMap API key

const WeatherReport = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('Network response was not okay');
            }
            const data = await response.json();
            setWeatherData(data);
            setError('');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setError('Error fetching weather data. Please check the city name.');
        }
    };

    const fetchWeatherByLocation = async (lat, lon) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('Network response was not okay');
            }
            const data = await response.json();
            setWeatherData(data);
            setError('');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setError('Error fetching weather data for your location.');
        }
    };

    const handleFetchWeather = () => {
        if (city) {
            fetchWeatherData(city);
        } else {
            alert('Please enter a city name.');
        }
    };

    const handleFetchLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchWeatherByLocation(lat, lon);
            }, () => {
                alert('Unable to retrieve your location. Please check your browser settings.');
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    const updateUI = (data) => {
        if (!data) return;

        const locationRow = document.getElementById('locationRow');
        locationRow.children[0].textContent = data.name; // City
        locationRow.children[1].textContent = data.sys.country; // Country
        locationRow.children[2].textContent = data.sys.country; // Region (using country for simplicity)
        locationRow.children[3].textContent = data.coord.lat; // Latitude
        locationRow.children[4].textContent = data.coord.lon; // Longitude

        const weatherTableBody = document.getElementById('weatherTableBody');
        weatherTableBody.innerHTML = `
            <tr>
                <td>${data.main.temp}</td>
                <td>${data.weather[0].description}</td>
                <td>${data.wind.speed}</td>
                <td>${data.wind.deg}</td>
                <td>${data.main.pressure}</td>
                <td>${data.rain ? data.rain['1h'] : 0}</td>
                <td>${data.main.humidity}</td>
            </tr>
        `;
    };

    useEffect(() => {
        if (weatherData) {
            updateUI(weatherData);
        }
    }, [weatherData]);

    return (
        <div className="weather-report">
            <video className="background-video" autoPlay loop muted>
                <source src={weatherVideo} type="weather/mp4" />
                <p>Your browser does not support the video tag. Please update your browser or try a different one.</p>
            </video>
            <div className="content">
                <h1>Weather Report</h1>
                <div className="input-container">
                    <input
                        type="text"
                        id="cityInput"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button id="fetchWeatherButton" onClick={handleFetchWeather}>Fetch Weather</button>
                    <button id="fetchLocationButton" onClick={handleFetchLocation}>Use Current Location</button>
                </div>
                {error && <p className="error">{error}</p>}
                <table>
                    <caption>Location Data</caption>
                    <tr>
                        <th>City</th>
                        <th>Region</th>
                        <th>Country</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                    <tr id="locationRow">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <table>
                    <caption>Current Weather</caption>
                    <thead>
                        <tr>
                            <th>Temperature (°C)</th>
                            <th>Weather Description</th>
                            <th>Wind Speed (km/h)</th>
                            <th>Wind Degree</th>
                            <th>Pressure (mb)</th>
                            <th>Precipitation (mm)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody id="weatherTableBody">
                        <tr>
                            <td colSpan="7">Loading...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WeatherReport;