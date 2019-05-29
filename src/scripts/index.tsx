import React, { Fragment } from 'react';

import HeaderContainer from './containers/Header';
import MainContainer from './containers/Main';

const userInfo = null;

const Index: React.FC = () => (
  <Fragment>
    <HeaderContainer userInfo={userInfo} />
    <MainContainer />
  </Fragment>
);

export default Index;
