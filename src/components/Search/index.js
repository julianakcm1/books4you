import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getBooks } from "../../services/books";
import { postFavorite } from "../../services/favorites";

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

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    width: 200px;
  }

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
  }
`

function Search() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks()
  }, [])
  
  async function fetchBooks() {
    const APIBooks = await getBooks();
    setBooks(APIBooks);
  }

  async function insertFavorite(id) {
    await postFavorite(id)
    alert(`Book id:${id} was inserted!`)
}

  return (
    <SearchContainer>
      <Title>Do you already know where to start?</Title>
      <Subtitle>Find your book on the virtual bookshelf</Subtitle>
      <Input 
        placeholder="Write your next reading"
        onBlur={event => {
          const typedText = event.target.value;
          const searchResult = books.filter(book => book.name?.includes(typedText));
          setSearchedBooks(searchResult);
        }}
      />
      {
        searchedBooks.map( book => (
          <Result onClick={() => insertFavorite(book.id)}>
            <img src={book.src} alt="" />
            <p>{book.name}</p>

          </Result>
        ) )
      }
    </SearchContainer>
  )
}

export default Search;