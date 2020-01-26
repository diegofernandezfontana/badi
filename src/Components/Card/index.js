import React from "react";

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
      <LinkTo href={href} target="_blank">
        <ImageWrapper>
          <CardImage src={thumbnail} />
        </ImageWrapper>
        <Title>{title}</Title>
        <IngredientsParagraph>{ingredients}</IngredientsParagraph>
        {renderLabel()}
      </LinkTo>
    </Wrapper>
  );
};

export default Card;
