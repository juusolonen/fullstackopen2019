import React from 'react'
import Axios from 'axios'

const Weather = ({found, weather, setWeather}) => {

//tämä hakee liikaa uudestaan koska renderöityy aina kun tulos päivittyy, kai?


    if(weather) {
        return (<div><b>temperature: </b><p>{weather.current.temperature}</p>
                   <img src={weather.current.weather_icons[0]}/>
                   <b>wind:</b><p>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>    </div>)
    } else {
        return null
    }

    
}



export default Weather