import styled from '@emotion/styled';

export const EmployeeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 100px;
  padding: 40px ;
  height: auto;
  border: none;  
  border-radius: 10px 60px;
  background: rgb(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
`;
export const CheckboxContainer = styled.div`
display: flex;
align-items: center;
gap: 40px;
`
export const CheckboxLabel = styled.label`
font-family: Arial, Helvetica, sans-serif;
font-weight: 400;
font-size: 24px;
color: #243f2b;
`
export const Checkbox = styled.input`
width: 25px;
height: 25px;
`