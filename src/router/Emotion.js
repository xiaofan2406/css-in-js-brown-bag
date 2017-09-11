import React from 'react';
import EmotionButton from 'components/EmotionButton';
import { withGithubInfo } from 'hocs';

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
    window.Perf.stop();
    console.log(window.Perf.getLastMeasurements()[0]);
  }

  handleStart = () => {
    this.setState({ start: true });
    window.Perf.start();
  };

  render() {
    return this.state.start ? (
      <div>
        <EmotionButton label="Click Me" size="large" />
        <EmotionButton label="Click Me" />
        <EmotionButton label="Click Me" size="small" />
      </div>
    ) : (
      <EmotionButton label="Start" onClick={this.handleStart} size="large" />
    );
  }
}

export default withGithubInfo(['emotion-js/emotion'])(Emotion);
