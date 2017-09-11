# CSS in JS Brown Bag
[![Styled with prettier][prettier-badge]][prettier] [![Dependencies Status][dependencies-badge]][dependencies] [![Build Status][build-badge]][build] [![Coverage Status][coverage-badge]][coverage]

[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
[dependencies-badge]: https://img.shields.io/david/xiaofan2406/css-in-js-brown-bag.svg?style=flat-square
[dependencies]: https://david-dm.org/xiaofan2406/css-in-js-brown-bag
[build-badge]: https://img.shields.io/travis/xiaofan2406/css-in-js-brown-bag.svg?style=flat-square
[build]: https://travis-ci.org/xiaofan2406/css-in-js-brown-bag
[coverage-badge]: https://img.shields.io/codecov/c/github/xiaofan2406/css-in-js-brown-bag.svg?style=flat-square
[coverage]: https://codecov.io/gh/xiaofan2406/css-in-js-brown-bag



## Get Started
```
git clone https://github.com/xiaofan2406/css-in-js-brown-bag.git
yarn
yarn dev
```


## Commands

##### Development
```
yarn dev
```

##### Testing
```
yarn test
```

##### Production
- Build the project for production
  ```
  yarn build
  ```
- Start a local server to test production build
  ```
  yarn prod
  ```


## Project Structure
Path                | Import Alias | Description
------------------- | ------------ | -------------------------------------------------------
**config/**         |              | Project tooling configuration files
**src/**            | `src`        | Project source files directory
src/**assets/**     | `assets`     | Common static assets directory
src/**components/** | `components` | Components directory
src/**configs/**    | `configs`    | App config values directory
src/**hocs/**       | `hocs`       | Higher-order components directory
src/**router/**     |              | React Router setup and route-level components directory
src/**styles/**     | `styles`     | Global CSS directory
src/**utils/**      | `utils`      | Utility functions directory
src/**widgets/**    | `widgets`    | Small non business logic related components directory
