import Input from 'components/Input/Input';
import { API_KEY } from './keys';
import {
  Header,
  InputButtonWrapper,
  Main,
  WeatherButtonWrapper,
  WeatherForm,
  WeatherWrapper,
} from './styles';
import Button from 'components/Button/Button';
import { ChangeEvent, useState } from 'react';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import { WeatherData, WeatherErrorData } from './weatherTypes';
import Spinner from 'components/Spinner/Spinner';
import WeatherError from './components/WeatherError/WeatherError';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined,
  );
  const [weatherError, setWeatherError] = useState<
    WeatherErrorData | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&&units=metric`;

  const getWeatherInfo = async () => {
    if (city.trim().length === 0) {
      return alert('Enter city name');
    }
    setWeatherData(undefined);
    setWeatherError(undefined);
    setIsLoading(true);

    const response = await fetch(URL);
    const data = await response.json();

    if (response.ok) {
      setIsLoading(false);
      setWeatherData({
        temp: `${data.main.temp}`,
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        cityName: `${data.name}`,
      });
    } else {
      setWeatherError({
        code: data?.cod,
        message: data?.message,
      });
    }
  };

  const onCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <WeatherWrapper>
      <Header>Weather App</Header>
      <Main>
        <WeatherForm>
          <InputButtonWrapper>
            <Input
              placeholder="Enter city name"
              onInputChange={onCityChange}
              value={city}
              name="city"
            />
            <WeatherButtonWrapper>
              <Button name="Search" onButtonClick={getWeatherInfo} />
            </WeatherButtonWrapper>
          </InputButtonWrapper>
          {isLoading && <Spinner />}
          {!!weatherData && (
            <WeatherInfo
              temp={weatherData?.temp}
              icon={weatherData?.icon}
              cityName={weatherData?.cityName}
            />
          )}
          {!!weatherError && <WeatherError error={weatherError} />}
        </WeatherForm>
      </Main>
    </WeatherWrapper>
  );
}

export default Weather;
