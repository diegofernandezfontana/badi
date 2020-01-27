import React, { Fragment } from 'react';

import Main from './Containers/Main';
import GlobalStyle from './Styles/globalStyles';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  );
};

export default App;
