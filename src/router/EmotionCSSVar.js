import React from 'react';
import EmotionCSSVarButton from 'components/EmotionCSSVarButton';
import { withGithubInfo, asDemo } from 'hocs';
import { getRange, compose } from 'utils';

function EmotionCSSVar() {
  return (
    <div>
      {getRange(30).map((val, index) => (
        <EmotionCSSVarButton key={index} label="Click Me" size="large" />
      ))}
      {getRange(30).map((val, index) => (
        <EmotionCSSVarButton key={index} label="Click Me" />
      ))}
      {getRange(30).map((val, index) => (
        <EmotionCSSVarButton key={index} label="Click Me" size="small" />
      ))}
    </div>
  );
}

const enhance = compose(
  withGithubInfo(['emotion-js/emotion']),
  asDemo(EmotionCSSVarButton)
);

export default enhance(EmotionCSSVar);
