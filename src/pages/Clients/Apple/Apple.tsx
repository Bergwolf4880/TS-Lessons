import { StyledNavLink, ClientsContainer, TextFielsStyled } from '../styles';

function Apple() {

    return (
        <ClientsContainer>
        <TextFielsStyled>
                Apple изначально была основана не двумя, а тремя людьми:
                Стивом Джобсом, Стивом Возняком и Рональдом Уэйном. Оригинальный компьютер Apple I был продан за 666,66 доллара.
        </TextFielsStyled>
        <StyledNavLink to="/clients">BACK</StyledNavLink>
      </ClientsContainer>
    )

}
export default Apple