import React, { PureComponent, ReactNode } from 'react';

import { connect } from 'react-redux';

import appActions from '../actions/appActions';

import R from '../utils/ramda';

type goalType = {
  id: number;
  text: string;
};

interface IProps {}
interface IState {
  showModal: boolean,
  goals: goalType[],
}

class MainContainer extends PureComponent <IProps, IState> {
  readonly state: IState = {
    showModal: false,
    goals: [],
  };

  public addNewGoal = () => {
    const { goals } = this.state;

    this.setState({
      showModal: true,
      goals: R.concat(goals, [{
        id: goals.length,
        text: '',
      }]),
    });
  };

  public render(): ReactNode {
    const { goals, showModal } = this.state;

    return (
      <main className="main">
        <div className="main__title">TITLE</div>
        <div className="main__tiles tiles">
          <div className="tiles__outstanding-tasks tile">
            <ul>
              {!R.isEmpty(goals) && R.map(goal => (
                <li key={goal.id}>{goal.text}</li>
              ), goals)}
            </ul>
            <button className="tile__add-button" onClick={this.addNewGoal}>
              <div>+</div>
            </button>
          </div>
          {/*<div className="tiles__completed-tasks">tasks</div>*/}
        </div>
      </main>
    );
  }
}

// const mapDispatchToProps = (dispatch)

export default connect(null, null)(MainContainer);
