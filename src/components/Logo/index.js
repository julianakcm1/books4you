import styled from 'styled-components';
import logo from '../../images/logo.svg';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
`

const LogoImage = styled.img`
  margin-right: 10px;
  width: 2rem;
  height: 2rem;
`

function Logo() {
  return (
    <LogoContainer>
      <img src={logo} alt="logo" className="logo-img" />
      <p>
        <b>Books</b>4You
      </p>
    </LogoContainer>
  );
}

export default Logo;