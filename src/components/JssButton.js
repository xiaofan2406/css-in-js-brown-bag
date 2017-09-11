import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { theme, colors } from 'styles';

const styles = {
  button: {
    border: ({ color }) => `1px solid ${color}`,
    backgroundColor: ({ color }) => color,
    animation: 'fade-in 2s',
    padding: '0.5em 0.8em',
    fontSize: ({ size }) =>
      size === 'large' ? '20px' : size === 'small' ? '12px' : '16px',
    '&:hover': {
      backgroundColor: theme.inverseColor,
      border: `1px solid ${colors.grey}`
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

function JssButton({ classes, sheet, label, size, ...rest }) {
  return (
    <button className={classes.button} {...rest}>
      {label}
    </button>
  );
}

JssButton.propTypes = {
  classes: PropTypes.object.isRequired,
  sheet: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
};

JssButton.defaultProps = {
  size: 'normal',
  color: theme.primaryColor
};

export default injectSheet(styles)(JssButton);
