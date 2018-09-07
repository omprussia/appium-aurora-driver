// Copyright (c) 2019-2020 Open Mobile Platform LLC.
'use strict';

const gulp = require('gulp');
const boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);

boilerplate({
  build: 'appium-aurora-driver',
  testTimeout: 15000,
  watchE2E: true,
});
