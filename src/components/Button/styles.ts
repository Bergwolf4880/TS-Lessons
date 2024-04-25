import styled from '@emotion/styled';

type buttonType = 'button' | 'submit' | 'reset' | undefined;

export interface ButtonProps {
  name?: string;
  type?: buttonType;
  disabled?: boolean;
  onButtonClick?: () => void;
}


export const ButtonComponent = styled.button<ButtonProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 20px;
  background: ${({disabled}) => (disabled ? '#DBDED5': '#95DE5D')};
  color: white;
  font-size: 16px;
  cursor: pointer;
  justify-content: center;
`

