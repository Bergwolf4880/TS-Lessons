import { ClientLink, ClientsContainer } from './styles';

function Clients() {
  return (
    <ClientsContainer>
      <>Clients</>
      <ClientLink
        to="apple">
        Apple
          </ClientLink>
          <ClientLink
        to="microsoft" >
        Microsoft
          </ClientLink>
          <ClientLink
        to="google">
       Google
      </ClientLink>
    </ClientsContainer>
  );
}
export default Clients;
