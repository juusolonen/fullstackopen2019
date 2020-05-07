import React from 'react'

const Found = ({found, setFound, filter, setFilter}) => {

    const changeFilter = (country, i) => {
        console.log(country, i)
    }

    if(found) {

        if(found.length > 10){
                return <p>Too many matches, specify another filter</p>
            } 

        else if (found.length <10 && found.length > 1){
                return(
                        found.map((country, i) => 
                        <div key={i} ><p style={{width: "50%",display:"inline"}} key={country.name}>{country.name}</p><button onClick={(() => {setFound([found[i]]); setFilter(found[i].name); console.log(found)})} key={country.name + i}>show</button></div>)
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
            </div>
                )
            }
    }

    return null

}

export default Found