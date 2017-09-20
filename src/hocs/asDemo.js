import React from 'react';
import { css } from 'emotion';
import { getRange } from 'utils';

const controls = css`
  width: 180px;
  display: flex;
  justify-content: space-between;
`;

const DEMO_COUNT = 500;

const asDemo = Component =>
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
          <div className={controls}>
            <Component label="Start" onClick={this.handleStart} />
            <Component label="Reset" onClick={this.handleReset} />
          </div>
          {this.state.start && (
            <div>
              {getRange(DEMO_COUNT).map((val, index) => (
                <Component key={index} label="Click Me" size="large" />
              ))}
              {getRange(DEMO_COUNT).map((val, index) => (
                <Component key={index} label="Click Me" />
              ))}
              {getRange(DEMO_COUNT).map((val, index) => (
                <Component key={index} label="Click Me" size="small" />
              ))}
            </div>
          )}
        </div>
      );
    }
  };

export default asDemo;
