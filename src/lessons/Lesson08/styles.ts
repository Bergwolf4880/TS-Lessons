import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonPropsStyled {
  mainButton?: boolean;
}
//Создание с помошью CSS 
const commonBoxStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
`;

export const Lesson08Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 30px;
`;

export const BoxComponent = styled.div`
  ${commonBoxStyles};
  background: #f1f53f;
`;

export const InfoBoxComponent = styled.div`
  ${commonBoxStyles};
  background: #8531F5;
`;

export const ButtonComponent = styled.button<ButtonPropsStyled>`
  width: 250px;
  height: 70px;
  border: none;
  /* background: #BDF576; */
  background: ${({ mainButton }) => (mainButton ? '#BDF576' : '#30F541')};
  border-radius: 6px;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
`;
