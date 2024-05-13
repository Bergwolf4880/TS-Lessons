import styled from '@emotion/styled';
import { ButtonType } from './types'

export const MessageContainer = styled.div`
  display: flex;

  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  border: solid 1px black;
  height: 100%;
  background-color: slategray;
`;
export const DataItem = styled.div`
  display: flex;
  flex: 1;
  font-size: 30px;
  color: black;
  padding: 10px;
`;

export const DelButton = styled.button<ButtonType>`
  outline: none;
  border: none;
  height:35px;
  width: 35px;
  background-color: transparent;
  color: limegreen;
  font-weight: 700;
`;
