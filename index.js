#!/usr/bin/env node
// transpile:main
// Copyright (c) 2019-2020 Open Mobile Platform LLC.

import yargs from 'yargs';
import { asyncify } from 'asyncbox';
import * as driver from './lib/driver';
import * as server from './lib/server';


const { AuroraDriver } = driver;
const { startServer } = server;

const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 4774;

async function main () {
  let port = yargs.argv.port || DEFAULT_PORT;
  let host = yargs.argv.host || DEFAULT_HOST;
  return await startServer(port, host);
}

if (require.main === module) {
  asyncify(main);
}

export { AuroraDriver, startServer };
