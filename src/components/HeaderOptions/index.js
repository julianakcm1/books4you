import { Link } from 'react-router-dom';
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
  /* min-width: 7.5rem; // 120px */
  font-size: 1rem; // 16px
  /* padding: 0.5rem; // 0 5px */
  
  &:hover {
    font-weight: 500;
  }
  `

const Options = styled.ul`
  gap: 2rem;
  display: flex;
  `

const textOptions = ['CATEGORIES', 'FAVORITES', 'SHELF'];

function HeaderOptions() {
  return (
    <Options>
      {textOptions.map((text, index) => (
        <Link key={index} to={`/${text.toLowerCase()}`}><Option><p>{text}</p></Option></Link>
      ))}
    </Options>
  );
}

export default HeaderOptions;
