import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  button: {
    border: 'none',
    backgroundColor: props => props.color,
    animation: 'fade-in 2s'
  },
  '@keyframes fade-in': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  }
};

function JssButton({ classes, sheet, label, ...rest }) {
  return (
    <button className={classes.button} {...rest}>
      {label}
    </button>
  );
}

JssButton.propTypes = {
  classes: PropTypes.object.isRequired,
  sheet: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

export default injectSheet(styles)(JssButton);
