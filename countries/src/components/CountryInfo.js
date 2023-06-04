
export const CountryInfo = ({ country }) => {

  const languages = [];

  Object.values(country.languages).forEach((language) => {
    languages.push(language);
  })

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
    </div>
  )
}