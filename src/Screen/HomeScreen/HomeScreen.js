import { FlexColumn, InnerSection } from "../../Global.Styles";
import React,{useState} from'react'
import {
  CardsContainer,
  Description,
  HeroSection,
  InnerHeroSection,
  LoadMore,
  MoviesTitle,
  Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import {  fetchSliderMore } from "../../redux/Movies/movies.actions";
function HomeScreen(props) {
          const [page,SetPage ] = useState(1)

     const movies = useSelector(state=>state.movies)
  const dispatch = useDispatch();


     React.useEffect(() => {
    dispatch(fetchSliderMore(page));

   }, [dispatch,page]);



     return movies.isLoading ?<p>Looding .. </p>:  (
          <FlexColumn>

      <HeroSection
        img={`http://image.tmdb.org/t/p/w1280/${movies.movies[0].backdrop_path}`}
      >
        <InnerHeroSection>
          <Title>{movies.movies[0].title}</Title>
          <Description>
                         {movies.movies[0].overview}
          </Description>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Popular Movies</MoviesTitle>
                    <CardsContainer>
                         {movies.movies.map(x => (
                               <Card
            key={x.id}
            id={x.id + ""}
            name={x.title}
            img={
              `https://image.tmdb.org/t/p/w500/${x.poster_path}`
            }
          />

                         ))}

        </CardsContainer>
                    <LoadMore isLoading={false} onClick={() => {
                         SetPage(page+1)
                         dispatch(fetchSliderMore(page));
                    }
                    }>Load more...</LoadMore>
      </InnerSection>


          </FlexColumn>
  );
}

export default HomeScreen;
