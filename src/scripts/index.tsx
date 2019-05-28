import React, { Fragment } from 'react';

import HeaderContainer from './containers/Header';
import MainContainer from './containers/Main';

const Index: React.FC = () => (
  <Fragment>
    <HeaderContainer userInfo={{}} />
    <MainContainer />
  </Fragment>
);

export default Index;
