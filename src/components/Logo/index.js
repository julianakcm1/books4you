import styled from 'styled-components';
import logo from '../../images/logo.svg';

const LogoContainer = styled.div`
  display: flex;
  font-size: 2rem; // 30px
`

const LogoImage = styled.img`
  margin-right: 10px;
`

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="logo" />
      <p>
        <b>Books</b>4You
      </p>
    </LogoContainer>
  );
}

export default Logo;
