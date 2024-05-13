import { TextData, WeatherIcon, WeatherInfoComponent } from './styles';
import { WeatherInfoProps } from './types';

function WeatherInfo({
  cityName,
  temperature,
  iconUrl,
  humidity,
  windSpeed,
}: WeatherInfoProps) {
  let tempRound = Math.round(temperature);

  return (
    <WeatherInfoComponent>
      
      <TextData>{tempRound}°C</TextData>
      <TextData>{cityName}</TextData>
      <TextData>{windSpeed}</TextData>
      <TextData>{humidity}</TextData>
      <WeatherIcon bgUrl={iconUrl} />
    </WeatherInfoComponent>
  );
}

export default WeatherInfo;
//weatherData.weather[0].icon
