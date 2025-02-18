import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavorites } from '../services/favorites';
import bookImg from '../images/book.png';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

const ResultContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Result = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Title = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`

function Favorites() {
  const [favorites, setFavorites] = useState([])

  async function fetchFavorites() {
    const APIfavorites = await getFavorites()
    setFavorites(APIfavorites)
  }

  useEffect( () => {
    fetchFavorites([])
  }, [])

  return (
    <AppContainer>
      <Title>Here are your favorite books:</Title>
      <ResultContainer>
        {
          favorites.length !== 0 ? favorites.map(favorite => (
            <Result>
              <p>{favorite.nome}</p>
              <img src={bookImg}/>
            </Result>
          )) : null
        }
      </ResultContainer>
    </AppContainer>
  );
}

export default Favorites;
