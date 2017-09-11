import React from 'react';
import { css } from 'emotion/react';

const home = css`
  & ul {
    padding-left: 20px;
  }
  & li {
    margin: 32px 0px;
  }
`;

function Home() {
  return (
    <div className={home}>
      <h1>CSS in JS</h1>
      <ul>
        <li>
          <a href="https://github.com/MicheleBertoli/css-in-js">
            React: CSS in JS techniques comparison
          </a>
        </li>
        <li>
          <a href="https://github.com/tuchk4/awesome-css-in-js">
            Awesome CSS in JS
          </a>
        </li>
        <li>
          <a href="https://github.com/hellofresh/css-in-js-perf-tests">
            CSS-in-JS Performance Tests
          </a>
        </li>
        <li>
          <a href="https://github.com/A-gambit/CSS-IN-JS-Benchmarks">
            CSS in JS Benchmarks
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
