import React, {useEffect} from 'react'
import Axios from 'axios'

const Weather = ({found, weather, setWeather}) => {
    useEffect(()=> {
        Axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_NOT_SECRET_CODE}&query=${found}`)
        .then((response) => {
            if(response.data != weather) {
              setWeather(response.data)
            }
        })
      }, [])



    if(weather) {
        return (<div><b>temperature: </b><p>{weather.current.temperature}</p>
                   <img src={weather.current.weather_icons[0]}/>
                   <b>wind:</b><p>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>    </div>)
    } else {
        return null
    }

    
}



export default Weather