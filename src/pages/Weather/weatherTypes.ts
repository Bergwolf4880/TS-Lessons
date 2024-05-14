export interface WeatherData {
  temp: string;
  icon: string;
  cityName: string;
}

export interface WeatherErrorData{
  code: string,
  message: string
}