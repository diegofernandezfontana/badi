import React from "react";
import PropTypes from "prop-types";

import Label from "../Label";
import {
  Wrapper,
  ImageWrapper,
  CardImage,
  Title,
  IngredientsParagraph,
  LinkTo
} from "./styles";

const Card = props => {
  const { href, ingredients, thumbnail, title } = props;

  const renderLabel = () => {
    if (ingredients.indexOf("milk") > 0 || ingredients.indexOf("cheese") > 0) {
      return <Label />;
    }
    return null;
  };

  return (
    <Wrapper data-testid="card-recipie">
      <LinkTo href={href} target="_blank" data-testid="card-anchor">
        <ImageWrapper>
          <CardImage src={thumbnail} data-testid="card-image" />
        </ImageWrapper>
        <Title data-testid="card-title">{title}</Title>
        <IngredientsParagraph>{ingredients}</IngredientsParagraph>
        {renderLabel()}
      </LinkTo>
    </Wrapper>
  );
};

Card.propTypes = {
  href: PropTypes.string,
  thumbnail: PropTypes.string,
  ingredients: PropTypes.string,
  title: PropTypes.string
};

export default Card;
