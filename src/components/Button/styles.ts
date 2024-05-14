import styled from "@emotion/styled";

interface ButtonComponentProps {
  disabled: boolean
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: auto;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 10px;
  /* background-color: #1f27f5; */
  background: ${({ disabled }) => (disabled ? "grey" : "#239FEC")};
  color: white;
  font-size: 16px;
  cursor: pointer;
`