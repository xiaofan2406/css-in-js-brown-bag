import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from 'emotion/react';
import { theme, colors } from 'styles';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const className = css`
  border: var(--color);
  background-color: var(--color);
  font-size: var(--fontSize);
  color: var(--textColor);
  animation: var(--animation);
  padding: 0.5em 0.8em;
  &:hover {
    background-color: var(--hoverBg);
    border: var(--hoverBorder);
    color: var(--inverseTextColor);
  }
  &:focus {
    outline: none;
  }
`;

function EmotionCSSVarButton({ label, color, size, ...rest }) {
  return (
    <button
      className={className}
      style={{
        '--textColor': colors.white,
        '--color': color,
        '--animation': `${fadeIn} 2s`,
        '--hoverBg': `${theme.inverseColor}`,
        '--hoverBorder': `1px solid ${colors.grey}`,
        '--inverseTextColor': colors.black,
        '--fontSize':
          size === 'large' ? '20px' : size === 'small' ? '12px' : '16px'
      }}
      {...rest}
    >
      {label}
    </button>
  );
}

EmotionCSSVarButton.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
};

EmotionCSSVarButton.defaultProps = {
  size: 'normal',
  color: theme.primaryColor
};

export default EmotionCSSVarButton;
