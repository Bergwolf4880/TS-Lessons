import styled from '@emotion/styled';
import { WeatherBack } from 'assets';

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-image: url(${WeatherBack});
  gap: 20px;
`;
export const WeatherHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  border: solid 1px white;
  background-color: rgba(18, 45, 77, 0.6);
  backdrop-filter: blur(10px);
`;
export const HeadingText = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: 24px;
  opacity: 1;
  color: white;
`;
export const ContentContainer = styled.div`
  display: flex;
`;
export const InputContainer = styled.div`
  display: flex;
  width: 750px;
  gap: 10px;

`;
export const SpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 50px;
  width: 150px;
  
`;