import { useState, useEffect } from 'react';
import { getWeatherData } from '../services/Weather'
import { Weather } from './Weather';

export const CountryInfo = ({ country }) => {

  const [weather, setWeather] = useState({})

  const languages = [];

  Object.values(country.languages).forEach((language) => {
    languages.push(language);
  })


  useEffect(() => {

    getWeatherData(country.latlng[0], country.latlng[1]).then((response) => {
      setWeather(response.data);
    })

  }, [country.latlng])

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {languages.map((language) => {
          return <li key={country.name.common + language}>{language}</li>
        })}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt}></img>
      {Object.keys(weather).length &&
        <div>
        <h3>Weather in {country.name.common}</h3>
        <Weather weather={weather}></Weather>
      </div>
      }
    </div>
  )
}