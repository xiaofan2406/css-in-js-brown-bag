import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { theme, colors } from 'styles';

const styles = {
  button: {
    border: ({ color }) => `1px solid ${color}`,
    backgroundColor: ({ color }) => color,
    fontSize: ({ size }) =>
      size === 'large' ? '20px' : size === 'small' ? '12px' : '16px',
    color: colors.white,
    animation: 'fade-in 2s',
    padding: '0.5em 0.8em',
    '&:hover': {
      backgroundColor: theme.inverseColor,
      border: `1px solid ${colors.grey}`,
      color: colors.black
    },
    '&:focus': {
      outline: 'none'
    }
  },
  '@keyframes fade-in': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  }
};

function JssButton({ classes, label, onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      {label}
    </button>
  );
}

JssButton.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string
};

JssButton.defaultProps = {
  onClick: null,
  size: 'normal',
  color: theme.primaryColor
};

export default injectSheet(styles)(JssButton);
