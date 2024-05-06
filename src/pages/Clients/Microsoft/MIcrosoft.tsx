import { StyledNavLink, ClientsContainer, TextFielsStyled } from '../styles';

function Microsoft() {
  return (
    <ClientsContainer>
      <TextFielsStyled>
        Microsoft изначально была известна под немного другим именем -
        Micro-Soft, сочетание слов микрокомпьютер и программное обеспечение.
        Интересно, что один из самых популярных продуктов Microsoft, Microsoft
        Office, фактически дебютировал на Mac.
      </TextFielsStyled>
      <StyledNavLink to="/clients">BACK</StyledNavLink>
    </ClientsContainer>
  );
}
export default Microsoft;
