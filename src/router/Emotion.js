import React from 'react';
import EmotionButton from 'components/EmotionButton';
import { withGithubInfo } from 'hocs';
import { getRange } from 'utils';

const { Perf } = window;

class Emotion extends React.Component {
  state = {
    start: false
  };
  componentWillMount() {
    this.time = new Date();
  }

  componentDidMount() {
    console.log('[Emotion] - componentDidMount: ', new Date() - this.time);
  }

  componentDidUpdate() {
    Perf.stop();
    console.log(Perf.getLastMeasurements()[0]);
  }

  handleStart = () => {
    this.setState({ start: true });
    Perf.start();
  };

  handleReset = () => {
    this.setState({ start: false });
    Perf.stop();
  };

  render() {
    return (
      <div>
        <EmotionButton label="Start" onClick={this.handleStart} />
        <EmotionButton label="Reset" onClick={this.handleReset} />
        {this.state.start && (
          <div>
            {getRange(30).map((val, index) => (
              <EmotionButton key={index} label="Click Me" size="large" />
            ))}
            {getRange(30).map((val, index) => (
              <EmotionButton key={index} label="Click Me" />
            ))}
            {getRange(30).map((val, index) => (
              <EmotionButton key={index} label="Click Me" size="small" />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default withGithubInfo(['emotion-js/emotion'])(Emotion);
