import { CityName, WeatherIcon, WeatherInfoComponent } from './styles';
import { WeatherInfoProps, iconImageStyled } from './types';


function WeatherInfo({ cityName, temperature, iconUrl }: WeatherInfoProps) {
  
  let tempRound = Math.round(temperature)
  
  return (
    <WeatherInfoComponent>
      <CityName>{cityName}</CityName>
      <p>Temperature: {tempRound}°C</p>
      <WeatherIcon bgUrl={iconUrl} />
    </WeatherInfoComponent>
  );
}

export default WeatherInfo;
//weatherData.weather[0].icon