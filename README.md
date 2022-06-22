<h1 align="center">Cast Challenge #3</h1>

<p align="center">
  <img src="https://v.fastcdn.co/u/0bc8903d/60196950-0-SG-Forge---Banner.jpg" alt="CAST Challenge" />
  <br>
  <blockquote align="center"><h3>Finastra's take on <a href="https://www.cast-challenge.com/">CAST Challenge</a> #3: Multi-Chain Security Token Reporter</h3></blockquote>
</p>

<p align="center">
  <a href="https://github.com/Finastra/angular-nestjs-starter/actions?query=workflow%3ABuild">
  <img src="https://github.com/Finastra/angular-nestjs-starter/workflows/Build/badge.svg" alt="Build status" />
  </a>
  <a href="./LICENSE.md"><img src="https://img.shields.io/github/license/finastra/angular-nestjs-starter" alt="Repo License" /></a>
  <a href="https://github.com/Finastra/angular-nestjs-starter/issues">
    <img src="https://img.shields.io/badge/PRs-welcome-green" alt="PRs welcome"/>
  </a>
  <a href="https://gitpod.io/#https://github.com/Finastra/angular-nestjs-starter">
    <img src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod">
  </a>
  <a href="https://github.com/facebook/jest">
    <img src="https://jestjs.io/img/jest-badge.svg" alt="unit tests with Jest" />
  </a>
  <a href="https://twitter.com/FinastraFS">
    <img src="https://img.shields.io/twitter/follow/FinastraFS.svg?style=social&label=Follow">
  </a>
</p>

<br>

## 🚀 Quick Start

```
npm start
```

Or in two separate commands :

```
npm run dev

npm run start:server
```

<br>

## Environement variables

| Variable           | Default value                   |
| :----------------- | :------------------------------ |
| `PORT`             | `3000`                          |
| `FIO_GQL_ENDPOINT` | `http://localhost:6664/graphql` |

> Duplicate the `.env.template` and rename it to .env 👌🏼

<br>

## 🧙‍♂️ Commands

| Command        | Description                                                |
| :------------- | :--------------------------------------------------------- |
| `nx`           | See available commands                                     |
| `dev`          | Builds client in watch mode                                |
| `start:server` | Builds the server in watch mode                            |
| `start`        | Builds the client and then starts the server in watch mode |
| `build:prod`   | Builds both client and server in production mode           |
| `test:cov`     | Run test and outptus coverage                              |

<br>

_Below are some more advanced commands that might speed up your development flow:_

### Generate a new features

Run `ng g @nrwl/angular:lib my-feature --directory=features --simpleModuleName --routing --lazy` to generate a features library.
Then run `npx ng g component my-feature --project=features-my-feature --flat` to generate the underlying component

### Generate a new cdk

The Component Dev Kit (CDK) is a set of components shared accross you project.

Start by creating your cdk lib by running `ng g @nrwl/angular:lib foo --directory=cdk --simpleModuleName`.

And then run `ng g component foo --project=cdk-foo --flat` to generate a new component.

### Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@finastra/mylib`.

### Running unit tests

Run `npm t` to execute the unit tests via [Jest](https://jestjs.io).

Run `npm run test:cov` to execute the unit tests and output coverage.

Run `nx affected:test` to execute the unit tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

<br>

## Related links

- [CAST Challenge's Website](https://www.cast-challenge.com/)
- [CAST Challenge's Discord](https://discord.gg/e3NYCEZcMp)
- [CAST Framework's Website](https://www.cast-framework.com/)
- [CAST Framework's Github](https://github.com/castframework/cast1)

<br>

[![Brought to you by Finastra](https://raw.githubusercontent.com/Finastra/finastra-nodejs-libs/develop/media/spread-knowledge-readme-banner%402x.png)](https://www.finastra.com/)
