import { WeatherIcon, WeatherInfoComponent } from './styles';
import { WeatherInfoTypes } from './types';

interface WeatherIconProps {
  url: string;
}

function WeatherInfo({ iconProps }: WeatherInfoTypes) {
  const iconUrl = `http://openweathermap.org/img/w/${iconProps}.png`;

  return (
    <WeatherInfoComponent>
      <WeatherIcon url={iconUrl} /> 
    </WeatherInfoComponent>
  );
}

export default WeatherInfo;
//weatherData.weather[0].icon