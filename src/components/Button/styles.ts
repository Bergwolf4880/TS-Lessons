import styled from '@emotion/styled';

interface ButtonComponentProps {
  disabled: boolean
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: auto;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 20px;
  background: ${({ disabled }) => (disabled ? '#DBDED5' :
  'rgb(255, 255, 255, 0.3)')};
  backdrop-filter: blur(10px);
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  cursor: pointer;
  justify-content: center;
  opacity: 0.4;
  transition: ease-out 0.2s ;
  &:hover{
    opacity: 1;
    transition: ease-in 0.2s ;
  }
`

