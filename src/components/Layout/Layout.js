import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { theme, variables, spacing } from 'styles';
import 'styles/reset.css';
import 'styles/animation.css';

import Brand from './Brand';
import Navigation from './Navigation';

const layout = css`
  width: 80%;
  margin: auto;
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize}px;
`;

const header = css`
  margin-top: ${spacing.break}px;
  height: ${variables.headerHeight}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const main = css`
  padding: ${spacing.internalBreak}px;
  margin-top: ${spacing.external}px;
  background-color: #fbfbfb;
  height: 100vh;
`;

function Layout({ children }) {
  return (
    <div className={layout}>
      <div className={header}>
        <Brand />
        <Navigation height={100} />
      </div>
      <div className={main}>{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export { Layout as Component };

export default Layout;
