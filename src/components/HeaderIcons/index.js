import styled from 'styled-components';
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';

const iconsAux = [perfil, sacola];

const Icon = styled.li`
  margin-right: 3rem;
  width: 0.5rem;
`

const Icons = styled.ul`
  display: flex;
  align-items: center;
  /* gap: 0.5rem; */
`

function HeaderIcons() {
  return (
    <Icons>
      {iconsAux.map((icon) => (
        <Icon>
          <img src={icon}></img>
        </Icon>
      ))}
    </Icons>
  );
}

export default HeaderIcons;
