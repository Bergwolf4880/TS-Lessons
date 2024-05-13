import Input from 'components/Input/Input';
import { API_KEY } from './keys';
import {
  ContentContainer,
  HeadingText,
  InputContainer,
  SpinnerContainer,
  WeatherHeader,
  WeatherWrapper,
} from './styles';
import Button from 'components/Button/Button';
import { useState } from 'react';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import { WeatherData } from './weatherTypes';
import Spinner from 'components/Spinner/Spinner';

function Weather() {
  const [location, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [isFactsLoaded, setIsFactsLoaded] = useState<boolean>(false);

  const serverWork = async () => {
    try {
      setIsFactsLoaded(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&&units=metric`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const body = await response.json();
      setWeatherData(body);

      console.log('body', body.name);
    } catch (error) {
      console.error('An error occurred');
    } finally {
      setIsFactsLoaded(false);
    }
  };

  console.log('weatherData', weatherData);
  const buttonHandler = () => {
    serverWork();
  };

  return (
    <WeatherWrapper>
      <WeatherHeader>
        <HeadingText>Weather App</HeadingText>
      </WeatherHeader>
      <SpinnerContainer>{isFactsLoaded ? <Spinner /> : ''}</SpinnerContainer>
      <InputContainer>
        <Input onInputChange={event => setCity(event.target.value)} />
        <Button name="Search" onButtonClick={buttonHandler} />
      </InputContainer>

      <ContentContainer>
        {weatherData && (
          <WeatherInfo
            cityName={weatherData.name}
            temperature={weatherData.main.temp} 
            iconUrl={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
          />
        )}
      </ContentContainer>
    </WeatherWrapper>
  );
}

export default Weather;
