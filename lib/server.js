// Copyright (c) 2019-2020 Open Mobile Platform LLC.
import log from './logger';
import { server as baseServer, routeConfiguringFunction } from 'appium-base-driver';
import { AuroraDriver } from './driver';


async function startServer (port, hostname) {
  const d = new AuroraDriver();
  const server = await baseServer({
    routeConfiguringFunction: routeConfiguringFunction(d),
    port,
    hostname,
  });
  log.info(`AuroraDriver server listening on http://${hostname}:${port}`);
  return server;
}

export { startServer };
