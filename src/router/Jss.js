import React from 'react';
import JssButton from 'components/JssButton';

const { Perf } = window;

class Jss extends React.Component {
  state = {
    start: false
  };
  componentWillMount() {
    this.time = new Date();
  }

  componentDidMount() {
    console.log('[JSS] - componentDidMount: ', new Date() - this.time);
  }

  componentDidUpdate() {
    Perf.stop();
    console.log(Perf.getLastMeasurements()[0]);
  }

  handleStart = () => {
    this.setState({ start: true });
    Perf.start();
  };

  render() {
    return this.state.start ? (
      <div>
        <JssButton label="Click Me" size="large" />
        <JssButton label="Click Me" />
        <JssButton label="Click Me" size="small" />
      </div>
    ) : (
      <JssButton label="Start" onClick={this.handleStart} size="large" />
    );
  }
}

export default Jss;
