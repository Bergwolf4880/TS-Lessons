import { StyledNavLink, ClientsContainer, TextFielsStyled } from '../styles';

function Google() {
  return (
    <ClientsContainer>
      <TextFielsStyled>
        Google изначально назывался “BackRub”, но из-за ошибки при выписке чека
        одного из первых инвесторов, название было изменено на "Google".
        Интересно, что в 2004 году, в момент выхода на IPO, практически все
        сотрудники Google стали миллионерами.
      </TextFielsStyled>
      <StyledNavLink to="/clients">BACK</StyledNavLink>
    </ClientsContainer>
  );
}
export default Google;
