import styled from 'styled-components';
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';

const Icon = styled.li`
  margin-right: 3rem; // 40px
  width: 0.5rem; // 25px
  `

const Icons = styled.ul`
  display: flex;
  align-items: center;
  /* gap: 0.5rem; */
`

  const icons = [perfil, sacola];

function HeaderIcons() {
  return (
    <Icons>
      {icons.map((icon, index) => (
        <Icon key={index}>
          <img src={icon} alt={`Icon ${index}`} />
        </Icon>
      ))}
    </Icons>
  );
}

export default HeaderIcons;
