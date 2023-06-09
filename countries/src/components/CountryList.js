import { ControlledCountry } from "./ControlledCountry";
import { CountryInfo } from "./CountryInfo";

export const CountryList = ({ countries }) => {

  if (!countries.length) {
    return null;
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }

  if (countries.length === 1) {
    return <CountryInfo country={countries[0]}></CountryInfo> 
  }

  return (
    <div>
      {countries.map((country) => {
        return <ControlledCountry key={country.name.common + country.area} country={country}></ControlledCountry>
      })}
    </div>
  )
}