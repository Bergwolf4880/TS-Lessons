import styled from '@emotion/styled';

interface ButtonComponentProps {
  disabled: boolean
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 20px;
  background: ${({disabled}) => (disabled ? '#DBDED5': '#adba4e')};
  color: 2f2c2f;
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  cursor: pointer;
  justify-content: center;
`

