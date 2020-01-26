import React from "react";

import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import useFetchData from "../Services/useFetchData";

import {
  MainBackground,
  Container,
  CardsContainer,
  SearchBarContainer
} from "./styles";

const Main = props => {
  const { data, setFetchParams } = useFetchData("");

  const handleSubmit = fieldValues => {
    if (fieldValues.length > 3) {
      const urlParams = generateUrl(fieldValues);
      setFetchParams(`?i=${urlParams}`);
    }
  };

  const generateUrl = ingredients => {
    const ingredientsWithNoSpaces = ingredients.replace(/\s+/g, "+");
    const encodedUrl = ingredientsWithNoSpaces.replace(/,/g, "%2C");

    return encodedUrl;
  };

  const renderCards = () => {
    return data.map(recipie => {
      const { href, ingredients, thumbnail, title } = recipie;

      return (
        <Card
          href={href}
          ingredients={ingredients}
          thumbnail={thumbnail}
          title={title}
          key={href}
        />
      );
    });
  };

  return (
    <MainBackground>
      <Container>
        <SearchBarContainer>
          <SearchBar onHandleSubmit={handleSubmit} />
        </SearchBarContainer>
        <CardsContainer>{renderCards()}</CardsContainer>
      </Container>
    </MainBackground>
  );
};

export default Main;