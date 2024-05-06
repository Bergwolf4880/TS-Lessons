import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: auto;
`;
export const StyledNavLink = styled(NavLink)`
  font-size: 30px;
  text-decoration: none;
  height: auto;
  width: auto;
  margin-left: 50px;
`;
export const TextFielsStyled = styled.div`
  font-size: 28px;
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 50px;
`;
