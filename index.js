'use strict';

var RakutenClient = require('./lib/client');

module.exports = function(config) {
  return new RakutenClient(config);
};
