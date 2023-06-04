import { CountryList } from "./CountryList";

export const Countries = ({ search, updateSearch, countries }) => {

  const handleInput = (event) => {
    updateSearch(event.target.value);
  }
  
  return (
    <div>
      <p>find countries <input value={search} onChange={handleInput}></input></p>
      <CountryList countries={countries}></CountryList>
    </div>
  )

}