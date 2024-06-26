import { Link, useNavigate } from 'react-router-dom'
import {
  Footer,
  Header,
  HeaderLogo,
  HeaderLogoContainer,
  LayoutComponent,
  Main,
  NavContainer,
  StyledNavLink,
} from './styles';
import { LayoutProps } from './types';

const setActive = ({ isActive }: any) => ({ textDecoration: isActive ? 'underline' : 'none' })


function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  
  return (
    <LayoutComponent>
      <Header>
        <HeaderLogoContainer onClick={() => navigate('/')}>
          <HeaderLogo />
        </HeaderLogoContainer>
        <NavContainer>
          <StyledNavLink
            to='/'
            style={setActive}>
            Home</StyledNavLink>
          <StyledNavLink
            to='/users'
            style={setActive}>
            Users</StyledNavLink>
          <StyledNavLink
            to='/about'
            style={setActive}>
            About</StyledNavLink>
            <StyledNavLink
            to='/clients'
            style={setActive}>
            Clients</StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogoContainer>
          <HeaderLogo />
        </HeaderLogoContainer>
      </Footer>
    </LayoutComponent>
  );
}
export default Layout;
