import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handelSetVisitedCountries = (country) => {
        console.log("Add this country as visited");
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const handelVisitedFlags = flag => {
        // console.log("Handel Visited Flags");
        const newVisitedFlags = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlags)
    }


    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <div>
                <h3>Visited Countries : {visitedCountries.length}</h3>
                {/* Visited Countries */}
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca2}>{country.altSpellings[1]}</li>)
                    }
                </ol>
            </div>
            <div className="flag-container">
                {
                    visitedFlag.map((flag,idx)=> <img key={idx} src={flag} style={{width:'150px', height:"150px"}} ></img>)
                }

            </div>

            {/* Display Countries */}
            <div className="countries-contaciner">
                {
                    countries.map(country => <Country
                        key={country.cca2}
                        country={country}
                        handelSetVisitedCountries={handelSetVisitedCountries}
                        handelVisitedFlags={handelVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;