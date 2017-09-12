import React from 'react';

const asDemo = Target => Component => {
  class Demo extends React.Component {
    state = {
      start: false
    };

    componentWillMount() {
      this.time = new Date();
    }

    componentDidMount() {
      console.log(
        `[${Component.displayName || Component.name}] - componentDidMount: `,
        new Date() - this.time
      );
    }

    componentDidUpdate() {
      window.Perf.stop();
      console.log(window.Perf.getLastMeasurements()[0]);
    }

    handleStart = () => {
      this.setState({ start: true });
      window.Perf.start();
    };

    handleReset = () => {
      this.setState({ start: false });
      window.Perf.stop();
    };

    render() {
      return (
        <div>
          <Target label="Start" onClick={this.handleStart} />
          <Target label="Reset" onClick={this.handleReset} />
          {this.state.start && <Component {...this.props} />}
        </div>
      );
    }
  }
  return Demo;
};

export default asDemo;
