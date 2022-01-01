# Up and Running with TypeScript

https://egghead.io/courses/up-and-running-with-typescript

- Started: **1 January 2022**
- Completed: **1 January 2022**

&nbsp;

## Installation

This app leverages [Parcel](https://www.npmjs.com/package/parcel-bundler) for fast, zero configuration compliation of TypeScript.

```bash

# Install Parcel globally
npm install -g parcel-bundler

# Install project files
npm install

```

&nbsp;

## Run

```bash

# Run html server
parcel index.html

```

Server will run on http://localhost:1234. Console will log "Hello from TypeScript".

Alternatively for Node development:

```bash

# Compile dist/index.js
parcel index.ts --target node

# Run
node dist/index.js

```

Command will respond with "Hello from TypeScript"

&nbsp;

## TypeScript

```bash

# Install TypeScript globally
npm install -g typescript

# View TS compiler help
tsc --help

# Manual TS compilation
tsc hello.ts
# => Generates hello.js

# Create tsconfig.json file
tsc --init

```
