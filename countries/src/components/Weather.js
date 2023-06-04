
export const Weather = ({ weather }) => {
  
  return (
    <div>
      <p>Main: {weather.weather[0].main}</p>
      <p>Temperature: {weather.main.temp}</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}></img>
      <p>Wind: {weather.wind.speed}</p>
    </div>
  )
}