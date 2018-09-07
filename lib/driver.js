// Copyright (c) 2019-2020 Open Mobile Platform LLC.
import _ from 'lodash';
import { BaseDriver, errors } from 'appium-base-driver';
import Bootstrap from './aurora-bootstrap.js';
import log from './logger';

class AuroraDriver extends BaseDriver {
  constructor (opts = {}, shouldValidateCaps = true) {
    super(opts, shouldValidateCaps);
  }

  async createSession (...args) {
    try {
      let [sessionId, caps] = await super.createSession(...args);
      await this.startAppiumForAuroraSession();
      return [sessionId, caps];
    } catch (e) {
      await this.deleteSession();
      throw e;
    }
  }

  async executeCommand(cmd, ...args) {
    if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), cmd)) {
      AuroraDriver.prototype[cmd] = async function() {
        return await this.bootstrap.sendAction(cmd, Array.from(arguments).slice(0, -1));
      };
    }
    return await super.executeCommand(cmd, ...args);
  }

  async startAppiumForAuroraSession () {
    this.bootstrap = new Bootstrap(this.opts);
    await this.bootstrap.start();
  }

  async deleteSession () {
    log.debug('Deleting AuroraDriver session');
    await this.bootstrap.shutDown();
    await super.deleteSession();
  }

  get driverData () {
    return {};
  }
}

export { AuroraDriver };
export default AuroraDriver;
