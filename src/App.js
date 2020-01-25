import React, { Fragment } from "react";

import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar";
import useFetchData from "./Services/useFetchData";
import { MainBackground } from "./styles";
import GlobalStyle from "./Styles/globalStyles";

function App() {
  const { data, setFetchParams } = useFetchData("");

  const generateUrl = ingredients => {
    const ingredientsWithNoSpaces = ingredients.replace(/\s+/g, "+");
    const encodedUrl = ingredientsWithNoSpaces.replace(/,/g, "%2C");

    return encodedUrl;
  };

  const handleSubmit = fieldValues => {
    if (fieldValues.length > 3) {
      const urlParams = generateUrl(fieldValues);
      setFetchParams(`?i=${urlParams}`);
    }
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

  const renderSearchBar = () => {
    return <SearchBar onHandleSubmit={handleSubmit} />;
  };

  return (
    <Fragment>
      <GlobalStyle />
      <MainBackground>
        {renderSearchBar()}
        {renderCards()}
      </MainBackground>
    </Fragment>
  );
}

export default App;
