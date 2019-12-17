import React, { PureComponent, ReactNode } from 'react';

import * as R from 'ramda';

import LogoIcon from '../../images/icons/logo.svg';
import ManIcon from '../../images/icons/man.svg';

interface IProps {
  userInfo?: {
    name: string,
  } | null
}

interface IState {}

class HeaderContainer extends PureComponent <IProps, IState> {
  public render(): ReactNode {
    const { userInfo } = this.props;

    const userName: string = R.propOr('No name', 'name', userInfo);

    return (
      <header className="header">
        <div className="header-content">
          <div className="header-content__logo">
            <img src={LogoIcon} alt="Site logo" aria-hidden />
          </div>
          <div className="header-content__user-info user-info">
            <div className="user-info__name">{userName}</div>
            <div className="user-info__avatar">
              <img src={ManIcon} alt={userName} />
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
