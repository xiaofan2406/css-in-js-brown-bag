import React from 'react';
import JssButton from 'components/JssButton';
import { withGithubInfo, asDemo } from 'hocs';
import { getRange, compose } from 'utils';

function Jss() {
  return (
    <div>
      {getRange(30).map((val, index) => (
        <JssButton key={index} label="Click Me" size="large" />
      ))}
      {getRange(30).map((val, index) => (
        <JssButton key={index} label="Click Me" />
      ))}
      {getRange(30).map((val, index) => (
        <JssButton key={index} label="Click Me" size="small" />
      ))}
    </div>
  );
}

const enhance = compose(
  withGithubInfo(['cssinjs/jss', 'cssinjs/react-jss']),
  asDemo(JssButton)
);

export default enhance(Jss);
