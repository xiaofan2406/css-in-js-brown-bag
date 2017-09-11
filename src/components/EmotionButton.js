import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'emotion/react';
import { theme, colors } from 'styles';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Button = styled.button`
  color: ${colors.black};
  border: ${({ color }) => `1px solid ${color}`};
  background-color: ${({ color }) => color};
  animation: ${fadeIn} 2s;
  padding: 0.5em 0.8em;
  font-size: ${({ size }) =>
    size === 'large' ? '20px' : size === 'small' ? '12px' : '16px'};
  &:hover {
    background-color: ${theme.inverseColor};
    border: 1px solid ${colors.grey};
  }
  &:focus {
    outline: none;
  }
`;

function EmotionButton({ label, ...rest }) {
  return <Button {...rest}>{label}</Button>;
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
