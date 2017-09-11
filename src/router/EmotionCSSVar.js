import React from 'react';
import EmotionCSSVarButton from 'components/EmotionCSSVarButton';
import { withGithubInfo } from 'hocs';

class EmotionCSSVar extends React.Component {
  state = {
    start: false
  };
  componentWillMount() {
    this.time = new Date();
  }

  componentDidMount() {
    console.log(
      '[EmotionCSSVar] - componentDidMount: ',
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

  render() {
    return this.state.start ? (
      <div>
        <EmotionCSSVarButton label="Click Me" size="large" />
        <EmotionCSSVarButton label="Click Me" />
        <EmotionCSSVarButton label="Click Me" size="small" />
      </div>
    ) : (
      <EmotionCSSVarButton label="Start" onClick={this.handleStart} />
    );
  }
}

export default withGithubInfo(['emotion-js/emotion'])(EmotionCSSVar);
