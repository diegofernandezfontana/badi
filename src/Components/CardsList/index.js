import React, {Fragment} from "react";
import PropTypes from "prop-types";

import Card from "../Card";

import { CardsContainer ,LoadMoreText, TextWrapper } from "./styles";

const CardsList = props => {
  const {cards, onHandleLoadMore} = props;

  const renderCards = () => {
    return cards.map(recipie => {
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

  const renderLoadMore = () => {
    if(cards.length){
      return <LoadMoreText onClick={onHandleLoadMore}> Click me to load more... </LoadMoreText>
    }

    return null;
  }


  return (
    <Fragment>
      <CardsContainer>
        {renderCards()}
      </CardsContainer>
      <TextWrapper>
        {renderLoadMore()}
      </TextWrapper>
    </Fragment>
  );
};

CardsList.propTypes = {
  cards: PropTypes.array,
  onHandleLoadMore: PropTypes.func,
};

export default CardsList;