import React from 'react';
import { css } from 'emotion/react';
import { fontSizes, colors } from 'styles';
import { APP_TITLE } from 'configs';
import logo from 'assets/logo.svg';

const brand = css`
  display: flex;
  align-items: center;
  & img {
    animation: spin infinite 10s linear;
    height: 34px;
  }
  & span {
    font-size: ${fontSizes.large}px;
    color: ${colors.black};
  }
`;

class Brand extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className={brand}>
        <img src={logo} alt="logo" />
        <span>{APP_TITLE}</span>
      </div>
    );
  }
}

export { Brand as Component };

export default Brand;
