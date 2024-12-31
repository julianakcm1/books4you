import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`

const Title = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

function Search() {
  const [typedText, settypedText] = useState('');

  return (
    <SearchContainer>
      <Title>Do you already know where to start?</Title>
      <Subtitle>Find your book on the virtual bookshelf</Subtitle>
      <Input 
        placeholder="Write your next reading"
        onBlur={event => settypedText(event.target.value)}
      />
    </SearchContainer>
  )
}

export default Search;