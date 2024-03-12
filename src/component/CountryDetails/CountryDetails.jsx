import CountryData from "./CountryData";

const CountryDetails = ({ country, handelSetVisitedCountries, handelVisitedFlags }) => {
    return (
        <div>
            <h3>Country Details</h3>
            <hr />
            <CountryData>
            country={country}
            handelSetVisitedCountries={handelSetVisitedCountries}
            handelVisitedFlags={handelVisitedFlags}
            </CountryData>
        </div>
        

    );
};

export default CountryDetails;