import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Microsoft from './Microsoft/MIcrosoft';
import Google from './Google/Google';
import Apple from './Apple/Apple';
import { StyledNavLink, ClientsContainer } from './styles';

function Clients() {
  return (
    <ClientsContainer>
      <>Clients</>
      <StyledNavLink
        to="/clients/apple">
        Apple
          </StyledNavLink>
          <StyledNavLink
        to="/clients/microsoft" >
        Microsoft
          </StyledNavLink>
          <StyledNavLink
        to="/clients/google">
       Google
      </StyledNavLink>
    </ClientsContainer>
  );
}
export default Clients;
