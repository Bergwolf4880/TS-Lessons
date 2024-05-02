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
  color: #243f2b;
`;

export const InputComponent = styled.input`
  width: 100%;
  height: auto;
  padding: 12px;
  outline: none;
  border: none;
  border-radius: 5px 20px;
  background-color: #3c5531;
  font-size: 24px;
  color: #adba4e;
  
  &::placeholder {
    color: #243f2b;
    opacity: 0.8;
  }
`;
export const ErrorMessage = styled.p`
color:red;
font-size: 16px;
height:18px;
`

