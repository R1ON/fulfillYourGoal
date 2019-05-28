import React, { PureComponent } from 'react';

interface IProps {}
interface IState {}

class MainContainer extends PureComponent <IProps, IState> {
  render() {
    return (
      <main className="main">
        <div className="main__title">TITLE</div>
      </main>
    );
  }
}

export default MainContainer;
