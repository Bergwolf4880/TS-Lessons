import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: auto;
`;
export const ClientLink = styled(Link)`
 text-decoration: none;
 font-size: 20px;
 color: #1f27f5;
`;
