import React from 'react'
import Weather from './Weather'

const Found = ({found, setFound, filter, setFilter, weather, setWeather}) => {



    if(found) {

        if(found.length > 10){
                return <p>Too many matches, specify another filter</p>
            } 

        else if (found.length <10 && found.length > 1){
                return(
                        found.map((country, i) => 
                        <div key={i} ><p style={{width: "50%",display:"inline"}} key={country.name}>{country.name}</p><button onClick={(() => {setFound([found[i]]); setFilter(found[i].name);})} key={country.name + i}>show</button></div>)
                    )
            } 

        else if (found.length === 1) {
            
                return (
                    <div>
                    <div>
                    <h1>{found[0].name}</h1>
                    <p>capital {found[0].capital}</p>
                    <p>population {found[0].population}</p>
                    </div>
                <div>
                    <h2>languages</h2>
                        <ul>
                        {found[0].languages.map(language => <li key={language.name}>{language.name}</li>)}
                        </ul>          
                </div>
                <div>
                    <img src={found[0].flag} width="50px" alt="flag"/>
                </div>
                <div>
                    <h2>weather in {found[0].capital}</h2>
                    <Weather found={found[0].name} weather={weather} setWeather={setWeather} />
                </div>
            </div>
                )
            }
    }

    return null

}

export default Found