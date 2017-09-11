import React from 'react';
import { Loader } from 'widgets';
import { css } from 'emotion';
import { spacing } from 'styles';
import githubMark from 'assets/github-mark.png';

const loader = css`
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;
`;

const repoCss = css`
  width: 240px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  & span {
    display: flex;
    align-items: center;
  }
  & img {
    width: 16px;
    margin-right: ${spacing.internal};
  }
`;

const withGithubInfo = repoNames => Component => {
  class WithGithubInfo extends React.Component {
    state = {
      repos: []
    };

    async componentWillMount() {
      const responses = await Promise.all(
        repoNames.map(name => fetch(`https://api.github.com/repos/${name}`))
      );
      const repos = await Promise.all(
        responses.map(response => response.json())
      );
      this.setState({ repos });
    }

    render() {
      return this.state.repos.length > 0 ? (
        <div>
          {this.state.repos.map(repo => (
            <div className={repoCss} key={repo.id}>
              <span>
                <img src={githubMark} alt="github mark" />
                <a href={repo.html_url}>{repo.name}</a>
              </span>
              <span>&#9733; {repo.stargazers_count}</span>
            </div>
          ))}
          <Component {...this.props} />
        </div>
      ) : (
        <div className={loader}>
          <Loader />
        </div>
      );
    }
  }
  return WithGithubInfo;
};

export default withGithubInfo;
