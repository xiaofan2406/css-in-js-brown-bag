import EmotionCSSVarButton from 'components/EmotionCSSVarButton';
import { withGithubInfo, asDemo } from 'hocs';
import { compose } from 'utils';

export default compose(
  withGithubInfo(['emotion-js/emotion']),
  asDemo
)(EmotionCSSVarButton);
