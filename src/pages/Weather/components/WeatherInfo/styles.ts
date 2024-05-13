import styled from '@emotion/styled';
import { WeatherInfoProps } from './types';

export const WeatherInfoComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 750px;
  border-radius: 5px;
    background-color: rgb(255, 255, 255, 0.6);
`;
export const WeatherIcon = styled.div<{ bgUrl: string }>`
  background-image: url(${props => props.bgUrl});
  height: 100px;
  width: 100px;
`;


export const TextData = styled.h1`
padding: 30px;
font-family: Arial, Helvetica, sans-serif;
font-size: 35px;
`
