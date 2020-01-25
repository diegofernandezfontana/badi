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
      const getData = async () => {
        const response = await axios
          .get(`${baseRoute}/${fetchParams}`)
          .then(res => res.data.results);
        setData(response);
      };

      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchParams]);

  return { data, setFetchParams };
};

export default useFetchData;
