# Up and Running with TypeScript

https://egghead.io/courses/up-and-running-with-typescript

Started: **1 January 2021**

## Installation

This app leverages [Parcel](https://www.npmjs.com/package/parcel-bundler) for fast, zero configuration compliation of TypeScript.

```
# Install Parcel globally
npm install -g parcel-bundler

# Install project files
npm install

```

## Run

```
# Run html server
parcel index.html

```

Server will run on http://localhost:1234. Console will log "Hello from TypeScript".

Alternatively for Node development:

```
# Compile dist/index.js
parcel index.ts --target node

# Run
node dist/index.js

```

Command will respond with "Hello from TypeScript"
