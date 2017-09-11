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
  animation: ${fadeIn} 2s;
  padding: var(--padding);
  font-size: var(--fontSize);
  &:hover {
    background-color: ${theme.inverseColor};
    border: 1px solid ${colors.grey};
  }
  &:focus {
    outline: none;
  }
`;

function EmotionButton({ label, color, size, ...rest }) {
  return (
    <button
      className={className}
      style={{
        '--color': color,
        '--padding':
          size === 'large'
            ? '12px 16px'
            : size === 'small' ? '8px 10px' : '10px 12px',
        '--fontSize':
          size === 'large' ? '20px' : size === 'small' ? '12px' : '16px'
      }}
      {...rest}
    >
      {label}
    </button>
  );
}

EmotionButton.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
};

EmotionButton.defaultProps = {
  size: 'normal',
  color: theme.primaryColor
};

export default EmotionButton;
