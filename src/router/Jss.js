import JssButton from 'components/JssButton';
import { withGithubInfo, asDemo } from 'hocs';
import { compose } from 'utils';

export default compose(
  withGithubInfo(['cssinjs/jss', 'cssinjs/react-jss']),
  asDemo
)(JssButton);
