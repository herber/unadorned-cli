#!/usr/bin/env node

const compile = require('unadorned');

compile.dir(process.cwd(), process.cwd() + '/out', function (err, files) {
  if (err) throw err;

  console.log('Unadorned - compiling');
});