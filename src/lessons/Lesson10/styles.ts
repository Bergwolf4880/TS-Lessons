import styled from '@emotion/styled';

interface DataContainerStyled {
  isVisible: boolean;
}
interface FactsEntryType {
  key: string;
}

export const Lesson10Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100rem;
  background-image: linear-gradient(to right, #9796f0, #fbc7d4);
  gap: 10px;
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`;
export const DataContainer = styled.div<DataContainerStyled>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  height: auto;
  max-height: 1200px;
  background: linear-gradient(to bottom, rgb(255, 255, 255, 0.3), transparent);
  backdrop-filter: blur(10px);
  padding: 5px;
  overflow-y: auto;
  border-radius: 4px;
`;
export const FactEntry = styled.div<FactsEntryType>`
  padding: 15px;
  border: 1px;
  width: 100%;
  height: auto;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400px;
  font-size: 24px;
 
`;


