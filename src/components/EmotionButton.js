import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'emotion/react';
import { theme, colors } from 'styles';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Button = styled.button`
  border: ${({ color }) => `1px solid ${color}`};
  background-color: ${({ color }) => color};
  font-size: ${({ size }) =>
    size === 'large' ? '20px' : size === 'small' ? '12px' : '16px'};
  color: ${colors.white};
  animation: ${fadeIn} 2s;
  padding: 0.5em 0.8em;
  margin: 4px;
  &:hover {
    background-color: ${theme.inverseColor};
    border: 1px solid ${colors.grey};
    color: ${colors.black};
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
