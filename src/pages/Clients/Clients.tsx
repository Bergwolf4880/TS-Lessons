import { StyledNavLink, ClientsContainer } from './styles';

function Clients() {
  return (
    <ClientsContainer>
      <>Clients</>
      <StyledNavLink
        to="apple">
        Apple
          </StyledNavLink>
          <StyledNavLink
        to="microsoft" >
        Microsoft
          </StyledNavLink>
          <StyledNavLink
        to="google">
       Google
      </StyledNavLink>
    </ClientsContainer>
  );
}
export default Clients;
