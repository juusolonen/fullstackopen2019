import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'
import Filter from './components/Filter'
import Result from './components/Result'

function App() {
  const [ filter, setFilter ] = useState('')
  const [ countries, setCountries ] = useState([])
  const [ found, setFound ] = useState(null)
  const [ weather, setWeather ] = useState(null)
 
  useEffect(()=> {
    Axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])
  useEffect(()=> {
    Axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_NOT_SECRET_CODE}&query=${found}`)
    .then((response) => {
        setWeather(response.data)
    })
  }, [])
  

  return (
    <div >
      <Filter filter={filter} setFilter={setFilter} countries={countries} found={found} setFound={setFound}/>
      <Result found={found} setFound={setFound} filter={filter} setFilter={setFilter} weather={weather} setWeather={setWeather} />
    </div>
  );
}

export default App;
