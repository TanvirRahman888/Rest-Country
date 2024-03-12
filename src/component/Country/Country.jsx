import { useState } from "react";
import "./Country.css"
import CountryDetails from "../CountryDetails/CountryDetails";
const Country = ({country, handelSetVisitedCountries, handelVisitedFlags}) => {
    // console.log(country);
    const {altSpellings,cca2, coatOfArms,area}=country;
    const [countrySortName,countryName]=altSpellings;

    const [visited, setVisited]=useState(false)
    const handelVisited=()=>{
        setVisited(!visited)
    }
//    console.log(handelSetVisitedCountries);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{color: visited? "blue" :"green"}}>Country Name :{countryName} </h2> 
            <h3>Population : </h3> 
            <img src={coatOfArms.png} style={{width:'300px', height:"300px"}} alt="flagPng" />
            <h3>Area : {area}</h3> 
            <h3>cca2 : {cca2}</h3> 
            <button onClick={()=>handelSetVisitedCountries(country)}>Mark as Visited</button><br />
            <button onClick={()=>handelVisitedFlags(coatOfArms.png)}>Add Flag</button>
            <br />
            <button onClick={handelVisited}>Visited</button>

            {visited ? <p>I have visited this country</p>: <p>I want to visit</p>}
            <hr />
            <CountryDetails>
                country={country}
                handelSetVisitedCountries={handelSetVisitedCountries}
                handelVisitedFlags={handelVisitedFlags}
            </CountryDetails>
        </div>
    );
};

export default Country;