import styled from '@emotion/styled'
import { iconImageStyled } from './types'

export const WeatherInfoComponent = styled.div`
display: flex;
flex-direction: column;
height: 400px;
width: 750px;
border-radius: 5px;
background-color: rgb(255, 255, 255, 0.6);

`
export const WeatherIcon = styled.img<iconImageStyled>`

`
export const CityName = styled.div`

`