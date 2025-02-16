import Logo from '../Logo';
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  background-color: #fcfcfc;
  /* padding: 0 1rem; */
  display: flex;
  justify-content: center;
  /* justify-content: space-around; */
  /* align-items: center; */
`

function Header() {
  return (
    <HeaderContainer>
      <Link to='/' >
        <Logo />
      </Link>
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer>
  );
}

export default Header;
