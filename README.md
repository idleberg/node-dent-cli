# @nsis/dent-cli

> An opinionated code formatter for NSIS scripts

[![License](https://img.shields.io/github/license/idleberg/node-dent-cli?color=blue&style=for-the-badge)](https://github.com/idleberg/node-dent-cli/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@nsis/dent-cli?style=for-the-badge)](https://www.npmjs.org/package/@nsis/dent-cli)
[![Build](https://img.shields.io/github/actions/workflow/status/idleberg/node-dent-cli/default.yml?style=for-the-badge)](https://github.com/idleberg/node-dent-cli/actions)

## Prerequisites

This is a TypeScript application that depends on a [NodeJS](https://nodejs.org) runtime installed on your computer.

## Usage

### Installation

> [!TIP]
>
> If you don't use a JavaScript runtime such as Node.js, download a binary of the [latest version](/https://github.com/idleberg/node-dent-cli/releases/latest) for Windows.

You could install the `dent` CLI globally

```sh
$ npm install --global @nsis/dent-cli
$ npx dent --help
```

### Single use

Download and execute the latest version using [`npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).

```sh
$ npx @nsis/dent-cli --help
```

### Options

```
Usage: dent [options] <file...>

CLI tool to format NSIS scripts

Options:
  -V, --version               output the version number
  -D, --debug                 prints additional debug messages (default: false)
  -h, --help                  display help for command

Formatting Options
  -e, --eol <"crlf"|"lf">     control how line-breaks are represented (default: "lf")
  -i, --indent-size <number>  number of units per indentation level (default: 2)
  -s, --use-spaces            indent with spaces instead of tabs (default: false)
  -t, --trim                  trim empty lines (default: true)
  -w, --write                 edit files in-place (default: false)
```

## Related

- [dent](https://www.npmjs.com/package/@nsis/dent)

## License

This work is licensed under [The MIT License](LICENSE)
  
