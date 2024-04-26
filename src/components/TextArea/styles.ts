import styled from '@emotion/styled';

export interface TextAreaPropsStyled {
  label?: string;
  name?: string;
  placeholder?: string;
}

export const TextArea = styled.div<TextAreaPropsStyled>`
  width: 250px;
  height: 50px;
  background: aquamarine;
  font-size: 15px;
  align-items: center;
  border-radius: 3px;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
