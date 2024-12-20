import styled from 'styled-components';

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const Option = styled.li`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  /* gap: 1rem; */
  /* list-style: none; */
  height: 100%;
  cursor: pointer;
  min-width: 4rem;
  font-size: 1rem;
  padding: 0.5rem;
`

const Options = styled.ul`
  display: flex;
`

function HeaderOptions() {
  return (
    <Options>
      {textOptions.map((text) => (
        <Option>
          <p>{text}</p>
        </Option>
      ))}
    </Options>
  );
}

export default HeaderOptions;
