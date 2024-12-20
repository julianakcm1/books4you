import Logo from '../Logo';
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #fcfcfc;
  /* padding: 0 1rem; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer>
  );
}

export default Header;
