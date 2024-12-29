import styled from 'styled-components';

const Option = styled.li`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  text-align: center;
  /* gap: 1rem; */
  /* list-style: none; */
  height: 100%;
  cursor: pointer;
  min-width: 7.5rem; // 120px
  font-size: 1rem; // 16px
  padding: 0.5rem; // 0 5px
  `

const Options = styled.ul`
  display: flex;
  `

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

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
