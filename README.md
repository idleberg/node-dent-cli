# @nsis/dent-cli

> An opinionated code formatter for NSIS scripts

[![License](https://img.shields.io/github/license/idleberg/node-dent-cli?color=blue&style=for-the-badge)](https://github.com/idleberg/node-dent-cli/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@nsis/dent-cli?style=for-the-badge)](https://www.npmjs.org/package/@nsis/dent-cli)
[![Build](https://img.shields.io/github/actions/workflow/status/idleberg/node-dent-cli/default.yml?style=for-the-badge)](https://github.com/idleberg/node-dent-cli/actions)

## Prerequisites

This is a TypeScript applicaiton that dependes on a [NodeJS](https://nodejs.org) runtime installed on your computer.

## Usage

### Installation

You could install the `dent` CLI globally

```sh
$ npm install --global @nsis/dent-cli
$ dent --help
```

### Single use

Download and execute the latest version using [`npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).

```sh
$ npx dent --help
```

### Options

```
Usage: index [options] <file...>

CLI tool to format NSIS scripts

Options:
  -V, --version               output the version number
  --eol <"crlf"|"lf">         control how line-breaks are represented
  -i, --indent-size <number>  number of units per indentation level (default: 2)
  -s, --use-spaces            indent with spaces instead of tabs (default: false)
  --trim                      trim empty lines (default: true)
  --write                     edit files in-place (default: false)
  --quiet                     suppress output (default: false)
  --debug                     prints additional debug messages (default: false)
  -h, --help                  display help for command
```

## Related

- [`dent` Library](https://www.npmjs.com/package/@nsis/dent)

## License

This work is licensed under [The MIT License](LICENSE)
  
