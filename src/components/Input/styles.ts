import styled from '@emotion/styled';

export const InputComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 70%;
  height: fit-content;
`;

export const InputComponentLabel = styled.label`
  font-size: 24px;
  
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  height: 100%;
  color: #243f2b;
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 100%;
  padding: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: rgb(255, 255, 255, 0.5);
  font-size: 24px;
  color: black;
  
  &::placeholder {
    color: #243f2b;
    opacity: 0.8;
  }
`;

export const ErrorMessage = styled.p`
color:#e11452;
font-size: 16px;
height:18px;
@keyframes blink {
  50% { opacity: 0; }
}
animation: blink 1s infinite;

`

