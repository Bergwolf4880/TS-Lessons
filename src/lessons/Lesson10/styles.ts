import styled from '@emotion/styled';

interface DataContainerStyled {
  isHideBlock: boolean;
}

export const Lesson10Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, #9796f0, #fbc7d4);
  gap: 10px;
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content:space-around;
`;
export const DataContainer = styled.div<DataContainerStyled>`
  display: ${({ isHideBlock }) => (isHideBlock ? 'none' : 'flex')};
  flex-direction: column;
  height: auto;
  max-height: 700px;
  background: linear-gradient(to bottom, rgb(255, 255, 255, 0.3), transparent);
  backdrop-filter: blur(10px);
  padding: 5px;
  overflow-y: auto;
  border-radius: 4px;
`;
export const FactEntry = styled.div`
  padding: 10px;
  border: 1px;
  width: 100%;
  height: auto;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400px;
  font-size: 24px;
`;
export const SpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 50px;
  width: 150px;
  
`;
