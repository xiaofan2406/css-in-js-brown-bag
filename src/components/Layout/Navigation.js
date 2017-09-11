import React from 'react';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'configs';
import { theme, colors, variables } from 'styles';

const navLink = css`
  color: ${colors.black};
  text-decoration: none;
  padding: 0 0.5em;
  display: inline-block;
  line-height: ${variables.headerHeight}px;
  height: ${variables.headerHeight}px;
  :hover {
    background-color: ${colors.grey};
  }
`;

const navLinkActive = css`border-bottom: 2px solid ${theme.primaryColor};`;

function Navigation() {
  return (
    <div>
      {Object.values(ROUTES).map(route => (
        <NavLink
          className={navLink}
          activeClassName={navLinkActive}
          key={route.path}
          exact={route.exact}
          to={route.path}
        >
          {route.name}
        </NavLink>
      ))}
    </div>
  );
}

export { Navigation as Component };

export default Navigation;
