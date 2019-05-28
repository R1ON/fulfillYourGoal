import React, { PureComponent } from 'react';

import LogoIcon from '../../images/icons/logo.svg';
import ManIcon from '../../images/icons/man.svg';

interface IProps {
  userInfo: {
    name?: string,
  }
}

interface IState {}

class HeaderContainer extends PureComponent <IProps, IState> {
  render() {
    const { userInfo } = this.props;

    return (
      <header className="header">
        <div className="header-content">
          <div className="header-content__logo">
            <img src={LogoIcon} alt="Site logo" aria-hidden />
          </div>
          <div className="header-content__user-info user-info">
            <div className="user-info__name">{userInfo.name || 'No name'}</div>
            <div className="user-info__avatar">
              <img src={ManIcon} alt={userInfo.name || 'No name'} />
            </div>
          </div>
        </div>
        <div className="header__separator" />
        <div className="header__separator header__separator_dark" />
      </header>
    );
  }
}

export default HeaderContainer;
