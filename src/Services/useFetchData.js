import React, { useState, useEffect } from "react";
import axios from "axios";

const recipiesApiLink = "http://www.recipepuppy.com/api";
const noCorsApi = "https://cors-anywhere.herokuapp.com/";

const baseRoute = `${noCorsApi}${recipiesApiLink}`;

const useFetchData = params => {
  const [data, setData] = useState([]);
  const [fetchParams, setFetchParams] = useState(params);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (fetchParams) {
      getData(true);
    }
  }, [fetchParams]);

  useEffect(() => {
    if(fetchParams){
      getMoreData();
    }
  }, [currentPage])

  const getData = async () => {
    const response = await axios
      .get(`${baseRoute}/${fetchParams}`)
      .then(res => res.data.results);
    
    setData(response);
  };
  
  const getMoreData =async () => {
    const pageQuery = `&p=${currentPage}`;
    const fetchRoute = `${baseRoute}/${fetchParams}${pageQuery}`;

    const response = await axios
      .get(fetchRoute)
      .then(res => res.data.results);
    
    setData([...data, ...response]);
  }

  return { data, fetchParams, setFetchParams ,currentPage, setCurrentPage};
};

export default useFetchData;
