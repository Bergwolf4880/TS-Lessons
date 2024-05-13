import styled from '@emotion/styled';

interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 30%;
  height: 100%;
  padding: 20px;
  background: limegreen;
  /* background: ${({ disabled }) => (disabled ? '#DBDED5' :
  'rgb(255, 255, 255, 0.3)')}; */
  backdrop-filter: blur(10px);
  font-size: 24px;
  font-weight: 400;
  backdrop-filter: blur(10px);
  border-radius: 5px;
  border: none;
  outline: none;
  background: ${({ disabled }) =>
        disabled ? '#DBDED5' : 'rgb(255, 255, 255, 0.6)'};
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  justify-content: center;
  opacity: 0.4;
  transition: ease-out 0.2s;
  &:hover {
    opacity: 1;
    transition: ease-in 0.2s;
  }
`;
