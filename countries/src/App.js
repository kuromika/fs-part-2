import { useState,useEffect } from 'react';
import { Countries } from './components/Countries';
import { getAllCountries } from './services/Countries';

function App() {

  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const filteredCountries = countries.filter((country) => search && country.name.common.toLowerCase().includes(search.toLowerCase()));
  
  useEffect(() => {
    getAllCountries().then((response) => {
      setCountries(response.data);
    })
  }, [])

  const updateSearch = (value) => {
    setSearch(value);
  }

  return (
    <div className="App">
      <Countries search={search} updateSearch={updateSearch} countries={filteredCountries}></Countries>
      
    </div>
  );
}

export default App;
