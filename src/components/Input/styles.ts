import styled from '@emotion/styled';

export const InputComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  height: fit-content;
`;

export const InputComponentLabel = styled.label`
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  height: 30px;
  color: #adba4e;
`;

export const InputComponent = styled.input`
  width: 100%;
  height: auto;
  padding: 12px;
  outline: none;
  border: 2px solid #adba4e;
  border-radius: 4px;
  background-color: slategray;
  font-size: 24px;
  color: #adba4e;

  &::placeholder {
    color: #adba4e;
    opacity: 0.8;
  }
`;
