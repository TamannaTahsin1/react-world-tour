import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] =useState([]);
    
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    // event handler for country
    const handleVisitedCountry = country =>{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }
    // event handler for flags
    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }
    // remove item from an array in a state

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited country */}
            <div>
            <h5>Visited COuntries: {visitedCountries.length}</h5>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>
                    {country.name.common}
                    </li>)
                }
            </ul>
            {/* display flags */}
            <div className="flag-container"> 
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            </div>
            {/* display countries */}
        <div className="country-container">
        {
                countries.map(country => <Country key={country.cca3}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags ={handleVisitedFlags}
                country={country}></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;