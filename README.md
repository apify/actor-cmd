# Actor command-line interface (Actor CLI)

<a href="https://www.npmjs.com/package/actor-cmd"><img src="https://badge.fury.io/js/actor-cmd.svg" alt="npm version" loading="lazy" style="display:inherit;" /></a>
<a href="https://travis-ci.com/apify/actor-cmd?branch=master"><img src="https://travis-ci.com/apify/actor-cmd.svg?branch=master" loading="lazy" alt="Build Status" style="display:inherit;" /></a>

...

## Installation

### Via Homebrew

On macOS (or Linux), you can install the Actor CLI via the [Homebrew package manager](https://brew.sh).

```bash
brew install actor-cmd
```

### Via NPM

First, make sure you have [Node.js](https://nodejs.org) version 20 or higher with NPM installed on your computer:

```bash
node --version
npm --version
```

Install or upgrade Actor CLI by running:

```bash
npm -g install actor-cmd
```

If you receive an `EACCES` error, you might need to run the command as root:

```bash
sudo npm -g install actor-cmd
```

Alternatively, you can use [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) and install Actor CLI only into a selected user-level Node version without requiring root privileges:

```
nvm install 20
nvm use 20
npm -g install actor-cmd
```

Finally, verify that Actor CLI was installed correctly by running:

```bash
apify --version
```

which should print something like:

```
actor-cmd/0.10.0 darwin-x64 node-v20.14.2
```

> You can also skip the manual global installation altogether and use `npx actor-cmd` with all the following commands instead.

## Basic usage

The following examples demonstrate the basic usage of Actor CLI.

...

### Need help?

To see all CLI commands simply run:

```bash
actor help
```

To get information about a specific command run:

```bash
actor help COMMAND
```

Still haven't found what you were looking for? Please go to [Apify Help center](https://www.apify.com/help)
or [contact us](https://www.apify.com/contact).

## Command reference

This section contains printouts of `apify help` for all commands.

<!-- prettier-ignore-start -->
<!-- commands -->
* [`actor get-input`](#actor-get-input)
* [`actor get-value KEY`](#actor-get-value-key)
* [`actor help [COMMAND]`](#actor-help-command)
* [`actor push-data [ITEM]`](#actor-push-data-item)
* [`actor set-value KEY [VALUE]`](#actor-set-value-key-value)

## `actor get-input`

Gets the Actor input value from the default key-value store associated with the Actor run.

```
USAGE
  $ actor get-input

DESCRIPTION
  Gets the Actor input value from the default key-value store associated with the Actor run.
```

_See code: [src/commands/get-input.ts](https://github.com/apify/actor-cmd/blob/v0.0.1/src/commands/get-input.ts)_

## `actor get-value KEY`

Gets a value from the default key-value store associated with the Actor run.

```
USAGE
  $ actor get-value KEY

ARGUMENTS
  KEY  Key of the record in key-value store

DESCRIPTION
  Gets a value from the default key-value store associated with the Actor run.
```

_See code: [src/commands/get-value.ts](https://github.com/apify/actor-cmd/blob/v0.0.1/src/commands/get-value.ts)_

## `actor help [COMMAND]`

Display help for actor.

```
USAGE
  $ actor help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for actor.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.21/src/commands/help.ts)_

## `actor push-data [ITEM]`

Saves data to Actor's run default dataset.

```
USAGE
  $ actor push-data [ITEM]

ARGUMENTS
  ITEM  JSON string with one object or array of objects containing data to be stored in the default dataset.

DESCRIPTION
  Saves data to Actor's run default dataset.

  Accept input as:
  - JSON argument:
  $ actor push-data {"key": "value"}
  - Piped stdin:
  $ cat ./test.json | actor push-data
```

_See code: [src/commands/push-data.ts](https://github.com/apify/actor-cmd/blob/v0.0.1/src/commands/push-data.ts)_

## `actor set-value KEY [VALUE]`

Sets or removes record into the default key-value store associated with the Actor run.

```
USAGE
  $ actor set-value KEY [VALUE] [-c <value>]

ARGUMENTS
  KEY    Key of the record in key-value store.
  VALUE  Record data, which can be one of the following values:
         - If empty, the record in the key-value store is deleted.
         - If no `contentType` flag is specified, value is expected to be any JSON string value.
         - If options.contentType is set, value is taken as is.

FLAGS
  -c, --contentType=<value>  Specifies a custom MIME content type of the record. By default "application/json" is used.

DESCRIPTION
  Sets or removes record into the default key-value store associated with the Actor run.

  It is possible to pass data using argument or stdin.

  Passing data using argument:
  $ actor set-value KEY my-value

  Passing data using stdin with pipe:
  $ cat ./my-text-file.txt | actor set-value KEY --contentType text/plain
```

_See code: [src/commands/set-value.ts](https://github.com/apify/actor-cmd/blob/v0.0.1/src/commands/set-value.ts)_
<!-- commandsstop -->
<!-- prettier-ignore-end -->
