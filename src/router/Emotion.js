import EmotionButton from 'components/EmotionButton';
import { withGithubInfo, asDemo } from 'hocs';
import { compose } from 'utils';

export default compose(
  withGithubInfo(['emotion-js/emotion']),
  asDemo
)(EmotionButton);
