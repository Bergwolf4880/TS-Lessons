import Input from 'components/Input/Input'
import { API_KEY } from './keys'
import { ContentContainer, HeadingText, InputContainer, WeatherHeader, WeatherWrapper } from './styles'
import Button from 'components/Button/Button'
import { useState } from 'react'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'


function Weather() {
  
    const [location, setCity] = useState('');
    
    const serverWork = async () => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
        const body = await response.json();
        console.log('body',body)
    }
    // serverWork();




  
  
    http://openweathermap.org/img/w/${body.weather[0].icon}.png
  
    const buttonHandler = () => {
      serverWork()
  }
    
    return (
    <WeatherWrapper>
      <WeatherHeader>
        <HeadingText>Weather App</HeadingText>
          </WeatherHeader>
          <InputContainer>
          <Input onInputChange={(event) => setCity(event.target.value)}/>
          <Button name='Search' onButtonClick={buttonHandler}/>
            </InputContainer>
            <ContentContainer>
                <WeatherInfo ></WeatherInfo>
            </ContentContainer>
    </WeatherWrapper>
  );
}

export default Weather;
