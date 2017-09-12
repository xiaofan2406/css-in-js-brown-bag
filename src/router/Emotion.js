import React from 'react';
import EmotionButton from 'components/EmotionButton';
import { withGithubInfo, asDemo } from 'hocs';
import { getRange, compose } from 'utils';

function Emotion() {
  return (
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
  );
}

const enhance = compose(
  withGithubInfo(['cssinjs/jss', 'cssinjs/react-jss']),
  asDemo(EmotionButton)
);

export default enhance(Emotion);
