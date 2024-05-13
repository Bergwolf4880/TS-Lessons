import Input from 'components/Input/Input';
import { API_KEY } from './keys';
import {
  ContentContainer,
  HeadingText,
  InputContainer,
  WeatherHeader,
  WeatherWrapper,
} from './styles';
import Button from 'components/Button/Button';
import { useState } from 'react';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';



function Weather() {
  const [location, setCity] = useState('');

  const serverWork = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const body = await response.json();

      console.log('body', body.name);
    } catch (error) {
      console.error('An error occurred');
    }
  };
  // serverWork();

  const buttonHandler = () => {
    serverWork();
  };

  return (
    <WeatherWrapper>
      <WeatherHeader>
        <HeadingText>Weather App</HeadingText>
      </WeatherHeader>
      <InputContainer>
        <Input onInputChange={event => setCity(event.target.value)} />
        <Button name="Search" onButtonClick={buttonHandler} />
      </InputContainer>
      <ContentContainer>
        <WeatherInfo iconProps={''} cityName={body.name} ></WeatherInfo>
      </ContentContainer>
    </WeatherWrapper>
  );
}

// cityName={name}
export default Weather;
