import React, { Fragment } from 'react';

import SearchBar from '../Components/SearchBar';
import CardsList from '../Components/CardsList';
import Navbar from '../Components/Navbar';
import { useFetchData, generateUrl } from '../utils';

import { MainBackground, Container } from './styles';

const Main = () => {
  const { data, setFetchParams, currentPage, setCurrentPage } = useFetchData('');

  const handleSubmit = fieldValues => {
    if (fieldValues.length > 3) {
      const urlParams = generateUrl(fieldValues);
      setFetchParams(`?i=${urlParams}`);
    }
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Fragment>
      <Navbar />
      <MainBackground>
        <Container>
          <SearchBar onHandleSubmit={handleSubmit} />
          <CardsList cards={data} onHandleLoadMore={handleLoadMore} />
        </Container>
      </MainBackground>
    </Fragment>
  );
};

export default Main;
