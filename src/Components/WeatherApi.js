import React, { useState, useEffect } from "react";
import './weatherapi.css';
import WeatherCart from "./WeatherCart";
import axios from "axios";


const Temp = () => {

    const [click, setClick] = useState(true)
    const [city, setCity] = useState("Jaunpur");
    const [tempInfo, setTempInfo] = useState({});
    const [nme, setNme] = useState({});
    const [detail, setDetail] = useState({});
    const [system, setSystem] = useState({});
    const [weathermd, setWeatherMood] = useState({})
    const [spd, setSpeed] = useState({})
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4a1f8a61b74546825af1e0be106e797b`;
    

    const getWeatherInfo = () => {
        axios.get(baseURL).then((response) => {

            setDetail(response.data.main)
            setNme(response.data)
            setSystem(response.data.sys)
            setWeatherMood(response.data.weather[0])
            setSpeed(response.data.wind)
        }).catch(error => {
            <p>Server Not Loaded</p>
        })
        const { temp, humidity, pressure } = detail;
        const { name } = nme
        const { country, sunset } = system
        const { main: weathermood } = weathermd;
        const { speed } = spd
        const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset,
        };
        setTempInfo(myNewWeatherInfo);
    }
    useEffect(() => {
        getWeatherInfo();
    }, [click])
    
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder="search..."
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <button
                        className="searchButton"
                        type="button"
                        onClick={() => setClick(!click)}

                    >
                        Click here 
                    </button>
                </div>
            </div>

            {/* our temp card   */}
            <WeatherCart {...tempInfo} />


        </>
    );
};

export default Temp;
