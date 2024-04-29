import styled from '@emotion/styled';
interface ResultBlockStyledProps{
    isShowResults : boolean
}

export const Homework09Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
  width: 300px;
`;

export const ResultsBlock = styled.div<ResultBlockStyledProps>`
  display: ${({isShowResults})=>isShowResults?'flex' : 'none'};
  gap: 30px;
  padding: 20px;
`;

export const ResultWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background: #94B3EB;
`;
