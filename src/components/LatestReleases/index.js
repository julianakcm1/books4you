import styled from "styled-components";
import { books } from "./latestReleasesData";
import { Title } from "../Title";
import RecommendationCard from "../RecommendationCard";
import bookImage from "../../images/book2.png";

const LatestReleasesContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`

function LatestReleases() {
  return(
    <LatestReleasesContainer>
      <Title 
        color='#EB9B00'
        fontSize='2rem'
      >
        Latest Releases
      </Title>
      <NewBooksContainer>
        { books.map( book => (
          <img src={book.src} alt="" />
        ) )}
      </NewBooksContainer>
      <RecommendationCard 
        title='You might be interested in'
        subheading='Angular 11'
        description='Building an application integrated with the Google platform.'
        img={bookImage}
      />
    </LatestReleasesContainer>
  )
}

export default LatestReleases;