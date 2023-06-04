import { useState } from 'react';
import { CountryInfo } from './CountryInfo';

export const ControlledCountry = ({ country }) => {

  const [display, setDisplay] = useState(false);

  return (
    <div>
      {!display?
        <p>{country.name.common}
          <button onClick={() => setDisplay(!display)}>{`${display? "hide":"show"}`}</button>
        </p> : 
        <CountryInfo country={country}></CountryInfo>
        }
    </div>
  )
}
